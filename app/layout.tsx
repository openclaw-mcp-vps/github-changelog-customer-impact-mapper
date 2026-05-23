import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GitHub Changelog Customer Impact Mapper',
  description: 'Map GitHub changes to customer impact. AI-powered changelog generation for product managers and engineering leads.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8dd376ac-9ce8-4810-83c6-798862d8fdf2"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
