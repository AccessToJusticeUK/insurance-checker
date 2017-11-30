import * as React from 'react';
import { API_URL } from '../constants';
import { TabbedDirectory } from 'shared-form-app';

export const withInsuranceData = (WrappedComponent: typeof TabbedDirectory) => {
  return class extends React.Component<any, any> {

    constructor(props: any) {
      super(props);
      this.state = {
          results: []
      };
    }

    componentDidMount() {
      console.log("env: " + process.env.NODE_ENV)
      const apiUrl: string = this.props.insuranceType ?
        `${API_URL}/insurance_providers?type_like=${this.props.insuranceType}` :
        `${API_URL}/insurance_providers`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((response) => {
          return response.map(({directory_index, name}: {directory_index: string, name: string}) => (
            { directory_index, name }
          ));
        })
        .then((results) => this.setState({results}))
        .catch((err) => {
          console.log('Fetching insurance providers failed...', err);
        });
    }

    render() {
      const formattedInsuranceType = this.props.insuranceType ? `${this.props.insuranceType} ` : '';
      const question = `Who supplies your ${formattedInsuranceType}insurance?`;

      return (
        <WrappedComponent
          {...this.props}
          results={this.state.results}
          question={question}
          defaultTabId="a"
        />
      );
    }
  };
};
