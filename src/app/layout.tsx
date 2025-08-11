import FrameOverlay from "@/components/frame-overlay";
import Menu from "@/components/menu";
import buildSEO from "@/lib/seo";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
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
  title: "Juan Christian — Software Engineer",
  description: "Juan Christian is a Software Engineer based in Indonesia",
});

const DynamicCustomCursor = dynamic(
  () => import("@/components/custom-cursor"),
  {
    ssr: true,
  }
);

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
          {/* <NoiseOverlay /> */}
          <FrameOverlay />
          <DynamicCustomCursor />
          <Menu />
          <main className='w-full h-screen px-6 md:px-12 py-8'>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
