import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/Component/Navbar'
import Footer from '@/Component/Footer'
import FloatingWhatsApp from '@/Component/FloatingWhatsApp'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Family Farmhouse - Luxury Farm Stays',
  description: 'Discover 25 handpicked farmhouses. Contact 0310 2787627',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-950 text-gray-100 antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}