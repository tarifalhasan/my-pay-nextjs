"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReactPaginate from "react-paginate";

const Pagination = ({}) => {
  const handlePageClick = (selectedItem) => {
    // Handle page click logic here
  };

  return (
    <div className="flex  flex-col gap-5  sm:flex-row  items-center justify-between">
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <ChevronRight className=" w-[25px] h-[25px] text-[#838995]" />
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={10}
        previousLabel={
          <ChevronLeft className=" w-[25px] h-[25px] text-[#838995]" />
        }
        renderOnZeroPageCount={null}
        className="flex items-center gap-5  px-4 h-[46px] rounded border-border"
        activeClassName="bg-[#3056D3]  rounded-full w-[25px] h-[25px] text-white text-center cursor-pointer"
      />
    </div>
  );
};

export default Pagination;
