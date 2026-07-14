import { allPosts } from '@/lib/allPosts';
import markdownToHtml from '@/lib/markdownToHtml';
import Link from 'next/link';
type Params = Promise<{ slug: string }>;

// この時点では各記事ごととなるので配列ではなく
// { params: Promise<{slug: string}>} という型で渡される
export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug)!;
  const content = await markdownToHtml(post.content || "");

  return (
    <article className="post-detail">
      {/* 記事のヘッダー情報 */}
      <header className="post-detail-header">
        {/* カテゴリ・タグ一覧 */}
        <div className="post-tags">
          {post.tags?.map((tag) => (
            <Link className="post-category" key={tag} href={`/tag/${tag}`}>
              #{tag}
            </Link>
          ))}
        </div>
        {/* 記事タイトル */}
        <h1 className="post-detail-title">{post.title}</h1>
        {/* 投稿日等のメタ情報 */}
        <p className="post-meta">
          Published on <time dateTime={post.date}>{post.date}</time>
        </p>
      </header>
      {/* 記事本文 */}
      <div
        className="post-body"
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
