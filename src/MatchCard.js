import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import './App.css';

const FlippyStyle = {
  width: '200px',
  height: '300px',
  textAlign: 'center',
  color: '#FFF',
  fontFamily: 'sans-serif',
  fontSize: '30px',
  justifyContent: 'center'
}


const DefaultCardContents = ({ children }) => (
  <React.Fragment>
    <FrontSide
      style={{
        backgroundColor: '#363740',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <img
      variant="top"    
        src='https://urbaned.tcnj.edu/wp-content/uploads/sites/85/2019/10/placeholder-profile-1.png'
        style={{ maxWidth: '100%', maxHeight: '100%' }}
        alt='Profile Picture'
      />
      Profile Name
      <span 
        style={{
          fontSize:'12px',
          position: 'absolute',
          bottom: '10px',
          width: '100%'
        }}>
        {children}<br />
      Pronouns
      </span>
    </FrontSide>
    <BackSide
      style={{
        backgroundColor: '#363740',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
      Information about person goes here...
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

const FlippyOnHover = ({ flipDirection = 'vertical' }) => (
  <Flippy
    flipOnHover={true}
    flipDirection={flipDirection}
    style={FlippyStyle}
  >
    <DefaultCardContents>

    </DefaultCardContents>
  </Flippy>
);

const FlippyOnClick = ({ flipDirection = 'vertical' }) => (
  <Flippy
    flipOnClick={true}
    flipDirection={flipDirection}
    style={FlippyStyle}
  >
    <DefaultCardContents>
    
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
        <div style={{ display: 'flex', flex: '1 0 200px', justifyContent: 'space-evenly', 'flex-wrap': 'wrap', padding: '10px 7px 10px 7px'}}>
          <FlippyOnClick flipDirection="horizontal"/>
           <FlippyOnClick flipDirection="horizontal"/>
           <FlippyOnClick flipDirection="horizontal"/>
        </div>
        <div style={{ display: 'flex', flex: '1 0 200px', justifyContent: 'space-around', 'flex-wrap': 'wrap',padding: '10px 7px 10px 7px' }}>
          <FlippyOnClick flipDirection="horizontal"/>
          <FlippyOnClick flipDirection="horizontal"/>
           <FlippyOnClick flipDirection="horizontal"/>
        </div>
      </div>
    );
  }
}

export default MatchCard;
