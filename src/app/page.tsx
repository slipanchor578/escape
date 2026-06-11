import { getAllPosts } from "@/lib/api";
import Link from "next/link";
export default async function Index() {
  const posts = await getAllPosts();
  const latest5 = posts.slice(0, 5);
  return (
    <>
      {/* Post Card 1 */}
      <article className="post-card">
        {/* <div className="post-image" style={{ backgroundColor: "#ddd" }}></div> */}
        <div className="post-content">
          <span className="post-category">Technology</span>
          <h2>
            <a href="#">Getting Started with Static Site Generators</a>
          </h2>
          <p className="post-meta">Published on June 9, 2026 by Admin</p>
          <p className="post-excerpt">
            Static websites are fast, secure, and incredibly easy to host. Learn
            how to convert your layout into production-ready files.
          </p>
          <a href="#" className="read-more">
            Read More &rarr;
          </a>
        </div>
      </article>

      {/* Post Card 2 */}
      <article className="post-card">
        {/* <div className="post-image" style={{ backgroundColor: "#ddd" }}></div> */}
        <div className="post-content">
          <span className="post-category">Design</span>
          <h2>
            <a href="#">Mastering CSS Grid and Flexbox Layouts</a>
          </h2>
          <p className="post-meta">Published on June 5, 2026 by Jane Doe</p>
          <p className="post-excerpt">
            Discover how modern CSS layout modules make building responsive,
            multi-column website layouts easier than ever before.
          </p>
          <a href="#" className="read-more">
            Read More &rarr;
          </a>
        </div>
      </article>
    </>
  );
}
