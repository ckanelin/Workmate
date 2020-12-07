import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const TaskCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://source.unsplash.com/user/erondu/600x400"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Some Custom text one can write here</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default TaskCard;
