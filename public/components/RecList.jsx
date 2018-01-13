import React from 'react';
import NewBook from './NewBook';
import * as initialState from '../initialState';

import Service from '../service/service';

export default class RecList extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    // get the tasks for the user that is registered
    Service.fetchUserBooks();
  }

  render() {
    var store = this.props.store;
    return (
      <div id="readbooks-list">
        {
          this.state.readBooks.map(function(book, index) {
            return <Book key={index} index={index} title={book.title} review={book.review} rating={book.rating}/>
          })
        }
        {/* input field for new book*/}
        <NewBook />
      </div>
    )
  }
}
