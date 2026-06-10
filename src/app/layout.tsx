import React from "react";
import Header from "./_components/header";
import SideBar from "./_components/sidebar";
import Footer from "./_components/footer";
// import "./globals.css";
import "./sample.css";

export const metadata = {
  title: "MyBlog",
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
        <div className="container blog-layout">
          <main className="blog-main">
            <h1 className="section-title">Latest Articles</h1>
            {children}
          </main>
          <SideBar />
        </div>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
