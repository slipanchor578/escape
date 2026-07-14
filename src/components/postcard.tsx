import Link from 'next/link';
import { truncateUnicode } from '@/lib/api';
import type { Post } from '@/interfaces/post';

export default function PostCard({ post }: Readonly<{ post: Post }>) {
  return (
    <article className="
      bg-white rounded-lg overflow-hidden 
      box-shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] 
      mb-7.5 border border-(--border-color)
    ">
      <div className="p-6">
        <h2 className="text-2xl">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="text-sm text-[#64748b] mb-3.5">Published on {post.date}</p>
        <p className="text-[#475569] mb-4">{truncateUnicode(post.content, 120)}</p>
        <Link href={`/post/${post.slug}`} className="font-semibold">
          Read More
        </Link>
      </div>
    </article>
  )
}
