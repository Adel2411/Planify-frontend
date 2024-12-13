import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { ModeToggle } from "@/components/ModeToggle";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const centuryGothic = localFont({
  src: "./fonts/CenturyGothic.woff",
  variable: "--font-century-gothic",
});

const centuryGothicItalic = localFont({
  src: "./fonts/CenturyGothic-Italic.woff",
  variable: "--font-century-gothic-italic",
});

const centuryGothicBold = localFont({
  src: "./fonts/CenturyGothic-Bold.woff",
  variable: "--font-century-gothic-bold",
});

const centuryGothicBoldItalic = localFont({
  src: "./fonts/CenturyGothic-BoldItalic.woff",
  variable: "--font-century-gothic-bold-italic",
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
        className={`${poppins.className} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ModeToggle />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}

export {
  centuryGothic,
  centuryGothicItalic,
  centuryGothicBold,
  centuryGothicBoldItalic,
};
