import Link from 'next/link';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Learn NextJS</title>
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/postingan">Postingan</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
