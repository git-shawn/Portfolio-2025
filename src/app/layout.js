import { Instrument_Sans, Instrument_Serif } from 'next/font/google'
import "./globals.css";

const instrumentSans = Instrument_Sans({
  weight: ["500", "700"],
  subsets: ['latin'],
  variable: '--instrument-sans'
})

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ['latin'],
  variable: '--instrument-serif'
})


export const metadata = {
  title: "Shawn",
  description: "My personal and professional portfolio. Nice to meet you!",
  openGraph: {
    title: "Shawn",
    description: "My personal and professional portfolio. Nice to meet you!",
    url: "www.shawndavis.work",
    siteName: "Shawn",
    local: "en_US",
    type: "website"
  },
};

export const viewport = {
  themeColor: '#6D6C60',
  width: "device-width",
  initialScale: "1.0",
  maximumScale: "1.0",
  minimumScale: "1.0",
  userScalable: "no",
  viewportFit: "cover"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
