import React from 'react';
import Constants from '../constants';
import request from 'superagent';

export default class NewBook extends React.Component {
  constructor(props) {
    super(props);
    //Set the initial state of the component
    this.state = {
      bookName: '',
      review: '',
      rating: -1
    };
    this.updateNewBookName = this.updateNewBookName.bind(this);
    this.updateReview = this.updateReview.bind(this);
    this.createNewBook = this.createNewBook.bind(this);
  }

  // change the name
  updateNewBookName(e) {
    // update the state of the newbook
    this.setState({bookName: e.target.value});
  }

  // change the review
  updateReview(e) {
    // update the state of the review
    this.setState({review: e.target.value});
  }

  // add to the list of books
  createNewBook(e) {
    e.preventDefault();
    var bookname = this.state.bookName;
    var review = this.state.review;
    var rating = this.state.rating;

    // TODO
    console.log("create a new book");
  }

  render() {
    return (
      <div className="newbook">
        <form>
          <div className="input-group">
            <label for="new_book_name">Book Name: </label>
            <input onChange={this.updateNewBookName} id="new_book_name" type="text" className="newbook-input form-control" placeholder="New book ..."/>
            <label for="new_review">Review: </label>
            <input onChange={this.updateReview} id="new_review" type="text" className="newreview-input form-control" placeholder="Add a review ..."/>
            <label for="new_rating">Rating: </label>
            <input onChange={this.updateRating} id="new_rating" type="number" min="0" max="5" step="1"/>
            <span className="input-group-btn">
              <button className="newbook-button btn btn-outline-primary" type="submit"> + </button>
            </span>
          </div>
        </form>
      </div>
    )
  }
}
