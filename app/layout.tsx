import type { Metadata } from "next";
import "./globals.css";
import Toast from "./portfolio/NotificationToast";

export const metadata: Metadata = {
  title: "Aaditya Bagde — Machine Learning & Frontend Developer",
  description: "Portfolio of Aaditya Bagde. Building intelligent systems and modern digital experiences with AI, Python, and React.",
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

