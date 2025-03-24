import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Sachidananda Manideep -  Portfolio",
  description:
    "I'm Sachidananda Manideep, a Full Stack Developer based in Amaravati, India. As a CSE student at SRM University AP and developer at Razorpay, I specialize in full-stack, blockchain, and generative AI applications. Highlights include selecting and working as reserach intern in University of Galyway Ireland, QS-200 in developing a plagarism detection tool. Let's connect to explore innovative projects.",
  keywords: [
    "Sachidananda Manideep",
    "Full Stack Developer",
    "React",
    "Software Engineering",
    "SRM University AP",
    "Portfolio",
    "Frontend Development",
    "Backend Development",
    "Blockchain",
    "Next Tech Lab",
    "Cognizant",
    "Razorpay"
  ],
  robots: "index, follow",
  authors: [
    {
      name: "Sachidananda Manideep.K",
    },
  ],
};

const spaceGrotesk = Space_Grotesk({
  style: "normal",
  display: "swap",
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.variable}>{children}</body>
      <GoogleAnalytics gaId="G-BK2D6GWSM8" />
    </html>
  );
}
