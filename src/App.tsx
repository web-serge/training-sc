import React from 'react';
import cardImg from './img.png';
import './App.css';
import {Card} from "./components/card/card";
import {Button} from "./components/card/button";
import {Span} from "./components/card/SpanElement";

function App() {
  return (
    <div>
      <Card>
          <img src={cardImg} alt="img"/>
          <h1>Headline</h1>
          <Span>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Span>
          <Button type={'primary'}>See more</Button>
          <Button type='outlined'>Save</Button>
      </Card>
    </div>
  );
}

export default App;
