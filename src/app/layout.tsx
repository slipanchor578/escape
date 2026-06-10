import React from "react";
import Header from "./_components/header";
import Footer from "./_components/footer";
// import "./globals.css";
import "./sample.css";

export const metadata = {
  title: "MyBlog"
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="ja">
      <body>
        {/* Header */}
        <Header />
        {/* Main Container */}
        <div className="container blog-layout">
          { children }
        </div>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}