import { getAllPosts } from "@/lib/api";
import { Post } from "@/interfaces/post";
import Link from "next/link";

export default async function Page() {
  const posts = await getAllPosts();
  const groups: Record<string, Post[]> = {};

  posts.forEach((post) => {
    const d = new Date(post.date);
    const ym = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;

    if (!groups[ym]) groups[ym] = [];
    groups[ym].push(post);
  });

  const sortedKeys = Object.keys(groups).sort().reverse();

  return (
    <article className="post-card">
      <div className="post-content">
        {sortedKeys.map((ym) => {
          const [year, month] = ym.split("-");
          return (
            <section key={ym} className="toc-section">
              <h3>
                {year}年{month}月
              </h3>
              <ul>
                {groups[ym].map((post) => (
                  <li key={post.slug}>
                    <Link href={`/post/${post.slug}`}>{post.title}</Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </article>
  );
}
