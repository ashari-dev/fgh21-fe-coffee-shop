import React from "react";
import CardInformation from "../components/CardInformation";
import OrderStatic from "../components/OrderStatic";
import ListPopularOrder from "../components/ListPopularOrder";
import Navbar from "../component/Navbar";
import SidebarAdmin from "../components/SiderbarAdmin";

function DashboarAdmin() {
  return (
    <div>
      <Navbar />
      <div className="bg-white w-screen h-24"></div>
      <hr />
      <div className="flex">
      <SidebarAdmin />
        <div>
          <CardInformation />
          <OrderStatic/>
          <ListPopularOrder />
        </div>
      </div>
    </div>
  );
}
export default DashboarAdmin;
  
