import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";

const assistant = Assistant({
  subsets: ["latin", "hebrew"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-assistant",
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
    <html lang="he" dir="rtl" className={assistant.variable}>
      <body className="font-[family-name:var(--font-assistant)] antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
