import React from "react";
import Header from "./_components/header";
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
          <main className="blog-main">{children}</main>
          {/* Sidebar Column */}
          <aside className="blog-sidebar">
            {/* About Widget */}
            <div className="sidebar-widget">
              <h3>About Me</h3>
              <p>
                Welcome to my static blog template! I write about modern web
                development, clean design, and performance optimizations.
              </p>
            </div>

            {/* Categories Widget */}
            <div className="sidebar-widget">
              <h3>Categories</h3>
              <ul className="widget-list">
                <li>
                  <a href="#">Technology (12)</a>
                </li>
                <li>
                  <a href="#">Web Design (8)</a>
                </li>
                <li>
                  <a href="#">Tutorials (5)</a>
                </li>
                <li>
                  <a href="#">Lifestyle (3)</a>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
