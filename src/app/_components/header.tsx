import Link from "next/link";
export default function Header() {
  return (
    <header className="blog-header">
      <div className="container header-flex">
        <Link href="/" className="logo">
          My<span>Blog</span>
        </Link>
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="#">Article</Link>
          <Link href="/tags">Tags</Link>
          <Link href="#">About</Link>
        </nav>
      </div>
    </header>
  );
}
