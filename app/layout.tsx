import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/nav-bar';
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from '@/components/ui/sonner';

const bricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Converso',
  description: 'Real-time AI Teaching Platform'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ variables: { colorPrimary: '#fe5933' } }}>
      <html lang="en">
        <body className={`${bricolage.variable} antialiased`}>
          <NavBar />
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
