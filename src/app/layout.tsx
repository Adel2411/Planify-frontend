import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Logo from "@/components/Logo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Planify",
  description: "Effortless Marketing, Endless Possibilities",
  keywords: ["marketing", "planning", "business"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-gradient-to-br from-primary/10 to-background/50`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Logo />
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
