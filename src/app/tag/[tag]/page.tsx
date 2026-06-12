import { getAllPosts } from "@/lib/api";
import Link from "next/link";
type Params = Promise<{ tag: string }>;

export default async function TagPage({ params }: { params: Params }) {
  const { tag } = await params;
  const posts = (await getAllPosts()).filter((p) => p.tags.includes(tag));

  return (
    // <main>
    //   <h1 className="tag-title">#{tag}</h1>
    //   <div className="tag-list">
    //     {posts.map((post) => (
    //       <article key={post.slug} className="tag-post">
    //         <p className="date">{post.date}</p>
    //         <h2>
    //           <a href={`/posts/${post.slug}`}>{post.title}</a>
    //         </h2>
    //       </article>
    //     ))}
    //   </div>
    // </main>
    <article className="post-card">
      <div className="post-content">
        <h2>#{tag}</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <p>{post.date}</p>
              <h2>
                <Link href={`/post/${post.slug}`}>{post.title}</Link>
              </h2>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  const tags = Array.from(new Set(posts.flatMap((p) => p.tags)));
  return tags.map((tag) => ({
    tag,
  }));
}
