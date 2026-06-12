import Link from "next/link";
import { allPosts } from "@/lib/allPosts";

export default async function Page() {
  const tagCount: Record<string, number> = {};
  allPosts.forEach((post) => {
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
