import ArrowRightIcon from "/public/images/ic_arrow-right.svg";
import ArrowLeftIcon from "/public/images/ic_arrow-left.svg";

interface PaginationProps {
  className?: string;
  currentPage?: number;
  totalPages?: number;
  goToPrevPage: () => void;
  goToNextPage: () => void;
  goToPage?: (pageNumber: number) => void;
}

const Pagination = ({
  className = "",
  currentPage,
  totalPages,
  goToPrevPage,
  goToNextPage,
  goToPage,
}: PaginationProps) => {
  const buttonStyle =
    "flexcenter m-2 h-40 w-40 rounded-[100%] border border-gray-200 text-16 font-semibold text-cool-gray-500 disabled:opacity-50";

  const renderPageButtons = () => {
    return Array.from({ length: totalPages }, (_, i) => (
      <button
        key={i + 1}
        onClick={() => goToPage(i + 1)}
        className={`${buttonStyle} ${
          i + 1 === currentPage ? "bg-blue text-white" : ""
        }`}
      >
        {i + 1}
      </button>
    ));
  };

  return (
    <div className={`flexcenter w-full ${className}`}>
      <button
        onClick={goToPrevPage}
        disabled={totalPages ? currentPage === 1 : ""}
        className={buttonStyle}
      >
        <ArrowLeftIcon />
      </button>
      {totalPages && renderPageButtons()}
      <button
        onClick={goToNextPage}
        disabled={totalPages ? currentPage === totalPages : ""}
        className={buttonStyle}
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
};

export default Pagination;
