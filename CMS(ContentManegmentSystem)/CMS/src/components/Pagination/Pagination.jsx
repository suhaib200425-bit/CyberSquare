function Pagination({ currentPage, totalPages, onPageChange }) {
  const generatePages = () => {
    const pages = [];

    // First page
    pages.push(1);

    // Left dots
    if (currentPage > 3) {
      pages.push("...");
    }

    // Middle pages
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }

    // Right dots
    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    // Last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return [...new Set(pages)];
  };

  return (
    <div className="flex items-center justify-end mt-3 gap-2">
      
      {/* Prev Button */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-4 py-2 border border-gray-300 rounded-md bg-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Prev
      </button>

      {/* Page Numbers */}
      {generatePages().map((page, index) => (
        <button
          key={index}
          disabled={page === "..."}
          onClick={() =>
            page !== "..." && onPageChange(page)
          }
          className={`px-4 py-2 border rounded-md transition
            ${
              page === currentPage
                ? "bg-black text-white border-black"
                : "bg-white border-gray-300"
            }
            ${
              page === "..."
                ? "cursor-default"
                : "hover:bg-gray-100"
            }
            disabled:opacity-50
          `}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-4 py-2 border border-[var(--BG-COLOR)]-300 rounded-md bg-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
        
      </button>
    </div>
  );
}

export default Pagination;