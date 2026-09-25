import type { Metadata } from "next";
import "./globals.css";
import Toast from "./portfolio/NotificationToast";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-aadityabagde.vercel.app"),
  title: "Aaditya Bagde — AI / Machine Learning & Software Developer",
  description: "Portfolio of Aaditya Bagde — Computer Science Undergraduate specializing in Artificial Intelligence, Machine Learning, and Full-Stack Engineering.",
  keywords: ["Aaditya Bagde", "Portfolio", "Machine Learning", "Artificial Intelligence", "Python Developer", "React", "Next.js"],
  authors: [{ name: "Aaditya Bagde" }],
  creator: "Aaditya Bagde",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-aadityabagde.vercel.app",
    title: "Aaditya Bagde — AI / Machine Learning & Software Developer",
    description: "Building intelligent systems and modern digital experiences with AI, Python, and React.",
    siteName: "Aaditya Bagde Portfolio",
    images: [
      {
        url: "/me.webp",
        width: 800,
        height: 800,
        alt: "Aaditya Bagde Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaditya Bagde — AI / Machine Learning & Software Developer",
    description: "Building intelligent systems and modern digital experiences with AI, Python, and React.",
    images: ["/me.webp"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">
        {children}
        <Toast />
      </body>
    </html>
  );
}

