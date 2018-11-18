import React from 'react';
import { shallow } from 'enzyme';
import RegalPage from './RegalPage';

describe('RegalPage', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<RegalPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
