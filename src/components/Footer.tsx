import Link from "next/link";
import BrainLogo from "./BrainLogo";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-2">
              <BrainLogo size={36} />
              <span className="font-semibold text-gray-800">mentorys.ai</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              מובילים את מהפכת הבינה המלאכותית בישראל
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-gray-800 mb-4">קישורים מהירים</h4>
            <ul className="space-y-2">
              {[
                { label: "שירותים", href: "/#services" },
                { label: "אודות", href: "/#about" },
                { label: "כלי AI", href: "/ai-tools" },
                { label: "צור קשר", href: "/#contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-gray-500 hover:text-[#E8491D] text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h4 className="font-bold text-gray-800 mb-4">עקוב אחרינו</h4>
            <p className="text-gray-500 text-sm mb-3 leading-relaxed">
              הישאר מעודכן בחדשות ובטרנדים האחרונים בעולם ה-AI
            </p>
            <a
              href="https://mentorys.ai"
              className="text-[#E8491D] text-sm font-medium hover:underline"
            >
              קהילת Mentorys.ai
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © Mentorys.ai 2026. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}
