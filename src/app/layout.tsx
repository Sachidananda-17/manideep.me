import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Sachidananda Manideep -  Portfolio",
  description:
    "Sachidananda Manideep is a Software Engineer at Razorpay building AI agents, agentic workflows and MCP-based tool integrations. 2nd place at the Sarvam Epoch Buildathon, Razorpay MVP and AI Whisperer award winner, and former AI/ML research intern at the University of Galway.",
  keywords: [
    "Sachidananda Manideep",
    "AI Engineer",
    "AI Agents",
    "Agentic Workflows",
    "Model Context Protocol",
    "MCP",
    "LLM",
    "ADLC",
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

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-BK2D6GWSM8" />
    </html>
  );
}
