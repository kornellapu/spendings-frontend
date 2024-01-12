import './globals.css'
import { robotoFlex } from './ui/fonts'

export const metadata = {
  title: 'Spending Frontend',
  description: 'Created by Kornél Lapu, 2024 (with next app)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robotoFlex.className} antialiased`}>{children}</body>
    </html>
  )
}
