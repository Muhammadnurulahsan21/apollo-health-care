import React from 'react';
import { Button } from 'react-bootstrap';

const MedicineShopCard = (props) => {
    const { medicineName, catagory, Generics, companyName, price, img } =
    props.medicinesShop || {};

  return (
    <div className="col">
      <div className="card p-1 m-2 text-start">
        <img src={img} height="250px" className="card-img-top" alt=""/>
        <div className="card-body">
          <h5 className="card-title fw-bold "><span  className="fw-bold">MedicineName:</span> {medicineName}</h5>
          <p className="card-text mb-2 "><span  className="fw-bold">Catagory:</span> {catagory}</p>
          <p className="card-text mb-2 "><span  className="fw-bold">Generics:</span> {Generics}</p>
          <p className="card-text"><span className="fw-bold">Company Name: </span>{companyName}</p> 
          <p className="card-text"><span className="fw-bold">Price: </span>{price}</p> 
          <Button variant="secondary">Buy Now</Button>
        </div>
      </div>
    </div>
  );
};

export default MedicineShopCard;