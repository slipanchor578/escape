import Link from "next/link";

type Params = {
  currentPage: number;
  totalPage: number;
};

export default function Pagination({ currentPage, totalPage }: Params) {
  const prevButton =
    currentPage > 1 ? (
      <Link href={`/page/${currentPage - 1}`}>前へ</Link>
    ) : (
      <span>前へ</span>
    );

  const nextButton =
    currentPage < totalPage ? (
      <Link href={`/page/${currentPage + 1}`}>次へ</Link>
    ) : (
      <span>次へ</span>
    );

  return (
    <div className="pagination">
      {prevButton}
      <span>
        {currentPage} / {totalPage}
      </span>
      {nextButton}
    </div>
  );
}
