import { allPosts } from '@/lib/allPosts';
import Pagination from '@/app/_components/pagination';
import PostCard from '@/components/postcard';

export default async function Page() {
  const page = 1;
  const perPage = 5;

  const totalPage = Math.ceil(allPosts.length / perPage);

  const start = (page - 1) * perPage;
  const end = start + perPage;
  const pagePosts = allPosts.slice(start, end);

  return (
    <>
      {pagePosts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}

      <Pagination currentPage={1} totalPage={totalPage} />
    </>
  );
}

/*
  {post.date instanceof Date
                ? post.date.toLocaleDateString("ja-JP")
                : String(post.date)}

  *.md が
  ---
  date: 2000-01-01
  ---
  のようだったとして、普通に{post.date} みたいにして文字列のように使うと、勝手にDate型にしてしまう
  これはmatterライブラリが気を利かせてISO 8601 -> Date型に変換しているから勝手に
  この時Reactは当たり前だが文字列のところにDate型を当てはめられないのでエラーを出す
  そこでDate型なら地域に合わせた文字列時間に変換すれば上手くレンダリングされる
  そもそも
  date: "2000-01-01"
  のように文字列で指定しておけば、強制的に変換しないらしい
*/
