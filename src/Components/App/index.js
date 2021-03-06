import React from 'react';
import Oberland from './oberland.jpg';
import './App.css';
import Masthead from '@ta-interaktiv/react-masthead';
import '@ta-interaktiv/semantic-ui/semantic/dist/components/reset.css';
import '@ta-interaktiv/semantic-ui/semantic/dist/components/site.css';


import Stream from '../Stream';
import Footer from '../Footer';


function App() {
  return (
    <div className="App blue">
      <Masthead articleId='25358778'/>
      <div className="wrapper">
        <img className = "headerImage" src={Oberland} alt="Oberland"></img>
        <h1>Das war<br/>2019</h1>
        <div className="lead">Der Jahresrückblick für das Berner Oberland</div>
        <Stream />
        <Footer />
      </div>
    </div>
  );
}

export default App;
