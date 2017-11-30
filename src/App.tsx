import * as React from 'react';
import './App.css';
import { PagePreamble, PagePreambleSection } from 'shared-form-app';

import { PopulatedInsuranceDirectory } from './components/PopulatedInsuranceDirectory';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <div>
            <PagePreamble>
              <PagePreambleSection>
                <p><span className="text-large">You may already have legal insurance that you did not know about!</span></p>
                <p>This page will walk you through the most likely sources of LEI (Legal Expenses Insurance) that
                            are often bundled with your existing financial products.</p>
                <p>Having funds to cover your legal expenses will ensure your problem gets priority and resolved quickly.</p>
              </PagePreambleSection>
              <PagePreambleSection>
                <p>Before you start it may be helpful to have any paperwork regarding your bank accounts,
                                credit cards and insurance to hand.</p>
              </PagePreambleSection>
            </PagePreamble>
          </div>
          <PopulatedInsuranceDirectory insuranceType="life" />
      </div>
    );
  }
}

export default App;
