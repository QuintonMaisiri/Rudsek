"use client"

import { SessionProvider } from 'next-auth/react';
import { Session } from "next-auth";
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import StoreProvider from '@/redux/storeProvider';
config.autoAddCss = false
const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Rudsek',
//   description: 'Cellphone Wholesale',
// }

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <SessionProvider session={session}>
          <StoreProvider >
            {children}
          </StoreProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
