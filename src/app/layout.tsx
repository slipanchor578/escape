import React from 'react';
import Container from '@/components/container';
import Header from '@/app/_components/header';
import Footer from '@/app/_components/footer';
import './globals.css';

export const metadata = {
  title: 'MyBlog',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        {/* Header */}
        <Header />
        {/* Main Container */}
        <Container>
          <div className="max-w-225 mx-auto py-10">
            <main>{children}</main>
          </div>
        </Container>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
