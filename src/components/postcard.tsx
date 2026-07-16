import Link from 'next/link';
import { truncateUnicode } from '@/lib/api';
import type { Post } from '@/interfaces/post';

export default function PostCard({ post }: Readonly<{ post: Post }>) {
  return (
    <article className="box-shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] mb-7.5 overflow-hidden rounded-lg border border-(--border-color) bg-white">
      <div className="p-6">
        <h2 className="text-2xl">
          <Link className="hover:underline" href={`/post/${post.slug}`}>
            {post.title}
          </Link>
        </h2>
        <p className="mb-3.5 text-sm text-[#64748b]">
          Published on {post.date}
        </p>
        <p className="mb-4 text-[#475569]">
          {truncateUnicode(post.content, 120)}
        </p>
        <Link
          href={`/post/${post.slug}`}
          className="font-semibold hover:underline"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}
