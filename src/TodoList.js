import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({ todos }) => ({ todos })

function TodoList({ todos }) {
  return todos.map(todo => <div>{todo}</div>);
}

export default connect(mapStateToProps)(TodoList);