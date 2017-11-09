import * as React from 'react';
import './App.css';
import { Answer, QuestionPanel } from 'shared-form-app';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <Answer id="1" text="Some text here" example="" />
          <QuestionPanel question="a question???" />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
