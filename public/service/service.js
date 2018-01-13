import request from 'superagent';

import Constants from '../constants';

class Service {

  // fetch user books associated with a specific user
  fetchUserBooks() {
    request
    .post(Constants.API_BOOK_FETCH)
    .send()
    .end()
  }
}

export default new Service();
