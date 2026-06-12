import Link from "next/link";

type Params = {
  currentPage: number;
  totalPage: number;
};

export default function Pagination({ currentPage, totalPage }: Params) {
  const showPrev = currentPage > 1;
  const showNext = currentPage < totalPage;
  const prevHref = currentPage === 2 ? "/" : `/page/${currentPage - 1}`;
  const nextHref = `/page/${currentPage + 1}`;

  return (
    <div className="pagination">
      {showPrev && <Link href={prevHref}>前へ</Link>}
      <span>
        {currentPage} / {totalPage}
      </span>
      {showNext && <Link href={nextHref}>次へ</Link>}
    </div>
  );
}
