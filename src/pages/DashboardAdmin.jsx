import React from "react";
import CardInformation from "../components/CardInformation";
import OrderStatic from "../components/OrderStatic";
import ListPopularOrder from "../components/ListPopularOrder";

function DashboarAdmin() {
  return (
    <div>
      <CardInformation />
      <OrderStatic/>
      <ListPopularOrder />
    </div>
  );
}
export default DashboarAdmin;
  
