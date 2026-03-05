import { Target, Eye, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "המשימה שלנו",
    text: "להעצים עסקים ואנשי מקצוע עם כלי AI מתקדמים ולהוביל את המעבר לעידן הדיגיטלי החדש",
  },
  {
    icon: Eye,
    title: "החזון שלנו",
    text: "להיות השותף המוביל בישראל לשילוב בינה מלאכותית בעסקים ובתפקידים מקצועיים",
  },
  {
    icon: Award,
    title: "הערכים שלנו",
    text: "מצוינות, חדשנות, שקיפות ומחויבות מלאה להצלחת הלקוחות שלנו",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900" />
      {/* Decorative globe overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 1400 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <circle cx="700" cy="300" r="380" stroke="#94A3B8" strokeWidth="1" fill="none" />
          <circle cx="700" cy="300" r="300" stroke="#94A3B8" strokeWidth="1" fill="none" />
          <ellipse cx="700" cy="300" rx="380" ry="150" stroke="#94A3B8" strokeWidth="1" fill="none" />
          <ellipse cx="700" cy="300" rx="380" ry="250" stroke="#94A3B8" strokeWidth="0.5" fill="none" />
          <line x1="320" y1="300" x2="1080" y2="300" stroke="#94A3B8" strokeWidth="1" />
          <line x1="700" y1="-80" x2="700" y2="680" stroke="#94A3B8" strokeWidth="1" />
          <line x1="420" y1="-50" x2="980" y2="650" stroke="#94A3B8" strokeWidth="0.5" />
          <line x1="980" y1="-50" x2="420" y2="650" stroke="#94A3B8" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            אודות Mentorys.ai - מובילים בתחום הבינה המלאכותית
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            אנחנו מאמינים שבינה מלאכותית היא המפתח להצלחה בעידן המודרני. המשימה שלנו היא
            להפוך טכנולוגיות מתקדמות לנגישות ושימושיות עבור כל ארגון ואדם מקצועי
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-colors"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-[#E8491D]/20 rounded-full p-4">
                    <Icon size={32} className="text-[#E8491D]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                <p className="text-gray-300 leading-relaxed">{v.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
