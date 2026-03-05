"use client";
import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const clients = [
  { name: "מכס ישראל", abbr: "מכ״י" },
  { name: "יאל תוכנה", abbr: "YAEL" },
  { name: "אקדמיית ברקת", abbr: "ברקת" },
  { name: "John Bryce", abbr: "JB" },
  { name: "שירות בתי הסוהר", abbr: "ש.ב.ס" },
  { name: "בז\"ן", abbr: "בז\"ן" },
  { name: "משרד הרווחה", abbr: "רווחה" },
  { name: "כלל ביטוח", abbr: "כלל" },
  { name: "בנק מזרחי", abbr: "מזרחי" },
  { name: "אלביט מערכות", abbr: "אלביט" },
  { name: "מגדל ביטוח", abbr: "מגדל" },
  { name: "בנק לאומי", abbr: "לאומי" },
];

const PER_PAGE = 8;

export default function ClientsCarousel() {
  const [page, setPage] = useState(0);
  const pages = Math.ceil(clients.length / PER_PAGE);
  const visible = clients.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section id="clients" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">הלקוחות שלנו</h2>
          <p className="text-gray-500 text-lg">
            אנחנו גאים לעבוד עם ארגונים מובילים במדינת ישראל
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-10">
          {visible.map((c) => (
            <div
              key={c.name}
              className="border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:shadow-sm transition-shadow"
            >
              {/* Logo placeholder */}
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                <span className="text-gray-500 font-bold text-sm text-center leading-tight px-1">
                  {c.abbr}
                </span>
              </div>
              <span className="text-gray-700 text-sm font-medium text-center">{c.name}</span>
            </div>
          ))}
        </div>

        {/* Navigation */}
        {pages > 1 && (
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setPage((p) => Math.min(p + 1, pages - 1))}
              disabled={page === pages - 1}
              className="bg-[#E8491D] hover:bg-[#c93c16] disabled:opacity-40 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight size={20} />
            </button>
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i === page ? "bg-[#E8491D]" : "bg-gray-300"
                }`}
              />
            ))}
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 0))}
              disabled={page === 0}
              className="bg-[#E8491D] hover:bg-[#c93c16] disabled:opacity-40 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
