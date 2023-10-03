import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import type { Metadata } from 'next'
import Header from './layout/Header'
import Footer from './layout/Footer';


export const metadata: Metadata = {
  title: 'UPSC AKHADA',
  description: 'Relevant . Quality . Simplified',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
