import Link from 'next/link';
import { allPosts } from '@/lib/allPosts';

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
    <article className="box-shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] mb-7.5 overflow-hidden rounded-lg border border-(--border-color) bg-white">
      <div className="p-6">
        <h2 className="mb-2.5 text-2xl leading-[1.3]">Tag</h2>
        <ul className="mx-0 mt-5 mb-0 flex list-none flex-wrap gap-x-3 gap-y-2 p-0">
          {tags.map(([tag, count]) => (
            <li key={tag}>
              <Link
                className="px-2 py-0.5 font-semibold text-black no-underline hover:underline"
                href={`/tag/${tag}`}
              >
                {tag} ({count})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
