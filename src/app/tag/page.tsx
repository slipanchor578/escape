import Link from "next/link";
import { getAllPosts } from "@/lib/api";

export default async function TagIndexPage() {
  const posts = await getAllPosts();

  const tagCount: Record<string, number> = {};
  posts.forEach((post) => {
    post.tags?.forEach((tag: string) => {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    });
  });

  // [タグ名, 出現回数][] の配列が返る
  const tags = Object.entries(tagCount);

  return (
    <article className="post-card">
      <div className="post-content">
        <h2>Tag</h2>
        <ul>
          {tags.map(([tag, count]) => (
            <li key={tag}>
              <Link href={`/tag/${tag}`}>
                {tag} ({count})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
