import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./componenets/Navbar";
import Footer from "./componenets/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nupur's Portfolio",
  description: "Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="wrapper scroll-smooth">
        <div className="nav_bg ">
          <Navbar />
        </div>
        <main className="bg_color">{children}</main>
        
        <Footer />
      </body>
    </html>
  );
}
