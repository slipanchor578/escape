export default function Header() {
    return (
        <header className="blog-header">
          <div className="container header-flex">
            <a href="#" className="logo">
              My<span>Blog</span>
            </a>
            <nav className="nav-links">
              <a href="#">Home</a>
              <a href="#">Article</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </nav>
          </div>
        </header>
    )
}