import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shadcn Rich Text Editor - A WYSIWYG editor component",
  description:
    "A classic WYSIWYG rich text editor built with Tiptap, React and Shadcn UI.",
  authors: [{ name: "Arnau Gomez", url: "https://www.arnaugomez.com" }],
  keywords: [
    "rich text editor",
    "wysiwyg",
    "tiptap",
    "react",
    "shadcn ui",
    "editor",
    "text editor",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
