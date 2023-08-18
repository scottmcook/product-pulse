// Components
import NavBar from '@/components/NavBar/NavBar';
import Toolbar from '@/components/Toolbar/Toolbar';
import CardLayout from '@/components/CardLayout/CardLayout';

// Styles
import './globals.css'
import { Lato } from 'next/font/google'

// Utilities
import useSWR from 'swr';

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

type Devices = {
  product: {
    name: string;
  };
  id: string;
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={lato.className}>
        <NavBar />
        <Toolbar />
        <CardLayout />
      </body>
    </html>
  )
}
