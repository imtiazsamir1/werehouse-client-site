import React from "react";
import { Card, CardGroup } from "react-bootstrap";

const ManageInv = () => {
  return (
    <div>
      <h2>Service Provide</h2>
      <CardGroup>
        <Card>
          <Card.Body className="bg-white">
            <Card.Title>1420+</Card.Title>
            <Card.Text>Coustomer</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body className="bg-white">
            <Card.Title>50+</Card.Title>
            <Card.Text>Country</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body className="bg-white ">
            <Card.Title>5000+</Card.Title>
            <Card.Text>Delivery</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default ManageInv;
