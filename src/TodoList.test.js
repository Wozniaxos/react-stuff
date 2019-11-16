import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import React from 'react';
import TodoList from './todoList';
import { Provider } from 'react-redux';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore([]);

it('should render no items when no todos in the store', () => {
  const store = mockStore({ todos: [] })

  const wrapper = shallow(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );

  expect(wrapper.html()).toBe('');
});


it('should render items in divs when todos are in the store', () => {
  const store = mockStore({ todos: ['first todo', 'second todo'] })

  const wrapper = shallow(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );

  expect(wrapper.html()).toBe('<div>first todo</div><div>second todo</div>');
});