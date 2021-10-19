import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

const MedicineShop = () => {
  return (
    <div>
      <div className="container py-5 mb-4 mt-5 text-start">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="secondary">Make an Appointment</Button>
        </Card.Body>
      </Card>
      </div>
    </div>
  );
};

export default MedicineShop;
