import * as React from 'react';
import './App.css';

import { PopulatedInsuranceDirectory } from './components/PopulatedInsuranceDirectory';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <PopulatedInsuranceDirectory
          insuranceType="life" />
      </div>
    );
  }
}

export default App;
