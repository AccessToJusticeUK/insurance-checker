import * as React from 'react';
import './App.css';

import { Answer } from 'shared-form-app';

class App extends React.Component {
  componentDidMount() {
    fetch('http://localhost:3004/insurance_providers')
      .then((response) => response.json())
      .then((json) => {
        console.log('parsed json', json);
      }).catch((err) => {
        console.log('parsing failed', err);
      });
  }

  render() {
    return (
      <div className="App">
        <Answer id="1" text="An option" example="" />
      </div>
    );
  }
}

export default App;
