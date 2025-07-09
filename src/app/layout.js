import "./globals.css";
import { Inter, Urbanist, Montserrat, Raleway } from "next/font/google";
import localFont from "next/font/local";

// Google Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

// Local Font
const actayWide = localFont({
  src: [
    {
      path: "../fonts/ActayWide-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/ActayWide-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-actay-wide",
  display: "swap",
});

export const metadata = {
  title: "CLARION SOLUTIONS",
  description:
    "Boost your website's position in Google and attract more organic traffic. We work with businesses of all sizes — from local companies to large eCommerce projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${urbanist.variable} ${montserrat.variable} ${raleway.variable} ${actayWide.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
