import { getAllPosts } from "@/lib/api";
type Params = Promise<{ tag: string }>;

export default async function TagsPage({ params }: { params: Params }) {
  const { tag } = await params;
  const posts = (await getAllPosts()).filter((p) => p.tags.includes(tag));

  return (
    <main>
      <h1 className="tag-title">#{tag}</h1>
      <div className="tag-list">
        {posts.map((post) => (
          <article key={post.slug} className="tag-post">
            <p className="date">{post.date}</p>
            <h2>
              <a href={`/posts/${post.slug}`}>{post.title}</a>
            </h2>
          </article>
        ))}
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  const tags = Array.from(new Set(posts.flatMap((p) => p.tags)));
  return tags.map((tag) => ({
    tag,
  }));
}
