import React, { useEffect, useState } from "react";
import { getRealEstate } from "../../utilities/apis/realEstate";

const BuildingsList = ({
  selectedType,
  selectedArea,
  selectedOrder,
  ...props
}) => {
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    getRealEstate(selectedType, selectedOrder, selectedArea).then(res =>
      setBuildings(res.data)
    );
  }, [selectedArea, selectedType, selectedOrder]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">القطعة</th>
          <th scope="col">رقم القسيمة</th>
          <th scope="col">المساحة</th>
          <th scope="col">رقم المالك</th>
          <th scope="col">السعر المطلوب</th>
          <th scope="col">التاريخ</th>
          <th scope="col">تفاصيل</th>
        </tr>
      </thead>
      <tbody>
        {buildings.length > 0 &&
          buildings.map(el => (
            <tr key={el.id}>
              <th scope="row">{el.block}</th>
              <td>{el.building_no}</td>
              <td>{el.area} م</td>
              <td>{el.mobile}</td>
              <td>{el.price} د.ك</td>
              <td>{el.offer_date}</td>
              <td>{el.details}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

BuildingsList.defaultProps = {
  selectedArea: { id: 1 },
  selectedType: { id: 1 },
  selectedOrder: { id: 1 }
};

export default BuildingsList;
