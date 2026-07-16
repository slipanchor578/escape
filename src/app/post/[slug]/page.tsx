import { allPosts } from '@/lib/allPosts';
import markdownToHtml from '@/lib/markdownToHtml';
import Link from 'next/link';
type Params = Promise<{ slug: string }>;

// この時点では各記事ごととなるので配列ではなく
// { params: Promise<{slug: string}>} という型で渡される
export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug)!;
  const content = await markdownToHtml(post.content || '');

  return (
    <article className="mt-10 mb-15 rounded-none border-none bg-transparent p-0 max-md:p-6">
      {/* 記事のヘッダー情報 */}
      <header className="mb-8 border-b pb-0">
        {/* カテゴリ・タグ一覧 */}
        <div className="flex flex-wrap gap-2">
          {post.tags?.map((tag) => (
            <Link
              className="mb-0 inline-block text-sm font-semibold text-(--primary-color) capitalize hover:underline"
              key={tag}
              href={`/tag/${tag}`}
            >
              #{tag}
            </Link>
          ))}
        </div>
        {/* 記事タイトル */}
        <h1 className="my-3 text-4xl leading-[1.3] font-bold text-[#1e293b] max-md:text-[26px]">
          {post.title}
        </h1>
        {/* 投稿日等のメタ情報 */}
        <p className="mb-3.5 text-[13px] text-[#64748b]">
          Published on <time dateTime={post.date}>{post.date}</time>
        </p>
      </header>
      {/* 記事本文 */}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </article>
  );
}

// この時点ではPromise<{ slug: string }[]>
export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}
