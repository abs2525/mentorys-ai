import { Lightbulb, GraduationCap, TrendingUp, Users } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "ייעוץ AI לעסקים",
    subtitle: "ניתוח תהליכים ושירותים והתאמת הטכנולוגיה הנכונה",
    bullets: [
      "ניתוח תהליכים עסקיים",
      "זיהוי הזדמנויות לשיפור ROI",
      "התאמת טכנולוגיות AI מתאימות",
      "אסטרטגיה דיגיטלית",
    ],
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
  },
  {
    icon: GraduationCap,
    title: "קורסי הכשרה ב-AI",
    subtitle: "קורסים מתקדמים המלמדים כיצד לשלב AI בתפקידים מקצועיים",
    bullets: [
      "AI לכל עובד - מהפכת הפרודוקטיביות",
      "AI לאנשי מערכות מידע",
      "AI מתקדם לאנשי מערכות מידע",
      "אוטומציות עסקיות",
      "Vibe Coding",
      "ניהול מוצר עם AI",
      "בדיקות תוכנה ו-QA עם AI",
      "שיווק דיגיטלי עם AI",
      "ניתוח נתונים BI עם AI",
    ],
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
  },
  {
    icon: TrendingUp,
    title: "פיתוח פתרונות",
    subtitle: "תכנון ופיתוח פתרונות AI מותאמים אישית",
    bullets: [
      "תכנון פתרונות מותאמים",
      "פיתוח לפי צרכי הלקוח",
      "התאמה לרמת המיומנות",
      "אינטגרציה למערכות קיימות",
    ],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    icon: Users,
    title: "ליווי צוותים",
    subtitle: "עבודה עם צוותים מקומיים לקליטת טכנולוגיות חדשות",
    bullets: [
      "הדרכות מעשיות",
      "ליווי בתהליך היישום",
      "העברת ידע לצוותים",
      "תמיכה שוטפת",
    ],
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            השירותים שלנו - פתרונות AI מתקדמים
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            פתרונות מקיפים להטמעת בינה מלאכותית בארגון שלך - קורסי הכשרה, ייעוץ AI, ליווי,
            צוותים ופיתוח פתרונות מותאמים אישית
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Image with icon badge */}
                <div className="relative h-52 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
                  {/* Orange icon badge */}
                  <div className="absolute bottom-4 left-4 bg-[#E8491D] text-white p-3 rounded-xl shadow-lg">
                    <Icon size={22} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">{s.title}</h3>
                  <p className="text-gray-500 text-sm text-center mb-4">{s.subtitle}</p>
                  <ul className="space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-gray-700 text-sm">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#E8491D] shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
