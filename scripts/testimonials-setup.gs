/**
 * One-time setup for the testimonials form + sheet.
 *
 * Use: paste this file into Apps Script, put your sheet's ID in SHEET_ID
 * below, pick "setup" in the toolbar and click Run (approve the permissions).
 * The share link for the form appears in the Execution log.
 *
 * Your sheet's ID is the long text in its address bar:
 *   https://docs.google.com/spreadsheets/d/<THIS PART>/edit
 * (If you opened Apps Script from the sheet via Extensions > Apps Script, the
 * ID is optional.)
 *
 * What it does:
 *  1. Creates the form (name, role, company, testimonial).
 *  2. Sends responses to this spreadsheet as the tab "Form Responses 1".
 *  3. Adds an "Approved" Yes/No dropdown in column F.
 *  4. Fills the "Approved" tab with only the rows marked Yes (this tab is the
 *     one you publish to the web as CSV).
 *  5. Emails you whenever a new response arrives.
 */
const SHEET_ID = "1UOhkgPV5ibNjMLbYKisJ3mr_TYVCbUm-vJUfZNidUh8";
const FORM_TITLE = "Leave a testimonial for Manideep";
const RESPONSES_TAB = "Form Responses 1";
const APPROVED_TAB = "Approved";

function setup() {
  const ss = getSheet_();
  const props = PropertiesService.getScriptProperties();

  // Running twice must not create a second form.
  const existingId = props.getProperty("FORM_ID");
  if (existingId) {
    const f = FormApp.openById(existingId);
    Logger.log("Already set up.\nShare link: " + f.getPublishedUrl() + "\nEdit link:  " + f.getEditUrl());
    return;
  }

  // 1. Move any old/sample tab out of the way (keeps its data, just renames it).
  const old = ss.getSheetByName(RESPONSES_TAB);
  if (old) old.setName("Sample data (delete me)");
  const before = ss.getSheets().map((s) => s.getSheetId());

  // 2. Create the form.
  const form = FormApp.create(FORM_TITLE);
  form.setDescription("Share a few words about working with Manideep. Approved testimonials appear on his portfolio.");
  form.setConfirmationMessage("Thank you! Your testimonial will appear after review.");
  form.setCollectEmail(false);
  form.addTextItem().setTitle("Your name").setRequired(true);
  form.addTextItem().setTitle("Your role").setRequired(true);
  form.addTextItem().setTitle("Company").setRequired(true);
  form.addParagraphTextItem().setTitle("Your testimonial").setRequired(true);
  props.setProperty("FORM_ID", form.getId());
  props.setProperty("SHEET_URL", ss.getUrl());

  // 3. Send responses to this spreadsheet (Google adds a new tab for them).
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
  SpreadsheetApp.flush();
  Utilities.sleep(3000);
  const resp = ss
    .getSheets()
    .filter((s) => before.indexOf(s.getSheetId()) === -1 && /^Form Responses/i.test(s.getName()))[0];
  if (!resp) throw new Error("Could not find the new responses tab. Check the tabs at the bottom of the sheet.");
  resp.setName(RESPONSES_TAB);

  // 4. Approval column with a Yes/No dropdown.
  resp.getRange("F1").setValue("Approved").setFontWeight("bold");
  resp.getRange("F2:F1000").setDataValidation(
    SpreadsheetApp.newDataValidation().requireValueInList(["Yes", "No"], true).setAllowInvalid(false).build()
  );

  // 5. Public tab: only approved rows, only the columns the site needs.
  let approved = ss.getSheetByName(APPROVED_TAB);
  if (!approved) approved = ss.insertSheet(APPROVED_TAB);
  approved.clear();
  approved
    .getRange("A1")
    .setFormula("=QUERY('" + RESPONSES_TAB + "'!A:F, \"select B,C,D,E where F = 'Yes'\", 1)");

  // 6. Email me about each new response.
  ScriptApp.newTrigger("onNewResponse").forSpreadsheet(ss).onFormSubmit().create();

  Logger.log(
    "Done.\nShare link (put in TESTIMONIAL_FORM_URL): " + form.getPublishedUrl() +
      "\nEdit link: " + form.getEditUrl() +
      "\nNext: delete the 'Sample data (delete me)' tab, then File > Share > Publish to web > 'Approved' tab > CSV."
  );
}

/** Runs on every new form submission and emails you to review it. */
function onNewResponse(e) {
  const v = e.namedValues;
  const body = [
    "Name: " + v["Your name"],
    "Role: " + v["Your role"],
    "Company: " + v["Company"],
    "",
    v["Your testimonial"],
    "",
    'To publish it, set "Approved" to Yes in the sheet:',
    PropertiesService.getScriptProperties().getProperty("SHEET_URL"),
  ].join("\n");
  MailApp.sendEmail(Session.getEffectiveUser().getEmail(), "New testimonial to review", body);
}

/** The sheet this script works on: the attached one, or the one named by SHEET_ID. */
function getSheet_() {
  const active = SpreadsheetApp.getActiveSpreadsheet();
  if (active) return active;
  if (!SHEET_ID || SHEET_ID.indexOf("PASTE_") === 0) {
    throw new Error("Paste your sheet's ID into SHEET_ID at the top of the script (see the comment there).");
  }
  return SpreadsheetApp.openById(SHEET_ID);
}
