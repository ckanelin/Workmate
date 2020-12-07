import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const FlippyStyle = {
  width: '250px',
  height: '350px',
  textAlign: 'center',
  color: '#4A4848',
  fontFamily: 'times new roman',
  fontSize: '30px',
  justifyContent: 'center'
}

const DefaultCardContents = ({ title, description, url, children }) => (
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
        backgroundColor: '#E8E6E6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
      {description}
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

const FlippyOnClick = ({ title, description, url, flipDirection = 'vertical' }) => (
    <Flippy
      flipOnClick={true}
      flipDirection={flipDirection}
      style={FlippyStyle}
    >
      <DefaultCardContents title={title} description={description} url={url}>
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
          <FlippyOnClick title={'Coffee'} description={'Grab a coffee with your buddy!'} url={'https://i.ibb.co/sRGXRFB/shutterstock-774748948.png'} flipDirection="horizontal"/>
          <FlippyOnClick title={'Book exchange'} description={'Share and exchange books with each other!'} url={'https://i.ibb.co/wzPXNSQ/1pbqn1.png'} flipDirection="horizontal"/>
          <FlippyOnClick title={'Tree planting'} description={'Find a tree to plant!'} url={'https://i.ibb.co/xGCp2Zt/curious-cat-under-tree-summer-2.png'} flipDirection="horizontal"/>
        </div>
        <div style={{ display: 'flex', flex: '1 0 200px', justifyContent: 'space-around', 'flex-wrap': 'wrap', 
             padding: '10px 10px'}}>
          <FlippyOnClick title={'Animal shelter'} description={'Go visit the animals and give them some love!'} url={'https://i.ibb.co/hXcJg01/kittens-in-shelter-69469.png'} flipDirection="horizontal"/>
          <FlippyOnClick title={'Soup kitchen'} description={'Volunteer at a soup kitchen!'} url={'https://i.ibb.co/NxzSJHq/Screen-Shot-2020-12-06-at-6-56-57-PM-copy.png'} flipDirection="horizontal"/>
          <FlippyOnClick title={'Shore cleanup'} description={'Save the turtles!'} url={'https://i.ibb.co/HHJG181/34-B03-A2100000578-0-image-a-49-1464350491083.png'} flipDirection="horizontal"/>
        </div>
      </div>
    );
  }
}
export default CardTask;
