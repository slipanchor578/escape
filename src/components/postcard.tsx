import Link from 'next/link';
import { truncateUnicode } from '@/lib/api';
import type { Post } from '@/interfaces/post';

export default function PostCard({ post }: Readonly<{ post: Post }>) {
  return (
    <article className="mb-7.5 overflow-hidden border-b bg-transparent shadow-md">
      <div className="p-6">
        <h2 className="text-2xl text-(--header-color)">
          <Link className="hover:underline" href={`/post/${post.slug}`}>
            {post.title}
          </Link>
        </h2>
        <p className="mb-3.5 text-sm text-(--header-color)">
          Published on {post.date}
        </p>
        <p className="mb-4 text-[#364153]">
          {truncateUnicode(post.content, 120)}
        </p>
        <Link
          href={`/post/${post.slug}`}
          className="font-semibold text-(--header-color) hover:underline"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}
