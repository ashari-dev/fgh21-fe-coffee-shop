import React from "react";
import { FaCalendarDays } from "react-icons/fa6";

function ListPopularOrder() {
  return (
    <div>
      <div className="flex flex-col border-2 p-[25px] rounded-lg justify-between ml-20 mr-20 mt-6">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-[20px]">Produk Terlaris</h1>
          <div className="flex items-center bg-[#F1F1F1] p-[10px]  rounded-lg gap-[10px] ">
            <FaCalendarDays />
            <h2>16-23 January 2023</h2>
            <select name="" id=""></select>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <td className="p-[18px] ">No</td>
              <td className="p-[18px] text-center">Nama Produk</td>
              <td className="p-[18px] text-center">Terjual</td>
              <td className="p-[18px] text-center">Keuntungan</td>
            </tr>
          </thead>
          <tbody>
            <tr className="text-[15px]  bg-[#F9FAFB]">
              <td className="p-[18px] border-b-2 border-t-2 items-center text-[#4F5665]">
                1
              </td>
              <td className="p-[18px] border-b-2 border-t-2 text-center items-center text-[#4F5665]">
                Caramel Machiato
              </td>
              <td className="p-[18px] border-b-2 border-t-2 text-center text-[#4F5665]">
                300 Cup
              </td>
              <td className="p-[18px] border-b-2 border-t-2 text-center text-[#00A700] ">
                IDR 9.000.000
              </td>
            </tr>
            <tr className="text-[15px]">
              <td className="p-[18px] border-b-2 border-t-2 items-center text-[#4F5665]">
                2
              </td>
              <td className="p-[18px] border-b-2 border-t-2 text-center items-center text-[#4F5665]">
                Hazelnut Latte
              </td>
              <td className="p-[18px] border-b-2 border-t-2 text-center text-[#4F5665]">
                200 Cup
              </td>
              <td className="p-[18px] border-b-2 border-t-2 text-center text-[#00A700] ">
                IDR 8.000.000
              </td>
            </tr>
            <tr className="text-[15px]  bg-[#F9FAFB]">
              <td className="p-[18px] border-b-2 border-t-2 items-center text-[#4F5665]">
                3
              </td>
              <td className="p-[18px] border-b-2 border-t-2 text-center items-center text-[#4F5665]">
                Kopi Susu
              </td>
              <td className="p-[18px] border-b-2 border-t-2 text-center text-[#4F5665]">
                100 Cup
              </td>
              <td className="p-[18px] border-b-2 border-t-2 text-center text-[#00A700] ">
                IDR 7.000.000
              </td>
            </tr>
            <tr className="text-[15px]">
              <td className="p-[18px] border-b-2 border-t-2 items-center text-[#4F5665]">
                4
              </td>
              <td className="p-[18px] border-b-2 border-t-2 text-center items-center text-[#4F5665]">
                Espresso Supreme
              </td>
              <td className="p-[18px] border-b-2 border-t-2 text-center text-[#4F5665]">
                90 Cup
              </td>
              <td className="p-[18px] border-b-2 border-t-2 text-center text-[#00A700] ">
                IDR 6.000.000
              </td>
            </tr>
            <tr className="text-[15px]  bg-[#F9FAFB]">
              <td className="p-[18px] border-b-2 border-t-2 items-center text-[#4F5665]">
                5
              </td>
              <td className="p-[18px] border-b-2 border-t-2 text-center items-center text-[#4F5665]">
                Caramel Velvet Latte
              </td>
              <td className="p-[18px] border-b-2 border-t-2 text-center text-[#4F5665]">
                80 Cup
              </td>
              <td className="p-[18px] border-b-2 border-t-2 text-center text-[#00A700] ">
                IDR 5.000.000
              </td>
            </tr>
            <tr className="text-[15px]">
              <td className="p-[18px] border-b-2 border-t-2 items-center text-[#4F5665]">
                6
              </td>
              <td className="p-[18px] border-b-2 border-t-2 text-center items-center text-[#4F5665]">
                Hazelnut Dream Brew
              </td>
              <td className="p-[18px] border-b-2 border-t-2 text-center text-[#4F5665]">
                70 Cup
              </td>
              <td className="p-[18px] border-b-2 border-t-2 text-center text-[#00A700] ">
                IDR 5.000.000
              </td>
            </tr>
            <tr className="text-[15px]  bg-[#F9FAFB]">
              <td className="p-[18px] border-b-2 border-t-2 items-center text-[#4F5665]">
                7
              </td>
              <td className="p-[18px] border-b-2 border-t-2 text-center items-center text-[#4F5665]">
                Vanilla Silk Mocha
              </td>
              <td className="p-[18px] border-b-2 border-t-2 text-center text-[#4F5665]">
                60 Cup
              </td>
              <td className="p-[18px] border-b-2 border-t-2 text-center text-[#00A700] ">
                IDR 4.000.000
              </td>
            </tr>
            <tr className="text-[15px]">
              <td className="p-[18px] border-b-2 border-t-2 items-center text-[#4F5665]">
                8
              </td>
              <td className="p-[18px] border-b-2 border-t-2 text-center items-center text-[#4F5665]">
                Dark Roast Delight
              </td>
              <td className="p-[18px] border-b-2 border-t-2 text-center text-[#4F5665]">
                50 Cup
              </td>
              <td className="p-[18px] border-b-2 border-t-2 text-center text-[#00A700] ">
                IDR 3.000.000
              </td>
            </tr>
            <tr className="text-[15px]  bg-[#F9FAFB]">
              <td className="p-[18px] border-b-2 border-t-2 items-center text-[#4F5665]">
                9
              </td>
              <td className="p-[18px] border-b-2 border-t-2 text-center items-center text-[#4F5665]">
                Ethiopian Yirgacheffe Euphoria
              </td>
              <td className="p-[18px] border-b-2 border-t-2 text-center text-[#4F5665]">
                40 Cup
              </td>
              <td className="p-[18px] border-b-2 border-t-2 text-center text-[#00A700] ">
                IDR 2.000.000
              </td>
            </tr>
            <tr className="text-[15px]">
              <td className="p-[18px] border-b-2 border-t-2 items-center text-[#4F5665]">
                10
              </td>
              <td className="p-[18px] border-b-2 border-t-2 text-center items-center text-[#4F5665]">
                Indonesian Sumatra Reserve
              </td>
              <td className="p-[18px] border-b-2 border-t-2 text-center text-[#4F5665]">
                30 Cup
              </td>
              <td className="p-[18px] border-b-2 border-t-2 text-center text-[#00A700] ">
                IDR 500.000
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ListPopularOrder;
