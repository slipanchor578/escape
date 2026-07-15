import { allPosts } from '@/lib/allPosts';
import { Post } from '@/interfaces/post';
import Link from 'next/link';
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
    <article className="bg-white rounded-lg overflow-hidden 
      box-shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] 
      mb-7.5 border border-(--border-color)">
      <div className="p-6">
        <h2 className="text-2xl mb-2.5 leading-[1.3]">#{tag}</h2>
        {sortedKeys.map((ym) => {
          const [year, month] = ym.split("-");
          return (
            <section key={ym} className="mt-8">
              <h3 className="text-xl mb-3 text-[#333]">
                {year}年{month}月
              </h3>
              <ul className="flex flex-wrap gap-x-3 gap-y-2 m-0 p-0 list-none">
                {groups[ym].map((post) => (
                  <li className="my-1 mx-0" key={post.slug}>
                    <Link className="p-0 bg-transparent rounded-none font-normal text-lg text-black no-underline hover:underline" href={`/post/${post.slug}`}>{post.title}</Link>
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
