import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";

type Params = Promise<{ slug: string }>;

// この時点では各記事ごととなるので配列ではなく
// { params: Promise<{slug: string}>} という型で渡される
export default async function PostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const content = await markdownToHtml(post.content || "");

  return (
    <article className="post-detail">
      {/* 記事のヘッダー情報 */}
      <header className="post-detail-header">
        {/* カテゴリ・タグ一覧 */}
        <div className="post-tags">
          {post.tags?.map((tag) => (
            <span key={tag} className="post-category">
              {tag}
            </span>
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
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
