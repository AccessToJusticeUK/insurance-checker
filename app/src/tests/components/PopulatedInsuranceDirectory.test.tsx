import * as React from 'react';
import * as fetchMock from 'fetch-mock';
import { mount, ReactWrapper} from 'enzyme';
import { PopulatedInsuranceDirectory } from '../../components/PopulatedInsuranceDirectory';
import { API_URL } from '../../constants';

import '../setupTests';

describe('PopulatedInsuranceDirectory', () => {
  let wrapper: ReactWrapper;

  afterEach(() => {
    fetchMock.restore;
  });

  xit('should fetch results and pass them in as props with the correct keys', async () => {
    fetchMock.get(`${API_URL}/insurance_providers`, [
      {
        "name": "AXA",
        "directory_index": "a",
        "type": "life",
        "phone_numbers": {
          "general_enquiries": "01234 567 890",
          "claims": "0800 269 622"
        }
      },
      {
        "name": "Badmiral",
        "type": "life",
        "directory_index": "b",
        "phone_numbers": {
          "general_enquiries": "01234 567 890",
          "claims": "0800 269 622"
        }
      }
    ]);

    wrapper = mount(<PopulatedInsuranceDirectory />);
    // TODO: Fix this test, failing because mounted component cannot setState without throwing error
  });
});
