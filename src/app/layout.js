import {Instrument_Serif } from 'next/font/google'
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ['latin'],
  variable: '--instrument-serif'
})


export const metadata = {
  title: "Shawn",
  description: "I'm a professional writer and freelance developer based in Denver, CO. This website is a collection of my work and maybe a couple of other things.",
  openGraph: {
    title: "Shawn",
    description: "I'm a professional writer and freelance developer based in Denver, CO. This website is a collection of my work and maybe a couple of other things.",
    url: "https://www.shawndavis.work",
    siteName: "Shawn",
    local: "en_US",
    type: "website"
  },
};

export const viewport = {
  themeColor: '#6D6C60',
  width: "device-width",
  initialScale: "1.0",
  minimumScale: "1.0",
  viewportFit: "cover"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${instrumentSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
