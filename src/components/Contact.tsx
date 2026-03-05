"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
      {/* Decorative lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
        viewBox="0 0 1400 700"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={i}
            x1={100 + i * 110}
            y1="0"
            x2={50 + i * 110}
            y2="700"
            stroke="#9CA3AF"
            strokeWidth="0.8"
          />
        ))}
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">צור קשר</h2>
          <p className="text-gray-500 text-lg">נשמח לשמוע ממך ולעזור לך להתקדם</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="space-y-4">
            {[
              { icon: Mail, title: "אימייל", value: "info@mentorys.ai", href: "mailto:info@mentorys.ai" },
              { icon: Phone, title: "טלפון", value: "+972-54-662-5978", href: "tel:+972546625978" },
              { icon: MapPin, title: "כתובת", value: "תל אביב, ישראל", href: null },
            ].map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="bg-white rounded-xl p-5 flex items-center justify-between border border-gray-100 hover:shadow-sm transition-shadow">
                  <div className="text-right">
                    <p className="font-bold text-gray-900 mb-0.5">{item.title}</p>
                    <p className="text-gray-600 text-sm">{item.value}</p>
                  </div>
                  <div className="bg-[#FEF2EE] text-[#E8491D] p-3 rounded-xl">
                    <Icon size={22} />
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.title} href={item.href}>
                  {content}
                </a>
              ) : (
                <div key={item.title}>{content}</div>
              );
            })}

            {/* Hours */}
            <div className="bg-[#FEF2EE] rounded-xl p-5 border border-[#E8491D]/20">
              <div className="flex items-center justify-between">
                <div className="text-right">
                  <p className="font-bold text-gray-900 mb-1">שעות פעילות</p>
                  <p className="text-gray-600 text-sm">ימים א׳-ה׳: 09:00 - 18:00</p>
                  <p className="text-gray-600 text-sm">יום ו׳: 09:00 - 13:00</p>
                </div>
                <div className="bg-[#E8491D]/10 text-[#E8491D] p-3 rounded-xl">
                  <Clock size={22} />
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-12">
                <div className="bg-green-100 text-green-600 rounded-full p-4">
                  <Send size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">ההודעה נשלחה!</h3>
                <p className="text-gray-500">נחזור אליך בהקדם</p>
              </div>
            ) : (
              <>
                <div className="mb-6 text-right">
                  <h3 className="text-lg font-bold text-gray-900">שלח לנו הודעה</h3>
                  <p className="text-gray-500 text-sm">מלא את הפרטים ונחזור אליך בהקדם</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 text-right">
                      שם מלא
                    </label>
                    <input
                      type="text"
                      placeholder="הכנס את שמך המלא"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg py-3 px-4 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#E8491D] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 text-right">
                      אימייל
                    </label>
                    <input
                      type="email"
                      placeholder="example@email.com"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg py-3 px-4 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#E8491D] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 text-right">
                      טלפון
                    </label>
                    <input
                      type="tel"
                      placeholder="050-1234567"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg py-3 px-4 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#E8491D] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 text-right">
                      הודעה
                    </label>
                    <textarea
                      placeholder="ספר לנו איך נוכל לעזור לך"
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg py-3 px-4 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#E8491D] text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#E8491D] hover:bg-[#c93c16] text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <Send size={18} />
                    שלח הודעה
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
