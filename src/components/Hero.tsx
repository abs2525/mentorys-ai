import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowLeft } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-bl from-sky-100 via-blue-50 to-white" />

      {/* Decorative wave lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        viewBox="0 0 1400 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 300 Q350 200 700 350 Q1050 500 1400 300" stroke="#93C5FD" strokeWidth="2" />
        <path d="M0 400 Q350 300 700 450 Q1050 600 1400 400" stroke="#93C5FD" strokeWidth="1.5" />
        <path d="M0 500 Q350 400 700 550 Q1050 700 1400 500" stroke="#BAE6FD" strokeWidth="1.5" />
        <path d="M0 200 Q350 100 700 250 Q1050 400 1400 200" stroke="#BAE6FD" strokeWidth="1" />
        <path d="M700 0 Q800 200 750 450 Q700 700 750 900" stroke="#93C5FD" strokeWidth="1" />
      </svg>

      {/* Decorative robot silhouette on left (RTL — visually right) */}
      <div className="absolute left-0 top-16 bottom-0 w-80 opacity-10 pointer-events-none hidden lg:block">
        <div className="w-full h-full bg-gradient-to-r from-sky-200 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image src="/logo.png" alt="Mentorys.ai" width={280} height={160} priority className="w-64 h-auto" />
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
          הכשרות AI מתקדמות וייעוץ טכנולוגי לעסקים
        </h1>

        {/* Sub-headline */}
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          מעצימים אנשי מקצוע וארגונים עם כלי AI מתקדמים, הכשרות מקצועיות וייעוץ אסטרטגי
          להצלחה בעידן הדיגיטלי
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary */}
          <Link
            href="/#contact"
            className="flex items-center gap-2 bg-[#E8491D] hover:bg-[#c93c16] text-white font-semibold px-7 py-3 rounded-lg transition-colors"
          >
            <ArrowLeft size={18} />
            צור קשר
          </Link>

          {/* Secondary: AI Tools */}
          <Link
            href="/ai-tools"
            className="flex items-center gap-2 border border-gray-300 hover:border-[#E8491D] hover:text-[#E8491D] text-gray-700 font-semibold px-7 py-3 rounded-lg transition-colors bg-white/70 backdrop-blur-sm"
          >
            <Sparkles size={18} />
            מדריך כלי AI
          </Link>

          {/* Tertiary */}
          <Link
            href="/#services"
            className="border border-gray-300 hover:border-[#E8491D] hover:text-[#E8491D] text-gray-700 font-semibold px-7 py-3 rounded-lg transition-colors bg-white/70 backdrop-blur-sm"
          >
            גלה את השירותים שלנו
          </Link>
        </div>
      </div>
    </section>
  );
}
