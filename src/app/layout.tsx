import CustomCursor from "@/components/custom-cursor";
import FrameOverlay from "@/components/frame-overlay";
import Menu from "@/components/menu";
import NoiseOverlay from "@/components/noise-overlay";
import buildSEO from "@/lib/seo";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";

const ppGoshaSans = localFont({
  variable: "--font-gosha-sans",
  src: [
    {
      path: "./fonts/PPGoshaSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/PPGoshaSans-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

const ppNeueMontreal = localFont({
  variable: "--font-neue-montreal",
  src: [
    {
      path: "./fonts/PPNeueMontreal-Thin.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/PPNeueMontreal-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/PPNeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/PPNeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

const ppEditorialNew = localFont({
  variable: "--font-editorial-new",
  src: [
    {
      path: "./fonts/PPEditorialNew-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/PPEditorialNew-Ultrabold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = buildSEO({
  title: "Juan Christian — Indonesian Developer",
  description: "Juan Christian is a Developer based in Indonesia",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang='en'
      className={`${ppGoshaSans.variable} ${ppNeueMontreal.variable} ${ppEditorialNew.variable}`}
    >
      <body suppressHydrationWarning className='font-gosha overflow-x-hidden'>
        <Providers>
          <NoiseOverlay />
          <FrameOverlay />
          <CustomCursor />
          <Menu />
          <main className='w-full h-screen px-6 md:px-12 py-8'>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
