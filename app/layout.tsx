import type { Metadata } from "next";

import "./globals.css";

import { SiteConfig } from "@/config/SiteConfig";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        href: SiteConfig.faviconDark,
        url: SiteConfig.faviconDark,
      },
      {
        media: "(prefers-color-scheme: light)",
        href: SiteConfig.favicon,
        url: SiteConfig.favicon,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
