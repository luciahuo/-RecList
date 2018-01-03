import React from 'react';
import request from 'superagent';

export default class NewBook extends React.Component {
  constructor(props) {
    super(props);

    //Set the initial state of the component
    this.state = {
      bookName: ''
    };

  }

  // change the name
  updateNewBookName(e) {
    // update the state of the newbook
    this.setState({bookName: e.target.value})
  }

  // add to the list of books
  createNewBook(bookname) {
    e.preventDefault();
    request
    .post()
    
  }

  render() {
    return (
      <div className="newbook">
        <form onChange={this.updateNewBookName} onSubmit={this.createNewBook}>
          <div className="input-group">
            <input id="new_book_name" type="text" className="newbook-input form-control" value={this.state.bookName} placeholder="New book ..."/>
            <span className="input-group-btn">
              <button className="newbook-button btn btn-outline-primary" type="submit"> + </button>
            </span>
          </div>
        </form>
      </div>
    )
  }
}
