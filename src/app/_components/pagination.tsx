import PaginationLink from '@/components/paginationlink'; 

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
    <div className="flex justify-center items-center gap-2.5 mt-5">
      {showPrev && <PaginationLink href={prevHref}>Prev</PaginationLink>}
      <span className="font-bold">
        {currentPage} / {totalPage}
      </span>
      {showNext && <PaginationLink href={nextHref}>Next</PaginationLink>}
    </div>
  );
}
