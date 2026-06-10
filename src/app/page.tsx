export default function Index() {
  return (
    <>
        <main className="blog-main">
            <h1 className="section-title">
                Latest Articles
            </h1>

            {/* Post Card 1 */}
            <article className="post-card">
                <div className="post-image" style={{ backgroundColor: "#ddd" }}></div>
                <div className="post-content">
                    <span className="post-category">Technology</span>
                    <h2><a href="#">Getting Started with Static Site Generators</a></h2>
                    <p className="post-meta">Published on June 9, 2026 by Admin</p>
                    <p className="post-excerpt">Static websites are fast, secure, and incredibly easy to host. Learn how to convert your layout into production-ready files.</p>
                    <a href="#" className="read-more">Read More &rarr;</a>
                </div>
            </article>

            {/* Post Card 2 */}
            <article className="post-card">
                <div className="post-image" style={{ backgroundColor: "#ddd" }}></div>
                <div className="post-content">
                    <span className="post-category">Design</span>
                    <h2><a href="#">Mastering CSS Grid and Flexbox Layouts</a></h2>
                    <p className="post-meta">Published on June 5, 2026 by Jane Doe</p>
                    <p className="post-excerpt">Discover how modern CSS layout modules make building responsive, multi-column website layouts easier than ever before.</p>
                    <a href="#" className="read-more">Read More &rarr;</a>
                </div>
            </article>
        </main>

        {/* Sidebar Column */}
        <aside className="blog-sidebar">
            {/* About Widget */}
            <div className="sidebar-widget">
                <h3>About Me</h3>
                <p>Welcome to my static blog template! I write about modern web development, clean design, and performance optimizations.</p>
            </div>

            {/* Categories Widget */}
             <div className="sidebar-widget">
                <h3>Categories</h3>
                <ul className="widget-list">
                    <li><a href="#">Technology (12)</a></li>
                    <li><a href="#">Web Design (8)</a></li>
                    <li><a href="#">Tutorials (5)</a></li>
                    <li><a href="#">Lifestyle (3)</a></li>
                </ul>
             </div>
        </aside>
    </>
  )  
}