import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck';
import CardColumns from 'react-bootstrap/CardColumns';
import { Grid, Row, Col } from 'rsuite';
import CardActionArea from '@material-ui/core/CardActionArea';
import ReactCardFlip from 'react-card-flip';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const TaskCard = () => {
    return (
        
        <Card 
              bg='dark'
              style={{ width: '17rem', cursor: "pointer"}}>
        <CardActionArea>
            <Card.Img 
            variant="top" 
            src="https://image.freepik.com/free-vector/illustration-checklist-clipboard_53876-43946.jpg" 
        />
        <Card.Body>
            <Card.Title>TASK</Card.Title>
        </Card.Body>
        </CardActionArea>
        </Card>

    );
};

class CardTask extends React.Component {
    constructor(props) {
      super(props);
    }

    toggle = () => {
        this.setState({
          isFlipped: !this.state.isFlipped
        });
      }
  
    render() {
      return (
        <div>
            <Flippy
            flipOnClick={true}
            flipDirection={'vertical'}
            // style={FlippyStyle}
    // flipOnHover={false} // default false
    // flipOnClick={true} // default false
    // flipDirection="horizontal" // horizontal or vertical
    // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
  >
    <FrontSide
      style={{
        backgroundColor: '#41669d',
      }}
    >
      TaskCard
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#175852'}}>
      TaskCard
    </BackSide>
  </Flippy>
        </div>
      );
    }
  }

export default TaskCard;