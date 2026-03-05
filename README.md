# Mentorys.ai — Website Rebuild

## Project Background

This repository contains the **full rebuild of the Mentorys.ai website**, initiated to migrate away from the original hosting provider and launch on a new, self-managed infrastructure.

The original website at [mentorys.ai](https://mentorys.ai) is a live production site offering AI training, consulting, and enterprise solutions in the Israeli market. The goal of this project is to recreate the site from scratch with a modern, maintainable tech stack — with full ownership over the code and the ability to deploy to any hosting provider.

### Why a Rebuild?

- **Provider independence** — move away from a third-party website builder/CMS and own the codebase entirely
- **Performance** — Next.js static/SSR output delivers significantly faster load times
- **Customization** — full control over design, content, and functionality without platform limitations
- **Future-ready** — clean architecture makes it easy to add new features (blog, booking, dashboards, etc.)
- **SEO** — server-rendered HTML improves search engine visibility

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.1.6 | React framework with App Router + SSR |
| [React](https://react.dev) | 19 | UI rendering |
| [TypeScript](https://www.typescriptlang.org) | 5.x | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | 4.x | Utility-first styling (CSS-first config) |
| [lucide-react](https://lucide.dev) | latest | Icon library |

---

## Design Tokens

| Token | Value | Usage |
|---|---|---|
| Primary color | `#E8491D` | Buttons, accents, hover states |
| Primary dark | `#c93c16` | Hover variant |
| Font (Hebrew) | Noto Sans Hebrew | All Hebrew text |
| Font (English/Latin) | Urbanist | All Latin characters |
| Direction | RTL (`dir="rtl"`, `lang="he"`) | Full right-to-left layout |

---

## Project Structure

```
mentorys-ai/
├── public/
│   └── logo.png                  # Brand logo
├── src/
│   ├── app/
│   │   ├── globals.css           # Tailwind v4 theme + global styles
│   │   ├── layout.tsx            # Root layout (RTL, Hebrew, fonts)
│   │   ├── page.tsx              # Homepage
│   │   └── ai-tools/
│   │       └── page.tsx          # AI Tools directory page
│   └── components/
│       ├── Navbar.tsx            # Fixed top navigation bar
│       ├── Hero.tsx              # Hero / above-the-fold section
│       ├── Services.tsx          # Service offering cards
│       ├── About.tsx             # Mission, vision, values
│       ├── AIToolsPreview.tsx    # AI tools recommendation table
│       ├── ClientsCarousel.tsx   # Client logos carousel
│       ├── Contact.tsx           # Contact form + info
│       ├── Footer.tsx            # Site footer
│       └── WhatsAppButton.tsx    # Floating WhatsApp CTA
├── package.json
└── README.md
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, services, about, AI tools preview, clients, contact |
| `/ai-tools` | Full AI tools directory with 26 tools across 4 categories |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
npm start
```

---

## Deployment

This project is a standard Next.js application and can be deployed to any provider that supports Node.js or static exports:

- **Vercel** (recommended for Next.js) — connect the GitHub repo and deploy in one click
- **Netlify** — supported via Next.js adapter
- **Self-hosted** — run `npm run build && npm start` on any VPS/server
- **Docker** — containerize with a standard Node.js Dockerfile

---

## Releases

| Version | Description |
|---|---|
| `v1.0.0` | Initial website baseline — full site rebuilt from original mentorys.ai, RTL Hebrew layout, brand logo, Noto Sans Hebrew + Urbanist fonts |
| `v1.1.0` | Contact form integration, favicon fix, footer logo, navbar improvements |

---

## Changelog

### v1.1.0
- **Contact form → Google Sheets integration** — form submissions are saved directly to a connected Google Sheet via Google Apps Script Web App. Fields: Name, Phone, Email, Date, Preferred Contact Method, Comments/Notes
- **Preferred Contact Method field** — new dropdown added to contact form (Email / Phone / WhatsApp), stored as the last column to maintain backward compatibility with the existing site during migration
- **Leading zero fix for phone numbers** — Apps Script uses `setNumberFormat("@")` + `SpreadsheetApp.flush()` to ensure Israeli phone numbers (e.g. 0541234567) are stored as text without losing the leading zero
- **Favicon** — replaced default Next.js triangle icon with Mentorys.ai brand logo (`src/app/icon.png`)
- **Footer logo** — replaced SVG brain logo with `logo.png` brand image
- **Navbar RTL fix** — corrected element order so nav links appear on the right and logo on the left (as expected in RTL Hebrew layout)
- **Navbar font** — increased weight to `font-bold` and size from `text-sm` to `text-base`
- **Navbar & logo size** — navbar height increased to `h-20`, logo height to `h-14`

---

## Contact

**Mentorys.ai**
- Website: [mentorys.ai](https://mentorys.ai)
- Email: info@mentorys.ai
- Phone: +972-54-662-5978
- WhatsApp: [wa.me/972546625978](https://wa.me/972546625978)
