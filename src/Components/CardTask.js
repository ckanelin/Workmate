import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';


// import './App.css';

const FlippyStyle = {
  width: '250px',
  height: '350px',
  textAlign: 'center',
  color: '#FFF',
  fontFamily: 'sans-serif',
  fontSize: '30px',
  justifyContent: 'center'
}

const DefaultCardContents = ({ title, children }) => (
  <React.Fragment>
    <FrontSide
      style={{
        backgroundColor: '#41669d',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <img
        variant="top"
        src="https://image.freepik.com/free-vector/illustration-checklist-clipboard_53876-43946.jpg"
        style={{ maxWidth: '120%', maxHeight: '180%' }}
      />
      {title}
      <span 
        style={{
          fontSize:'12px',
          position: 'center',
          bottom: '10px',
          width: '100%'
        }}>
        {children}<br />
      </span>
    </FrontSide>
    <BackSide
      style={{
        backgroundColor: '#41669d',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
      DEFAULT
      <span 
        style={{
          fontSize:'12px',
          position: 'absolute',
          bottom: '10px',
          width: '100%'
        }}>
        {children}<br />
      </span>
    </BackSide>
  </React.Fragment>);

const FlippyOnClick = ({ title, text, flipDirection = 'vertical' }) => (
  <Flippy
    flipOnClick={true}
    flipDirection={flipDirection}
    style={FlippyStyle}
  >
    <DefaultCardContents title={title}>
        {text}
    </DefaultCardContents>
  </Flippy>
);

const ControlledFlippy = ({ isFlipped })  => (
  <Flippy
    flipDirection="vertical"
    isFlipped={isFlipped}
    style={FlippyStyle}
  >
    <DefaultCardContents>
      Default
    </DefaultCardContents>
  </Flippy>
);

class CardTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };

    setInterval(() => {
      this.setState({
        isFlipped: !this.state.isFlipped
      });
    }, 3000);
  }

  render() {
    return (
      <div className="App">
        <div style={{ display: 'flex', flex: '1 0 200px', justifyContent: 'space-around', 'flex-wrap': 'wrap', 
             padding: '10px 10px'}}>
          <FlippyOnClick title={'task 1'} text={'Hi'} flipDirection="horizontal"/>
          <FlippyOnClick flipDirection="horizontal"/>
          <FlippyOnClick flipDirection="horizontal"/>
        </div>
        <div style={{ display: 'flex', flex: '1 0 200px', justifyContent: 'space-around', 'flex-wrap': 'wrap', 
             padding: '10px 10px'}}>
          <FlippyOnClick flipDirection="horizontal"/>
          <FlippyOnClick flipDirection="horizontal"/>
          <FlippyOnClick flipDirection="horizontal"/>
        </div>
      </div>
    );
  }
}

export default CardTask;
