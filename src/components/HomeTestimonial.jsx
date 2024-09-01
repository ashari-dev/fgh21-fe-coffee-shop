import React from "react";
import {
  FaStar,
  FaArrowLeft,
  FaArrowRight,
  FaMinus,
  FaCircle,
} from "react-icons/fa6";
import { useListTestimonialsQuery } from "../redux/services/testimonial";

function HomeTestimonial() {
  const [page, setPage] = React.useState(1)
  if (page < 1) {
    setPage(1)
  }
  const { data, err, isLoading } = useListTestimonialsQuery(page);
  function StarRating({ rating }) {
    const stars = Array.from({ length: rating }, (_, index) => (
      <FaStar key={index} fontSize={20} color="orange" />
    ));
  
    return <div className="flex gap-4">{stars}</div>;
  }
  function pageDown() {
    setPage(page - 1)
  }
  function pageUp() {
    setPage(page + 1)
  }
  return (
    <>
      <div className="flex flex-col md:flex-row bg-[rgba(0,0,0,0.9)] min-h-[583px] gap-4 py-16 md:px-32 p-5">
        <div className="bg-white h-[500px] md:max-h-[432px] flex-1">
          <img src={isLoading || err ? "" : data.result.image} alt={isLoading || err ? "" : data.result.name} className="w-full h-full object-cover"/>
        </div>
        <div className="flex-1 text-white flex-col flex gap-6">
          <div className="text-xl md:flex hidden">TESTIMONIAL</div>
          <div className="text-3xl">{isLoading || err ? "" : data.result.name}</div>
          <div className="text-[#FF8906]">{isLoading || err ? "" : data.result.profession}</div>
          <div>
            {isLoading || err ? "" : data.result.comment}
          </div>
          <div className="flex gap-8 items-center">
            <div >
              <StarRating rating={isLoading || err ? "" : data.result.rating} />
              {/* <FaStar /> */}
            </div>
            <span>{isLoading || err ? "" : data.result.rating}</span>
          </div>
          <div className="flex gap-8">
            <button className="bg-white text-black p-4 rounded-full" onClick={pageDown}>
              <FaArrowLeft />
            </button>
            <button className="bg-[#FF8906] text-black p-4 rounded-full" onClick={pageUp}>
              <FaArrowRight />
            </button>
          </div>
          <div className="flex gap-2 items-center">
            <div className="text-[24px] text-[#FF8906]">
              <FaMinus />
            </div>
            <div className="flex text-[6px] gap-2">
              <FaCircle />
              <FaCircle />
              <FaCircle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeTestimonial;