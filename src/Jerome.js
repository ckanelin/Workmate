import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Selection,Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
const Jerome= () => {

    return(
        <Card
            bg='dark' 
            style={{ width: '18rem' ,cursor: "pointer"}}
            tag="a" onClick={() => console.log('CLICK')} >
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
    );
}

  
export default Jerome;