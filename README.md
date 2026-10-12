# TechWithGyadeen — Production Technology Education Platform

> **Learn. Build. Grow.**  
> Practical, enterprise-grade technology education platform built for developers, Salesforce professionals, and AI builders.

---

## 🚀 Overview

**TechWithGyadeen** is a full-featured, scalable education platform engineered with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, Prisma ORM, and PostgreSQL. It delivers high-density technical masterclasses, autonomous AI agent architectures (Agentforce), real-world scenario interview preparation, downloadable engineering assets, and curated developer updates.

---

## 🛠️ Technology Stack

| Layer | Technologies & Tools |
| :--- | :--- |
| **Frontend** | Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Lucide Icons, Custom SVG icons |
| **Styling & Motion** | Custom CSS design tokens, Glassmorphism, CSS float animations, Responsive Grid System |
| **Backend & APIs** | Next.js Server Components, API Route Handlers, Zod Payload Validation, REST Architecture |
| **Database & ORM** | PostgreSQL (Google Cloud SQL / Supabase / Neon compatible), Prisma ORM |
| **Authentication** | Extensible Role-Based Access Control (`ADMIN`, `INSTRUCTOR`, `USER`), Google OAuth & Credentials |
| **Storage Abstraction** | Pluggable `StorageService` interface (Local File System, Google Cloud Storage, Microsoft Graph) |
| **Payment Layer** | Decoupled `PaymentService` architecture compatible with Razorpay orders & HMAC-SHA256 webhooks |
| **Email Layer** | Pluggable `EmailService` interface for transactional notifications & subscriber onboarding |

---

## 📁 Project Architecture & Folder Structure

```
techwithgyadeen/
├── prisma/
│   └── schema.prisma         # 27+ relational models (User, Course, Lesson, Order, Update, etc.)
├── public/                   # Static media, icons, and SVG assets
├── src/
│   ├── app/                  # Next.js 16 App Router
│   │   ├── (public pages)
│   │   │   ├── page.tsx      # Homepage (12 cohesive sections)
│   │   │   ├── courses/      # Course Catalog & /courses/[slug] detail
│   │   │   ├── learn/        # /learn/[courseSlug] 3-column LMS interface
│   │   │   ├── technology/   # Tech radar & /technology/updates newsfeed
│   │   │   ├── blog/         # Engineering blog & /blog/[slug] article view
│   │   │   ├── resources/    # Free & Pro downloadable assets
│   │   │   ├── interview/    # Scenario-based interview Q&A accordion
│   │   │   ├── projects/     # Enterprise portfolio blueprints
│   │   │   ├── about/        # Gyadeen profile & LinkedIn integration
│   │   │   ├── contact/      # Validated inquiry form
│   │   │   └── login/        # Role-based authentication modal
│   │   ├── admin/            # Admin control center (revenue, CMS, orders)
│   │   ├── dashboard/        # Student SaaS dashboard with streak & certs
│   │   ├── api/              # RESTful API route handlers
│   │   │   ├── contact/
│   │   │   └── newsletter/
│   │   ├── globals.css       # Design tokens, dark/light themes, animations
│   │   └── layout.tsx        # Root layout with ThemeProvider, Navbar, Footer
│   ├── components/
│   │   ├── ui/               # Social icons, badges, buttons
│   │   ├── layout/           # Sticky Navbar, Footer, Mobile Drawer
│   │   ├── home/             # Hero, Featured Courses, Learning Paths, Why Us...
│   │   ├── courses/          # CourseCard, filters, module lists
│   │   ├── blog/             # CopyCodeButton, ShareActions
│   │   ├── learn/            # LearnClient interactive LMS player
│   │   ├── technology/       # UpdateCard, Tech radar cards
│   │   └── search-modal.tsx  # Global Ctrl+K Spotlight search
│   ├── lib/
│   │   ├── data.ts           # Production mock dataset (courses, blogs, updates)
│   │   ├── storage.ts        # Storage provider abstraction (Local, GCS, OneDrive)
│   │   ├── payment.ts        # Payment provider abstraction (Razorpay)
│   │   ├── email.ts          # Email provider abstraction
│   │   └── utils.ts          # Formatters & Tailwind merge utilities
│   └── types/                # Strict TypeScript domain interfaces
├── .env.example              # Environment variables template
├── next.config.ts            # Next.js 16 configuration with Turbopack & remotePatterns
└── package.json              # Dependencies and run scripts
```

---

## ⚙️ Environment Configuration

Copy the example environment file and customize your settings:

```bash
cp .env.example .env.local
```

Key environment variables:

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/techwithgyadeen?schema=public"
NEXTAUTH_SECRET="your-32-character-secret"
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
RAZORPAY_KEY_ID="rzp_test_placeholder"
RAZORPAY_KEY_SECRET="rzp_test_placeholder_secret"
STORAGE_PROVIDER="LOCAL" # or "GCS"
EMAIL_PROVIDER="CONSOLE" # or "RESEND"
```

---

## 📦 Installation & Setup

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Generate Prisma Client:**
   ```bash
   npx prisma generate
   ```

3. **Run Database Migrations (when PostgreSQL is active):**
   ```bash
   npx prisma migrate dev --name init
   ```

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for Production:**
   ```bash
   npm run build
   npm run start
   ```

---

## 👑 Key Features & Modules

- **Interactive Hero Experience:** Dynamic headline, floating tech pills (Salesforce, Agentforce, Data Cloud), live terminal editor with syntax highlighting, and live stats.
- **Global Search (`Ctrl + K`):** Instant client-side indexing across Courses, Articles, Cheat Sheets, and Interview Questions.
- **Dark / Light Theme Engine:** Smooth theme switching with system auto-detection and persistence in `localStorage`.
- **LMS Course Player (`/learn/[slug]`):** 3-column layout featuring collapsible curriculum drawer, video playback container, mark-as-completed progress tracking, personal note-taking, and resource downloads.
- **Technical News Radar (`/technology/updates`):** Curated feed for Salesforce releases, Agentforce innovations, and Google Cloud BigQuery zero-copy integration.
- **Interview Prep Hub (`/interview`):** Expandable scenario-based Q&A with real Apex code snippets and follow-up discussion points.
- **Admin Control Center (`/admin`):** Financial overview metrics, course publishing controls, subscriber analytics, and recent orders.

---

## 🌐 Brand Identity

- **Name:** TechWithGyadeen
- **Tagline:** Learn. Build. Grow.
- **Founder:** Gyadeen (Salesforce Developer | AI & Automation Enthusiast | Technology Educator)
- **LinkedIn:** [linkedin.com/in/gyadeen](https://linkedin.com/in/gyadeen)
