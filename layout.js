import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata = {
  title: "Shaina Bowser Portfolio",
  description: "Creative Developer — Frontend | AI | Cloud",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

        {/* 🚀 Global Footer */}
        <footer className="w-full bg-black/40 text-purple-300 text-center text-sm py-6 border-t border-purple-800 mt-12">
          <p>
            © {new Date().getFullYear()} Shaina Bowser. Built with 💜 using Next.js, Tailwind, and star-powered creativity.
          </p>
        </footer>
      </body>
    </html>
  );
}

