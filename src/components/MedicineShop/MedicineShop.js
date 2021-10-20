import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import MedicineShopCard from "./../MedicineShopCard/MedicineShopCard";

const MedicineShop = () => {
  const [medicinesShop, setMedicineShop] = useState([]);
  useEffect(() => {
    fetch("/medicineShop.json")
      .then((res) => res.json())
      .then((data) => setMedicineShop(data));
  }, []);
  return (
    <div>
      <div className="container mb-5 mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-1">
          {medicinesShop.map((medicinesShop) => (
            <MedicineShopCard
              key={medicinesShop.id}
              medicinesShop={medicinesShop}
            ></MedicineShopCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicineShop;
