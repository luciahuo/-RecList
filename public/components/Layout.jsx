import React from 'react';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    var store = this.props.store;
    return(
      <div className= 'container'>
        <RecList store={store}/>
      </div>
    )
  }
}
