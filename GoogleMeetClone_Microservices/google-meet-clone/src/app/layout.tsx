import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import { googleSans, googleSansText, inter } from "./fonts";

export const metadata: Metadata = {
  title: "Google Meet: Online Web and Video Conferencing Calls",
  description: "Use Google Meet for secure online web conferencing calls and video chat as a part of Google Workspace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${googleSans.variable} ${googleSansText.variable} ${inter.variable}`}>
      <body suppressHydrationWarning className="antialiased bg-white">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
