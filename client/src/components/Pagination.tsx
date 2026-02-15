import { useMemo } from "react";

interface IPaginationProps {
  page: number;
  setPage: any;
  totalPages: number;
  limit: number;
}

const Pagination = ({ page, setPage, totalPages }: IPaginationProps) => {
  const getPageNumbers = useMemo(() => {
    const maxVisible = 5;
    const half = Math.floor(maxVisible / 2);
    const start = Math.max(
      1,
      Math.min(page - half, totalPages - maxVisible + 1),
    );
    const end = Math.min(totalPages, start + maxVisible - 1);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }, [page, totalPages]);

  const handlePageChange = (index: Number) => {
    setPage(index);
  };

  return (
    <div className="pagination">
      <div style={{ padding: "5px 0px" }}>
        Page {page} of {totalPages}
      </div>
      <button
        disabled={page <= 1}
        className="btn pagination-btn"
        onClick={() => setPage(page - 1)}
      >
        {"<< Prev"}
      </button>

      {getPageNumbers.map((item) => (
        <span
          onClick={() => handlePageChange(item)}
          key={item}
          className={`pagination-number ${item === page ? "pagination-number-active" : ""}`}
        >
          {item}
        </span>
      ))}

      <button
        className="btn pagination-btn"
        disabled={page >= totalPages}
        onClick={() => setPage(page + 1)}
      >
        {"Next >>"}
      </button>
    </div>
  );
};

export default Pagination;
