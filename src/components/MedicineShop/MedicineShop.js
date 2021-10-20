import React, { useEffect, useState } from "react";
import "./MedicineShop.css"
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
      <div className="medicine-img custom-margin">
        <h1 className="pt-5 py-4 ps-5 ">Appllo Health Care MedicineShope</h1>
        <h4 className="pt-1 pt-3 ps-5 ">Home / MedicineShope</h4>
        <h5 className="ps-5 pt-3 fw-normal">Medicine is the science and practice of caring for a patient, <br /> managing the diagnosis, prognosis, prevention, treatment, <br /> palliation their injury or disease, and promoting their health.</h5>
      </div>

      <div className="container mb-5 ">
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
