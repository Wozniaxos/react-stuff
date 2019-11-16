import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import adminOnly from "./adminOnly";
import SimpleComponent from "./SimpleComponent";
import { shallow } from 'enzyme';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });


it('should render the component only when user is admin', () => {
  const AdminOnlyComponent = adminOnly(SimpleComponent);

  const user = {
    isAdmin: true
  }

  const wrapper = shallow(
    <AdminOnlyComponent user={user} />
  );
    
  expect(wrapper.html()).not.toBe(null);
});


it('should return null when user is not an admin', () => {
  const AdminOnlyComponent = adminOnly(SimpleComponent);

  const user = {
    isAdmin: false
  }

  const wrapper = shallow(
    <AdminOnlyComponent user={user} />
  );

  expect(wrapper.html()).toBe(null);
});