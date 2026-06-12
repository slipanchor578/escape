import { allPosts } from "@/lib/allPosts";
import { Post } from "@/interfaces/post";
import Link from "next/link";
type Params = Promise<{ tag: string }>;

export default async function Page({ params }: { params: Params }) {
  const { tag } = await params;
  const posts = allPosts.filter((p) => p.tags.includes(tag));

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
        <h2>#{tag}</h2>
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

export async function generateStaticParams() {
  // flatMapで各記事のtagを全部取って詰めた配列を作る
  // [a,a,a,a,b,b,c,c,c,c,c,]
  // みたいな。そしてSetで重複を除いて[a,b,c] となる
  const tags = Array.from(new Set(allPosts.flatMap((p) => p.tags)));
  return tags.map((tag) => ({
    tag,
  }));
}
