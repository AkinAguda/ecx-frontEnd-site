import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { NavLink } from 'react-router-dom';
import SideDrawer from '.';

configure({ adapter: new Adapter() });

describe('<SideDrawer />', () => {
  it('Should show side drawer', () => {
    const wrapper = shallow(<SideDrawer />);
    expect(wrapper.find(NavLink));
  });
});
