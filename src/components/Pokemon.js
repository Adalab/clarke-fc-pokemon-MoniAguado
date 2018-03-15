import React from 'react';

class Pokemon extends React.Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this)
    this.state = {
      visible : true
    }
  }

  handleClick(e){
    this.setState({
      visible : false
    })
  }
  render(){
    return(
      <div className="pokemon__container" onChange={this.state.handleClick}>
        <div className="pokemon__image--container">
          <img className="pokemon__image" src={this.props.image} alt= {this.props.name}/>
        </div>
        <div className="pokemon__data">
          <h2 className="pokemon__title"><span className="pokemon__number">Nº {this.props.id}</span>
            <span className="pokemon__name">{this.props.name}</span> </h2>
          <ul className="pokemon__types--list">
            {this.props.types.map((type, index) =>
              <li key={index} className={`pokemon__type ${type}`}>
                {type}
              </li>)}
          </ul>
        </div>
      </div>
    )
  }
}

export default Pokemon;
