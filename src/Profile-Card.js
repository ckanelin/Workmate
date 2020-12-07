import React from 'react';
import CardDeck from "react-bootstrap/CardDeck";
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import { Grid, Row, Col } from 'rsuite';
import CardActionArea from '@material-ui/core/CardActionArea';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactCardFlip from 'react-card-flip';

const ProfileCard = () => {
    return (
        
 <CardDeck>

    <Col>
     <Card
            bg='dark' 
            style={{ width: '18rem' ,cursor: "pointer", flex:1}}
            tag="a" onClick={() => console.log('CLICK')}
            >
                <CardActionArea>
  <Card.Img variant="top" 
            src='https://urbaned.tcnj.edu/wp-content/uploads/sites/85/2019/10/placeholder-profile-1.png'
            alt='Profile Picture' />
  <Card.Body>
    <Card.Title>Profile Name</Card.Title>
    <Card.Text>
      Department
      Information About Person

    </Card.Text>
  </Card.Body>
  </CardActionArea>
</Card>
</Col>

</CardDeck>
    );
};

export default ProfileCard;