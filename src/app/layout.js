"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../../components/Navbar';
import { AuthProvider } from '../../hooks/AuthHook';


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </AuthProvider>
    </html>
  )
}
