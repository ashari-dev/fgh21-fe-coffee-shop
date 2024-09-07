import React from "react";
import CardInformation from "../components/CardInformation";
import OrderStatic from "../components/OrderStatic";
import ListPopularOrder from "../components/ListPopularOrder";
import SidebarAdmin from "../components/SiderbarAdmin";
import Navbar from "../component/Navbar";

function DashboarAdmin() {
  return (
    <div>
      <Navbar />
      <div className="py-8 flex items-center justify-between border-b"></div>
      <div className="flex">
        <SidebarAdmin active={1} />
        <div className="border-l w-full min-h-screen pt-6  flex flex-col gap-5">
          <CardInformation />
          <OrderStatic />
          <ListPopularOrder />
        </div>
      </div>
    </div>
  );
}
export default DashboarAdmin;
