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
    <article className="bg-white rounded-lg overflow-hidden 
      box-shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] 
      mb-7.5 border border-(--border-color)">
      <div className="p-6">
        <h2 className="text-2xl mb-2.5 leading-[1.3]">Tag</h2>
        <ul className="flex flex-wrap gap-y-2 gap-x-3 p-0 mt-5 mx-0 mb-0 list-none">
          {tags.map(([tag, count]) => (
            <li key={tag}>
                <Link className="py-0.5 px-2 font-semibold no-underline text-black hover:underline" href={`/tag/${tag}`}>
                {tag} ({count})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
