"use client";
import { useState } from "react";
import Link from "next/link";
import { Sparkles, Search, ExternalLink } from "lucide-react";

const featuredTools = [
  { name: "Perplexity", url: "https://perplexity.ai", color: "#20808D" },
  { name: "Grok", url: "https://grok.com", color: "#1A1A1A" },
  { name: "Gemini", url: "https://gemini.google.com", color: "#4285F4" },
  { name: "Claude", url: "https://claude.ai", color: "#D97706" },
  { name: "ChatGPT", url: "https://chatgpt.com", color: "#10A37F" },
];

const tasks = [
  { he: "כתיבה", en: "Writing", primary: "ChatGPT", secondary: "Claude / Gemini" },
  { he: "חשיבה והסקה", en: "Reasoning", primary: "ChatGPT", secondary: "Claude / Gemini / Grok" },
  { he: "יצירת תמונות", en: "Image Generation", primary: "Gemini", secondary: "ChatGPT / Grok" },
  { he: "חיפוש באינטרנט", en: "Web Search", primary: "Perplexity", secondary: "ChatGPT / Gemini / Grok" },
  { he: "חיפוש ברשתות חברתיות", en: "Social Search", primary: "Grok", secondary: "Perplexity" },
  { he: "בניית צ'אטבוטים", en: "Build Chatbots", primary: "ChatGPT", secondary: "Gemini / Copilot" },
  { he: "פרויקטים", en: "Projects", primary: "Claude", secondary: "ChatGPT / Copilot" },
  { he: "Artifacts", en: "Artifacts", primary: "Claude", secondary: "ChatGPT / Gemini" },
  { he: "מצב קולי", en: "Voice Mode", primary: "ChatGPT", secondary: "Gemini" },
  { he: "מצלמה חיה", en: "Live Camera", primary: "ChatGPT", secondary: "Gemini" },
  { he: "זיכרון", en: "Memory", primary: "ChatGPT", secondary: "Claude / Gemini" },
  { he: "ניתוח נתונים", en: "Data Analysis", primary: "ChatGPT", secondary: "Claude / Copilot" },
  { he: "אינטגרציה עם Workspace", en: "Workspace Integration", primary: "Gemini", secondary: "Copilot / ChatGPT" },
  { he: "יצירת וידאו", en: "Video Generation", primary: "Gemini", secondary: "ChatGPT" },
  { he: "ניהול מוצר", en: "Product Management", primary: "Claude", secondary: "ChatGPT" },
  { he: "אוטומציות", en: "Automations", primary: "ChatGPT", secondary: "Gemini / Claude" },
];

export default function AIToolsPreview() {
  const [query, setQuery] = useState("");

  const filtered = tasks.filter(
    (t) =>
      t.he.includes(query) ||
      t.en.toLowerCase().includes(query.toLowerCase()) ||
      t.primary.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-3">
            מדריך כלי AI
            <Sparkles size={32} className="text-[#E8491D]" />
          </h2>
          <p className="text-gray-500 text-lg">המלצות לכלי AI המתאימים ביותר לכל משימה</p>
        </div>

        {/* Featured tools panel */}
        <div className="bg-[#FEF2EE] rounded-2xl p-6 mb-4">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={18} className="text-[#E8491D]" />
            <span className="font-bold text-gray-800">כלי AI מומלצים</span>
            <span className="text-sm text-gray-500 mr-auto">גישה מהירה לכלי ה-AI המובילים</span>
          </div>
          <div className="grid grid-cols-5 gap-3">
            {featuredTools.map((t) => (
              <a
                key={t.name}
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-3 flex flex-col items-center gap-2 border border-gray-100 hover:border-[#E8491D]/40 hover:shadow-sm transition-all group"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: t.color }}
                >
                  {t.name[0]}
                </div>
                <span className="text-xs text-gray-700 font-medium">{t.name}</span>
                <ExternalLink size={12} className="text-gray-400 group-hover:text-[#E8491D]" />
              </a>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-4 shadow-sm">
          <div className="relative">
            <Search size={18} className="absolute top-1/2 -translate-y-1/2 right-4 text-gray-400" />
            <input
              type="text"
              placeholder="חפש משימה או כלי..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full border border-gray-200 rounded-lg py-3 pr-11 pl-4 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#E8491D] text-sm"
            />
          </div>
        </div>

        {/* Task list */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <div>
              <p className="font-bold text-gray-800">המלצות כלים לפי משימה</p>
              <p className="text-sm text-gray-400">{filtered.length} משימות נמצאו</p>
            </div>
            <div className="hidden md:grid grid-cols-2 gap-8 text-xs text-gray-400 w-56 text-center">
              <span>כלי מומלץ ראשון</span>
              <span>כלי מומלץ שני</span>
            </div>
          </div>

          {filtered.map((t, i) => (
            <div
              key={t.he}
              className={`flex items-center justify-between px-6 py-4 ${
                i < filtered.length - 1 ? "border-b border-gray-100" : ""
              } hover:bg-gray-50`}
            >
              <div className="flex-1">
                <span className="font-semibold text-gray-900">{t.he}</span>
                <span className="text-gray-400 text-sm mr-2">({t.en})</span>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="bg-[#E8491D] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {t.primary}
                </span>
                <span className="border border-gray-300 text-gray-600 text-xs px-3 py-1 rounded-full hidden sm:block">
                  {t.secondary}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <Link
            href="/ai-tools"
            className="inline-flex items-center gap-2 bg-[#E8491D] hover:bg-[#c93c16] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            מדריך כלי AI מלא
            <Sparkles size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
