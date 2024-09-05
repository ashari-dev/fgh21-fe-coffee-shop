import React from "react";
import CardInformation from "../components/CardInformation";
import OrderStatic from "../components/OrderStatic";
import ListPopularOrder from "../components/ListPopularOrder";
import SidebarAdmin from "../components/SiderbarAdmin";
import NavbarAdmin from "../component/NavbarAdmin";

function DashboarAdmin() {
  return (
    <div>
      <NavbarAdmin />

      <div className="flex">
        <SidebarAdmin active={1} />
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
