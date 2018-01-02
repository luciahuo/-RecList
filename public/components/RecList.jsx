import React from 'react';
import NewBook from './NewBook';
import * as initialState from '../initialState';

export default class RecList extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.addToList = this.addToList.bind(this);
  }

  componentDidMount() {
    // rerender the component whenever there is a change to the state of the page
    this.props.store.subscribe(function () {
      this.setState(this.props.store.getState());
    }.bind(this));
  }

  // add to the list of books
  addToList() {

  }

  render() {
    var store = this.props.store;
    return (
      <div id="readbooks-list">
        {
          this.state.readBooks.map(function(task, index) {
            return <Book key={index} index={index} title={task.title} review={task.review}
          })
        }
        {/* input field for new book*/}
        <NewBook />
      </div>
    )
  }
}
