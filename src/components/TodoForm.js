import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import { ADD_TODO} from '../queries/queries';



class TodoForm extends Component {
  constructor(){
    super();
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({value: e.target.value});
  }
  handleSubmit(e){
   const { addTodoItem } = this.props;
    e.preventDefault();
    if (!this.state.value.trim()) {
      return;
    }
    addTodoItem({ variables: { text: this.state.value } });
    this.setState({value: ''})

  };
  render() {
    return (
      <div>
        <form onSubmit={(e) => {this.handleSubmit(e)}}>
          <input onChange={this.handleChange} value={this.state.value}/>
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}
export default compose(
    graphql(ADD_TODO, {name: "addTodoItem"}),
)(TodoForm);
