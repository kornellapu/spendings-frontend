import './globals.css'

export const metadata = {
  title: 'Spending Frontend',
  description: 'Created by Kornél Lapu, 2024 (with next app)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
