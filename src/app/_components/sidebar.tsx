// SideBar Column
export default function SideBar() {
  return (
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
  );
}
