import FrameOverlay from "@/components/frame-overlay";
import Header from "@/components/header";
import NoiseOverlay from "@/components/noise-overlay";
import buildSEO from "@/lib/seo";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import "./globals.css";

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
  display: "swap",
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

export const metadata: Metadata = buildSEO({
  title: "Juan Christian — Indonesian Developer",
  description: "Juan Christian is a Developer based in Indonesia",
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
      lang='en'
      className={`${ppGoshaSans.variable} ${ppNeueMontreal.variable}`}
    >
      <body className='font-gosha overflow-hidden'>
        <NoiseOverlay />
        <FrameOverlay />
        <DynamicCustomCursor />
        <main className='w-full h-screen px-12 py-8'>
          <Header />
          <section className='@container/main mx-auto w-full max-w-7xl mt-12'>
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
