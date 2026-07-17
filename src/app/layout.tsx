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
      <body className="bg-[#f5f1e4]">
        {/* Header */}
        <Header />
        {/* Main Container */}
        <Container>
          <div className="mx-auto max-w-225 py-10">
            <main>{children}</main>
          </div>
        </Container>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
