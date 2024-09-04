import React, { useEffect } from "react";
import GridProduct from "../components/GridProduct";
import { FaRegWindowMinimize } from "react-icons/fa";
import { useListProductsQuery } from "../redux/services/products";

function HomeGridFavourite() {
  const { data, err, isLoading } = useListProductsQuery([1, 4]);
  const list = data.result || []
  return (
    <div className="flex flex-col mt-8">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-2 items-center">
          <div className="text-5xl">
            <span>Here is People's </span>
            <span className="text-[#8E6447]">Favorite</span>
          </div>
          <div className="text-orange-400 text-4xl">
            <FaRegWindowMinimize />
          </div>
          <div className="text-[#4F5665]">
            Let's choose and have a bit taste of people's favorite. It might be
            yours too!
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-4 grid-cols-2">
          {isLoading || err
            ? ""
            : list.map((item) => {
                return <GridProduct key={item.id} data={item} />;
              })}
        </div>
      </div>
    </div>
  );
}

export default HomeGridFavourite;
