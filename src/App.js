import logo from './logo.svg';
import './App.css';
import ProfileCard from './Profile-Card';
import MatchCard from './MatchCard';
import React from 'react';
import Feedback from './Feedback';




function App() {
  return (
      <header className="App-header">
         <MatchCard/>
         <Feedback/>
      </header>
      
  );
};

export default App;
