import * as React from 'react';
import './App.css';

import { Answer, QuestionPanel } from 'shared-form-app';

class App extends React.Component {
  render() {

    return (
      <div className="App">
        <QuestionPanel question="a question???" />
        <Answer id="1" text="Some text here" example="" />
      </div>
    );
  }
}

export default App;
