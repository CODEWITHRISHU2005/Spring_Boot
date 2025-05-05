"use client";

import { useEffect } from "react";
import { ThemeProvider } from "next-themes";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration but keep 'dark' if it's there
  useEffect(() => {
    // This runs only on the client after hydration
    const isDark = document.documentElement.classList.contains('dark');
    document.body.className = "antialiased";
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
    </ThemeProvider>
  );
}
