import "./globals.css";
import { Inter, Urbanist, Montserrat, Raleway, Oswald } from "next/font/google";

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

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
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
        className={`${inter.variable} ${urbanist.variable} ${montserrat.variable} ${raleway.variable} ${oswald.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
