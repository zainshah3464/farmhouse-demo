# 🏡 Family Farmhouse – Luxury Farm Stay Booking Website

A premium, fully responsive farmhouse listing website with a modern dark theme, smooth animations, an admin dashboard, and direct WhatsApp booking. Built for **25 luxury farmhouses**.

**Live Demo:** [Click here](https://farmhouse-demo.vercel.app)  
**Admin Panel:** `/admin` (Password: `demo123`)

---

## 📸 Preview

![Hero](https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200)  
*Luxury hero section with search bar*

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | Next.js 16 (App Router), Tailwind CSS, Lucide React Icons |
| **Backend / DB** | Supabase (PostgreSQL, Auth, Storage) |
| **Hosting** | Vercel (Free tier) |
| **Analytics** | Google Analytics 4 |
| **Booking** | WhatsApp Click-to-Chat (no payment gateway needed) |

---

## ✨ Features

### Public Website
- 🖼️ Hero section with background image & animated heading
- 🔍 Search bar (date & guest selector)
- 🏘️ Featured farmhouses grid with hover animations
- 🖼️ Hotel‑style gallery with thumbnail slider & full‑screen modal
- 📍 Google Maps embed for each farmhouse
- ⭐ Guest reviews with star ratings
- 💬 Floating WhatsApp button for instant enquiry
- 📱 Fully responsive (mobile, tablet, desktop)
- 🌙 Dark theme with subtle continuous animations

### Admin Dashboard (`/admin`)
- 🔐 Simple password login (demo: `demo123`)
- ➕ Add new farmhouse (name, slug, location, description, capacity, amenities, price, images, featured)
- ✏️ Edit & 🗑️ Delete existing farmhouses
- 🖼️ Image URL management (comma‑separated)
- 🏷️ Amenities tag input with add/remove
- 📱 Responsive table and modal form

### WhatsApp Booking
- Every farmhouse card and detail page has a **“Chat Now”** button that opens WhatsApp with a pre‑filled message.
- Floating WhatsApp button for general inquiry.
- All links use the client’s actual phone number.

---

## 📁 Project Structure
```
farmhouse-demo/
├── public/
├── src/
│ ├── app/
│ │ ├── globals.css # Tailwind, custom animations, dark theme
│ │ ├── layout.tsx # Root layout (Navbar, Footer, FloatingWA)
│ │ ├── page.tsx # Homepage (Hero + Featured + Showcase)
│ │ ├── farmhouses/
│ │ │ ├── page.tsx # All farmhouses listing
│ │ │ └── [slug]/
│ │ │ └── page.tsx # Single farmhouse detail page
│ │ └── admin/
│ │ └── page.tsx # Admin dashboard (CRUD)
│ ├── components/
│ │ ├── Navbar.tsx # Glass‑effect navbar with mobile menu
│ │ ├── Hero.tsx # Full‑screen hero with search
│ │ ├── SearchBar.tsx # Dummy search bar
│ │ ├── FeaturedFarmhouses.tsx
│ │ ├── FarmhouseCard.tsx # Reusable card component
│ │ ├── HotelGallery.tsx # Gallery with thumbnails & modal
│ │ ├── ShowcaseSection.tsx # Featured farmhouse showcase (homepage)
│ │ ├── Footer.tsx # Premium footer with newsletter
│ │ ├── FloatingWhatsApp.tsx
│ │ └── ScrollReveal.tsx # Intersection observer animation wrapper
│ ├── data/
│ │ └── farmhouses.ts # Dummy data (8 farmhouses)
│ └── lib/ # (Supabase client setup – if using)
├── next.config.js
├── tailwind.config.js
├── package.json
└── README.md
```
---

## 🔧 Setup & Installation

1. **Clone the repository**
```bash
git clone https://github.com/zainshah3464/farmhouse-demo.git
cd farmhouse-demo
Install dependencies
```
### npm install
**Run development server**
```
npm run dev
Open http://localhost:3000
```
**Build for production**
```bash
npm run build
npm start
```
**🗄️ Supabase Setup** *(Optional – currently using dummy data)*
If you want dynamic data with a real backend, follow these steps:

### 1. Create a Supabase project
Go to supabase.com, sign up, create a new project.

*Note : `your API URL and anon key.`*

### 2. Environment Variables
Create a .env.local file in the root:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```
### 3. Install Supabase client
```bash
npm install @supabase/supabase-js
```
### 4. Database Schema
**Create a farmhouses** *table in the Supabase SQL editor:*

**sql**
```
CREATE TABLE farmhouses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  description TEXT,
  capacity INT,
  amenities TEXT[],
  price_display TEXT,
  images TEXT[],
  featured BOOLEAN DEFAULT false,
  map_embed_url TEXT,
  created_at TIMESTAMP DEFAULT now()
);
```
### 5. Storage (for images)

- Create a bucket farmhouse-images and make it public.
- Update the admin form to upload files instead of pasting URLs (*requires additional code*).

### 6. Row Level Security (*RLS*)

- Enable RLS on farmhouses.
- Allow public read for all rows.
- Allow authenticated users (admin) to insert, update, delete.

### 7. Admin Authentication

- Use Supabase Auth with email/password.
- Create an admin user via Supabase dashboard or registration page.
- Update the admin panel to use Supabase auth instead of hardcoded password.

### 📊 Google Analytics Setup

- Go to analytics.google.com and create a property.
- Get your Measurement ID (starts with G-).
- Open src/app/layout.tsx and add the GA script inside the <head>:
```
<script async src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} />
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `
}} />
```
*Note : `Replace G-XXXXXXXXXX with your actual ID`.*

**Track custom events (WhatsApp clicks, page views) as needed.**

### 🚀 Deploy to Vercel

- Push your code to GitHub.
- Import the repository on Vercel.
- Add environment variables (if using Supabase).
- Deploy. Vercel will auto‑detect Next.js.
- Your site will be live on your-project.vercel.app.
- Alternative (without GitHub):

```bash
npm i -g vercel
```
### vercel
**⚠️ Supabase Free Tier Limitations**
**500 MB database – enough for 25 farmhouses.**
- 1 GB file storage – images must be optimized (WebP, max 200 KB each). For 25 farmhouses × 10 images, it's safe.
- 2 GB bandwidth per month for storage. If you expect high traffic, consider a CDN (Cloudflare) or upgrade.
- 50,000 monthly active users for auth – more than enough for a small business.
- No built‑in email service – use Supabase edge functions or a third‑party service for contact forms (currently not implemented).

### 🧑‍💼 Client Details (Customisation)

- Replace the following in the code:
- Phone Number: Search 923102787627 and replace with actual client number.
- Email: Search arshadjamal1709@gmail.com and replace.
- Address: Update in Footer.tsx.
- Social Links: Add real Facebook/Instagram URLs in Footer.tsx.
- 🎨 Styling & Animation
- Dark Theme: All colors defined in globals.css (gray scale, emerald).
- Glassmorphism: .glass utility class.
- Scroll Reveal: ScrollReveal component using Intersection Observer.
- Continuous Animations: pulse-glow, float, fadeInUp keyframes.

### 🔐 Admin Credentials (*Demo*)
- URL: /admin
- Password: demo123
*⚠️ For production, replace with Supabase Auth or a strong hashed password.*

### 🗺️ Google Maps Embed

- Each farmhouse in `src/data/farmhouses.ts` contains a `mapEmbedUrl`. Replace the placeholder with a real Google Maps embed link:
- Go to Google Maps, search the location.
- Click Share → Embed a map.
- Copy the src URL and paste it into `mapEmbedUrl`.
---
### 📞 WhatsApp Booking Flow

- User clicks “Chat Now” / “Chat for Best Price”.
- WhatsApp web/app opens with a pre‑filled message like:

**Hi, I'm interested in `[Farmhouse Name]` at `[Location]`**
**The client negotiates price and confirms manually.**
- No online payment integration – ideal for businesses where bargaining is common.
---
### 🛠️ Future Enhancements
- Real booking calendar with availability
- Online payment gateway (Razorpay/Stripe)
- Email notifications for enquiries
- Multi‑language support
- Image upload in admin (via Supabase Storage)
- User accounts for returning customers

### 📦 Dependencies
```
json
{
  "next": "16.2.9",
  "react": "19.0.0",
  "react-dom": "19.0.0",
  "lucide-react": "latest",
  "tailwindcss": "4.0.0",
  "@tailwindcss/postcss": "latest"
}
```
### 🤝 Contributing

**This is a client project. For custom development, contact:**
- *📧 arshadjamal1709@gmail.com*
- *📞 0310 2787627*
