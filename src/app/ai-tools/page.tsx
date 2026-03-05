"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Search, ChevronDown, ChevronUp, Sparkles, ExternalLink } from "lucide-react";

type Tool = {
  name: string;
  description: string;
  url: string;
  free: boolean;
  rating: number;
};

type Category = {
  id: string;
  title: string;
  titleEn: string;
  tools: Tool[];
};

const categories: Category[] = [
  {
    id: "llm",
    title: "מודלי שפה",
    titleEn: "Language Models",
    tools: [
      { name: "ChatGPT", description: "מודל שפה מבית OpenAI, מוביל לכתיבה, קוד, ניתוח ועוד", url: "https://chatgpt.com", free: true, rating: 5 },
      { name: "Claude", description: "מודל מבית Anthropic, מצוין לעבודה עם מסמכים ופרויקטים", url: "https://claude.ai", free: true, rating: 5 },
      { name: "Gemini", description: "מודל מבית Google, אינטגרציה מושלמת עם Workspace", url: "https://gemini.google.com", free: true, rating: 5 },
      { name: "Grok", description: "מודל מבית xAI, מחובר לרשת X וחיפוש בזמן אמת", url: "https://grok.com", free: true, rating: 4 },
      { name: "Perplexity", description: "מנוע חיפוש AI עם מקורות, מצוין לחקר ומידע עדכני", url: "https://perplexity.ai", free: true, rating: 4 },
      { name: "Microsoft Copilot", description: "AI מבית Microsoft, אינטגרציה עם Office 365", url: "https://copilot.microsoft.com", free: true, rating: 4 },
      { name: "Meta Llama", description: "מודל קוד פתוח של Meta, פריסה עצמאית", url: "https://llama.meta.com", free: true, rating: 3 },
    ],
  },
  {
    id: "audio",
    title: "מחוללי אודיו",
    titleEn: "Audio Generators",
    tools: [
      { name: "ElevenLabs", description: "המוביל בהמרת טקסט לדיבור, קולות טבעיים ברמה גבוהה", url: "https://elevenlabs.io", free: false, rating: 5 },
      { name: "Suno", description: "יצירת מוזיקה שלמה עם קול ומילים בכמה שניות", url: "https://suno.com", free: true, rating: 5 },
      { name: "Udio", description: "יצירת מוזיקה מקצועית עם AI, איכות גבוהה", url: "https://udio.com", free: true, rating: 4 },
      { name: "Mubert", description: "מוזיקת רקע AI לתוכן, סרטונים ופודקאסטים", url: "https://mubert.com", free: true, rating: 3 },
      { name: "Soundraw", description: "יצירת מוסיקה מותאמת אישית לפי מצב רוח וסגנון", url: "https://soundraw.io", free: false, rating: 3 },
    ],
  },
  {
    id: "image",
    title: "מחוללי תמונות",
    titleEn: "Image Generators",
    tools: [
      { name: "Midjourney", description: "יצירת תמונות אמנותיות ברמה גבוהה, המוביל בתעשייה", url: "https://midjourney.com", free: false, rating: 5 },
      { name: "DALL-E 3", description: "מחולל תמונות של OpenAI, זמין דרך ChatGPT", url: "https://openai.com/dall-e-3", free: false, rating: 5 },
      { name: "Gemini Image", description: "יצירת תמונות בתוך Gemini, חינמי עם חשבון Google", url: "https://gemini.google.com", free: true, rating: 4 },
      { name: "Adobe Firefly", description: "מחולל תמונות מבית Adobe, בטוח לשימוש מסחרי", url: "https://firefly.adobe.com", free: true, rating: 4 },
      { name: "Ideogram", description: "מצוין ליצירת טקסט בתוך תמונות, לוגואים ועיצוב גרפי", url: "https://ideogram.ai", free: true, rating: 4 },
      { name: "Canva AI", description: "עיצוב גרפי עם AI, כולל תמונות ועריכה", url: "https://canva.com", free: true, rating: 4 },
      { name: "Leonardo AI", description: "יצירת תמונות ואסטים לגיימינג ועיצוב", url: "https://leonardo.ai", free: true, rating: 3 },
    ],
  },
  {
    id: "video",
    title: "מחוללי וידאו",
    titleEn: "Video Generators",
    tools: [
      { name: "Sora", description: "מחולל הווידאו של OpenAI, יוצר סרטונים ריאליסטיים מטקסט", url: "https://sora.com", free: false, rating: 5 },
      { name: "Runway Gen-3", description: "כלי וידאו AI מקצועי, עריכה ויצירה מתקדמת", url: "https://runwayml.com", free: false, rating: 5 },
      { name: "Kling AI", description: "מחולל וידאו סיני ברמה גבוהה, תוצאות מרהיבות", url: "https://klingai.com", free: true, rating: 4 },
      { name: "Pika Labs", description: "יצירת קליפים קצרים ואנימציות עם AI", url: "https://pika.art", free: true, rating: 4 },
      { name: "Hailuo AI", description: "וידאו AI איכותי עם דמויות ריאליסטיות", url: "https://hailuoai.video", free: true, rating: 4 },
      { name: "Luma Dream Machine", description: "יצירת וידאו ריאליסטי 4K עם תנועה טבעית", url: "https://lumalabs.ai", free: true, rating: 4 },
      { name: "Synthesia", description: "יצירת סרטוני אבטאר AI לאימון ותקשורת עסקית", url: "https://synthesia.io", free: false, rating: 4 },
    ],
  },
];

const sortOptions = [
  { value: "rating", label: "המומלץ ביותר (לפי דירוג)" },
  { value: "name", label: "לפי שם (א-ז)" },
  { value: "free", label: "חינמיים קודם" },
];

export default function AIToolsPage() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("rating");
  const [openCats, setOpenCats] = useState<string[]>(categories.map((c) => c.id));

  const toggleCat = (id: string) =>
    setOpenCats((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const filterAndSort = (tools: Tool[]) => {
    let filtered = tools;
    if (query) {
      filtered = tools.filter(
        (t) =>
          t.name.toLowerCase().includes(query.toLowerCase()) ||
          t.description.includes(query)
      );
    }
    if (sort === "name") filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    else if (sort === "free") filtered = [...filtered].sort((a, b) => (a.free === b.free ? 0 : a.free ? -1 : 1));
    else filtered = [...filtered].sort((a, b) => b.rating - a.rating);
    return filtered;
  };

  const totalTools = categories.reduce((acc, c) => acc + c.tools.length, 0);

  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="bg-white border-b border-gray-100 py-14 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            מדריך כלי AI מקיף
          </h1>
          <p className="text-gray-500 text-lg">
            רשימה מלאה של כלי AI המומלצים עם כל הפרטים
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-10 space-y-4">
          {/* Search + Sort + Filter controls */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm space-y-4">
            {/* Search */}
            <div className="relative">
              <Search size={18} className="absolute top-1/2 -translate-y-1/2 right-4 text-gray-400" />
              <input
                type="text"
                placeholder="חפש כלי, קטגוריה או תיאור..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full border border-gray-200 rounded-lg py-3 pr-11 pl-4 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#E8491D] text-sm"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="flex-1 border border-gray-200 rounded-lg py-2.5 px-4 text-gray-700 text-sm focus:outline-none focus:border-[#E8491D]"
              >
                {sortOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              <button
                onClick={() => setOpenCats(categories.map((c) => c.id))}
                className="border border-gray-200 rounded-lg py-2.5 px-5 text-gray-700 text-sm hover:border-[#E8491D] hover:text-[#E8491D] transition-colors"
              >
                הצג הכל
              </button>
            </div>
          </div>

          {/* Total count */}
          <p className="text-gray-400 text-sm text-right">
            {totalTools} כלים ב-{categories.length} קטגוריות
          </p>

          {/* Categories */}
          {categories.map((cat) => {
            const tools = filterAndSort(cat.tools);
            const isOpen = openCats.includes(cat.id);
            if (query && tools.length === 0) return null;
            return (
              <div
                key={cat.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
              >
                {/* Category header */}
                <button
                  onClick={() => toggleCat(cat.id)}
                  className="w-full flex items-center justify-between px-6 py-5 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {isOpen ? (
                      <ChevronUp size={20} className="text-gray-400" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-400" />
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-gray-900 text-lg">{cat.title}</span>
                    <span className="bg-gray-900 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      {tools.length} כלים
                    </span>
                  </div>
                </button>

                {/* Tools list */}
                {isOpen && (
                  <div className="border-t border-gray-100">
                    {tools.map((tool, i) => (
                      <div
                        key={tool.name}
                        className={`flex items-center gap-4 px-6 py-4 ${
                          i < tools.length - 1 ? "border-b border-gray-50" : ""
                        } hover:bg-gray-50 transition-colors`}
                      >
                        {/* Tool icon */}
                        <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                          <span className="text-gray-600 font-bold text-xs">{tool.name.slice(0, 2)}</span>
                        </div>

                        {/* Info */}
                        <div className="flex-1 text-right">
                          <div className="flex items-center justify-end gap-2 mb-0.5">
                            <span className="font-bold text-gray-900">{tool.name}</span>
                            {tool.free && (
                              <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-medium">
                                חינמי
                              </span>
                            )}
                          </div>
                          <p className="text-gray-500 text-sm leading-relaxed">{tool.description}</p>
                          {/* Stars */}
                          <div className="flex items-center justify-end gap-0.5 mt-1">
                            {Array.from({ length: 5 }).map((_, s) => (
                              <span
                                key={s}
                                className={`text-xs ${s < tool.rating ? "text-[#E8491D]" : "text-gray-200"}`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Link */}
                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 bg-[#E8491D] hover:bg-[#c93c16] text-white p-2.5 rounded-lg transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Back to home */}
          <div className="text-center pt-4 pb-8">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-[#E8491D] hover:underline font-medium"
            >
              <Sparkles size={16} />
              חזרה לדף הבית
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
