# NexaAI — Intelligent Chat Assistant

A premium, production-ready Q&A chatbot web application where users can ask questions across different topic categories and receive AI-powered answers. Built with Next.js 14, Supabase, and Groq. Customizable branding for Rahul Kumar.

![NexaAI](https://img.shields.io/badge/NexaAI-4f46e5?style=for-the-badge&logo=openai&logoColor=white)

## ✨ Features

- **Category-Based Chat** — Choose from Health, Sports, Technology, Creative, Analytics, and General topics
- **AI-Powered Answers** — Streaming responses using Groq's LLaMA 3.3 70B model
- **Authentication** — Secure email/password auth via Supabase
- **Chat Persistence** — Conversations and messages saved to Supabase PostgreSQL
- **Premium Design** — Glassmorphic UI with the Rahul Kumar design system
- **Three-Column Layout** — Sidebar, chat area, and insights panel
- **Responsive** — Right panel hides on smaller screens
- **Vercel-Ready** — Deploy with zero configuration

## 📋 Prerequisites

- **Node.js 18+** — [Download](https://nodejs.org/)
- **Supabase Account** — [Create free account](https://supabase.com/)
- **Groq Account** — [Get API key](https://console.groq.com/)
- **Vercel Account** (for deployment) — [Sign up](https://vercel.com/)

## 🚀 Step-by-Step Local Setup

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd rahul-kumar-ai
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env.local`

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
GROQ_API_KEY=your_groq_api_key
```

### 4. Set Up Supabase

#### Create a Supabase Project
1. Go to [supabase.com](https://supabase.com/) and create a new project
2. Go to **Settings → API** to get your Project URL and anon key
3. Copy them into `.env.local`

#### Run the Database Schema

Go to **SQL Editor** in your Supabase dashboard and run:

```sql
-- Categories
create table categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  icon text not null,
  system_prompt text not null,
  created_at timestamptz default now()
);

-- Conversations
create table conversations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  category_id uuid references categories(id),
  created_at timestamptz default now()
);

-- Messages
create table messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid references conversations(id) on delete cascade,
  role text check (role in ('user', 'assistant')) not null,
  content text not null,
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table conversations enable row level security;
alter table messages enable row level security;

create policy "Users can only access their own conversations"
  on conversations for all using (auth.uid() = user_id);

create policy "Users can only access messages in their conversations"
  on messages for all using (
    conversation_id in (
      select id from conversations where user_id = auth.uid()
    )
  );
```

#### Seed Categories

Run this in the SQL Editor to add the default categories:

```sql
insert into categories (name, icon, system_prompt) values
  ('General', 'chat', 'You are NexaAI, a helpful and knowledgeable general-purpose assistant. Provide clear, accurate, and well-structured answers to any question. Be conversational yet informative.'),
  ('Health', 'monitor_heart', 'You are NexaAI, a health and wellness expert assistant. Provide evidence-based health information, wellness tips, and lifestyle advice. Always remind users to consult healthcare professionals for medical decisions. Be empathetic and thorough.'),
  ('Sports', 'sports_soccer', 'You are NexaAI, a sports expert assistant. Provide detailed knowledge about various sports, athletes, statistics, training techniques, and sports history. Be enthusiastic and engaging in your responses.'),
  ('Technology', 'memory', 'You are NexaAI, a technology expert assistant. Provide in-depth knowledge about software, hardware, programming, AI, cybersecurity, and emerging tech trends. Use technical terms when appropriate but explain them clearly.'),
  ('Creative', 'palette', 'You are NexaAI, a creative writing and arts assistant. Help with brainstorming, storytelling, poetry, design concepts, and creative problem-solving. Be imaginative, inspiring, and encourage creative exploration.'),
  ('Analytics', 'query_stats', 'You are NexaAI, a data analytics and business intelligence assistant. Help with data analysis concepts, statistical methods, visualization strategies, and business metrics interpretation. Be precise and data-driven.');
```

### 5. Enable Supabase Auth

1. Go to **Authentication → Settings** in your Supabase dashboard
2. Ensure **Email/Password** sign-in is enabled (it's on by default)
3. Optionally disable email confirmation for easier local testing

### 6. Get Your Groq API Key

1. Go to [console.groq.com](https://console.groq.com/)
2. Create an account or sign in
3. Go to **API Keys** and create a new key
4. Copy it into `.env.local` as `GROQ_API_KEY`

### 7. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Folder Structure

```
nexaai/
├── app/
│   ├── (auth)/
│   │   ├── layout.tsx          ← Centered auth layout
│   │   ├── login/page.tsx      ← Login page
│   │   └── signup/page.tsx     ← Signup page
│   ├── api/
│   │   └── chat/route.ts       ← Groq streaming API route
│   ├── chat/
│   │   └── page.tsx            ← Main chat interface
│   ├── globals.css             ← Nexa AI design system tokens
│   ├── layout.tsx              ← Root layout (fonts, head)
│   └── page.tsx                ← Root redirect
├── components/
│   ├── ChatArea.tsx            ← Chat messages + input area
│   ├── InputBar.tsx            ← Glassmorphic pill input bar
│   ├── MessageBubble.tsx       ← User/assistant message bubbles
│   ├── RightPanel.tsx          ← Insights & suggestions panel
│   ├── Sidebar.tsx             ← Category navigation sidebar
│   └── TypingIndicator.tsx     ← 3-dot bounce animation
├── lib/
│   ├── categories.ts           ← Default category definitions
│   └── supabase/
│       ├── client.ts           ← Browser Supabase client
│       ├── middleware.ts       ← Session refresh helper
│       └── server.ts           ← Server Supabase client
├── types/
│   └── index.ts                ← TypeScript interfaces
├── middleware.ts               ← Auth route protection
├── .env.local                  ← Environment variables
└── package.json
```

## 🚢 Deploy to Vercel

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com/) and import the repository
3. Add environment variables in **Settings → Environment Variables**:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `GROQ_API_KEY`
4. Click **Deploy** — Vercel handles the rest automatically

> **Note:** The `/api/chat` route uses streaming via `streamText` and `toDataStreamResponse()` from the Vercel AI SDK, which works natively on Vercel's serverless functions.

## ➕ How to Add New Categories

1. **Add to `lib/categories.ts`:**
   ```typescript
   {
     name: "Finance",
     icon: "account_balance",
     system_prompt: "You are NexaAI, a finance expert..."
   }
   ```

2. **Insert into Supabase:**
   ```sql
   insert into categories (name, icon, system_prompt)
   values ('Finance', 'account_balance', 'You are NexaAI, a finance expert...');
   ```

3. Icons are from [Material Symbols Outlined](https://fonts.google.com/icons?icon.set=Material+Symbols&icon.style=Outlined)

## 🎨 Design System

The app uses the **Nexa AI Design System** with:
- **Colors:** Material Design 3 inspired indigo palette
- **Typography:** Manrope (headlines) + Inter (body)
- **Glassmorphism:** Frosted glass input bar and header
- **Soft Corners:** Minimum `lg` radius everywhere
- **No hard borders:** Background color shifts for sectioning

## 📝 License

MIT
