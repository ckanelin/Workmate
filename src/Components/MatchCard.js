import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const FlippyStyle = {
  width: '250px',
  height: '350px',
  textAlign: 'center',
  color: '#4A4848',
  fontFamily: 'calibri',
  fontSize: '30px',
  justifyContent: 'center'
}


const DefaultCardContents = ({ url, name, pronouns, children }) => (
  <React.Fragment>
    <FrontSide
      style={{
        backgroundColor: '#E8E6E6',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <img
      variant="top"    
        src={url}
        style={{ maxWidth: '100%', maxHeight: '100%' }}
        alt='Profile Picture'
      />
      {name}
      <span 
        style={{
          fontSize:'12px',
          position: 'absolute',
          bottom: '10px',
          width: '100%'
        }}>
        {children}<br />
      {pronouns}
      </span>
    </FrontSide>
    <BackSide
      style={{
        backgroundColor: '#E8E6E6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
      We love our students {'<3'}
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

const FlippyOnClick = ({ url, name, pronouns, flipDirection = 'vertical' }) => (
  <Flippy
    flipOnClick={true}
    flipDirection={flipDirection}
    style={FlippyStyle}
  >
    <DefaultCardContents name={name} pronouns={pronouns} url={url}>
    
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

class MatchCard extends Component {
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
          <FlippyOnClick url={'https://picsum.photos/501'} 
                        name={'Petrice'} 
                        pronouns={'He/His'} 
                        flipDirection="horizontal"/>
           <FlippyOnClick name={'Paul Karter'} 
                        url={'https://picsum.photos/502'}
                        pronouns={'He/His'} 
                        flipDirection="horizontal"/>
           <FlippyOnClick name={'Kerrina M.'} 
                        url={'https://picsum.photos/499'}
                        pronouns={'She/Hers'} 
                        flipDirection="horizontal"/>
        </div>
        <div style={{ display: 'flex', flex: '1 0 200px', justifyContent: 'space-around', 'flex-wrap': 'wrap', 
             padding: '10px 10px'}}>
          <FlippyOnClick name={'Steeve'} 
                          url={'https://picsum.photos/503'}
                          pronouns={'He/His'} 
                          flipDirection="horizontal"/>
          <FlippyOnClick name={'Oh No Santa'} 
                          url={'https://picsum.photos/498'}
                          pronouns={'He/His'} 
                          flipDirection="horizontal"/>
           <FlippyOnClick name={'Grejor'}  
                          url={'https://picsum.photos/497'}
                          pronouns={'He/His'} 
                          flipDirection="horizontal"/>
        </div>
      </div>
    );
  }
}

export default MatchCard;
