import React from 'react';

class Details extends React.Component{
  render(){
    return(
      <div>
        <p onClick={this.props.handleClick}>Aloha!</p>
      	<button className="button button--closeDetails" onClick={this.props.closeDetails}></button>
      </div>
    )
  }
}

export default Details;
