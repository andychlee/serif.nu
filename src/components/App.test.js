import React from 'react';
import { shallow } from 'enzyme';
import { mockStyles } from 'util/testing';
import { MemoryRouter } from 'react-router-dom';
import { UnstyledApp, styles } from './App';

describe('App', () => {
  it('should render correctly', () => {
    const classes = mockStyles(styles);
    const wrapper = shallow(<UnstyledApp classes={classes} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders the homepage', () => {
    const classes = mockStyles(styles);
    const wrapper = shallow((
      <MemoryRouter initialEntries={['/']}>
        <UnstyledApp classes={classes} />
      </MemoryRouter>
    ));

    expect(wrapper).toMatchSnapshot();
  });

  it('should toggle navigation', () => {
    const classes = mockStyles(styles);
    const wrapper = shallow(<UnstyledApp classes={classes} />);

    wrapper.instance().toggleNav();

    expect(wrapper).toMatchSnapshot();
  });
});
