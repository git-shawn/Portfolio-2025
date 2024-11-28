import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({
  weight: ["400", "900"],
  subsets: ['latin'] 
})

export const metadata = {
  title: "Shawn",
  description: "My personal and professional portfolio. Nice to meet you!"
};

export const viewport = {
  themeColor: '#6D6C60',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
