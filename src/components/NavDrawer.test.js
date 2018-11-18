import React from 'react';
import { shallow, mount } from 'enzyme';
import Backdrop from '@material-ui/core/Backdrop';
import { MemoryRouter } from 'react-router-dom';
import NavDrawer from './NavDrawer';

describe('NavDrawer', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<NavDrawer isOpen closeFunc={() => {}} />);

    expect(wrapper).toMatchSnapshot();
  });
});
