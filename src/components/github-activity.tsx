import { GithubHeatmap, type Day } from "./github-heatmap";
import { PageTitle } from "./page-title";
import { Reveal } from "./reveal";

const USERNAME = "Sachidananda-17";

async function getContributions(): Promise<Day[] | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=all`,
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) return null;
    const data = await res.json();
    const days: Day[] = data.contributions;
    return days.sort((a, b) => a.date.localeCompare(b.date));
  } catch {
    return null;
  }
}

export async function GithubActivity() {
  const days = await getContributions();
  if (!days || days.length === 0) return null;

  return (
    <section className="section" id="activity">
      <PageTitle title="Commit activity" eyebrow="Open source" />
      <Reveal>
        <GithubHeatmap username={USERNAME} days={days} />
      </Reveal>
    </section>
  );
}
