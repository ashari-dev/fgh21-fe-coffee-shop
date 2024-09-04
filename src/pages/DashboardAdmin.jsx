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
        <SidebarAdmin />
        <div>
          <CardInformation />
          <OrderStatic />
          <ListPopularOrder />
        </div>
      </div>
    </div>
  );
}
export default DashboarAdmin;
