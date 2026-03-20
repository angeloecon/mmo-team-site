import { Inter, Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
  display: "swap",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
  display: "swap",
});

export const metadata = {
  title: "Chosen Ones | Many are Called, Few are Chosen",
  description: "PokeMMO Team CHSN | The Chosen Ones",
  icons: {
    icon: '/favlogo.svg',
    apple: '/favlogo.svg',
    other: [
      { rel: 'icon', url: 'favlogo.svg', sizes: '32x32' }
    ]
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${pressStart.variable} ${vt323.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body
        className={`font-sans bg-zinc-900 text-white min-h-full select-none `}
         
      >
        {children}
      </body>
    </html>
  );
}
