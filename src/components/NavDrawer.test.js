import React from 'react';
import { shallow, mount } from 'enzyme';
import NavDrawer from './NavDrawer';

describe('NavDrawer', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<NavDrawer isOpen closeFunc={() => {}} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should close when requested', () => {
    const callback = jest.fn();

    const wrapper = mount(<NavDrawer isOpen closeFunc={callback} />);
    wrapper.find('Backdrop').simulate('click');

    expect(callback).toHaveBeenCalled();
  });
});
