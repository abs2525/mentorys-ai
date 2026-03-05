import type { Metadata } from "next";
import { Noto_Sans_Hebrew, Urbanist } from "next/font/google";
import "./globals.css";

const notoSansHebrew = Noto_Sans_Hebrew({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-hebrew",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-english",
});

export const metadata: Metadata = {
  title: "Mentorys.ai - הכשרות AI מתקדמות וייעוץ טכנולוגי לעסקים",
  description:
    "מעצימים אנשי מקצוע וארגונים עם כלי AI מתקדמים, הכשרות מקצועיות וייעוץ אסטרטגי להצלחה בעידן הדיגיטלי",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${notoSansHebrew.variable} ${urbanist.variable}`}>
      <body className="font-[family-name:var(--font-hebrew)] antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
