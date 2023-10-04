import Navbar from '../components/admin/navbar/navbar';
import type { Metadata } from 'next';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata: Metadata = {
  title: 'Rudsek',
  description: 'Cellphone Wholesale',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
