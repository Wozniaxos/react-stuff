import { createStore } from 'redux'

function todos(state = []) {
  return state;
}

export default createStore(todos, ['Use Redux'])