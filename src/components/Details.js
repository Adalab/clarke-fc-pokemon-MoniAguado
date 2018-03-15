import React from 'react';

class Details extends React.Component{
  render(){
    return(
      <p onChange={this.props.handleClick}>Aloha!</p>
    )
  }
}

export default Details;
