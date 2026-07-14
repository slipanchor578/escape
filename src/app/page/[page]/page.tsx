import { allPosts } from '@/lib/allPosts';
import PostCard from '@/components/postcard';
import Pagination from '@/app/_components/pagination';

type Params = Promise<{ page: string }>;

export default async function Page({ params }: { params: Params }) {
  const { page } = await params;
  const numPage = Number(page);
  const perPage = 5;

  // 合計記事26, 掲載数5の場合 = 5.2 => 6 となる。5ページだと1記事余るので、切り上げて6ページになる
  const totalPage = Math.ceil(allPosts.length / perPage);

  // 0:5, 5:10, 10:15 みたいな感じ
  const start = (numPage - 1) * perPage;
  const end = start + perPage;
  // たとえば0:5 ならposts[0-4]の5記事となる
  // 5:10 ならposts[5-9]の5記事となる
  // 6ページ目の25:30 ならposts[25-29]で、1記事しか残っていないので1記事だけ取り出す
  const pagePosts = allPosts.slice(start, end);

  return (
    <>
      {pagePosts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}

      <Pagination currentPage={numPage} totalPage={totalPage} />
    </>
  );
}

export async function generateStaticParams() {
  const perPage = 5;
  const totalPages = Math.ceil(allPosts.length / perPage);

  // Array.from にlengthプロパティを持つオブジェクトを渡すと、その数値の長さの配列を作る
  // この時点ではundefined要素の長さ6の配列、valueは捨てて、インデックス = 長さだけ使う
  return Array.from({ length: totalPages }).map((_, i) => ({
    page: String(i + 2),
  }));
}
