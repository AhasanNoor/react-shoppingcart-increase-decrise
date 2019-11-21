import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {
    count: 1,
    total: 35
  }

  handleDecrement = () => {
    if(this.state.count === 1){
      this.setState({
        count: 1,
        total: 35
      })
    }
    else{
      this.setState(prevState => ({
        count: this.state.count - 1,
        total: this.state.total - 35
      }))
    }
  }

  handleIncrement = () => {
    this.setState(prevState => ({
      count: this.state.count + 1,
      total: this.state.total + 35
    }))
  }

  render () {
    return(
      <div className="App">
        <div className="App-body ">
          <button onClick={this.handleDecrement}>-</button>
          <h1 className="count">{this.state.count}</h1>
          <button onClick={this.handleIncrement}>+</button>
          <h1 className="total"><i className="fa fa-shopping-cart shop" aria-hidden="true"></i>  <i className="fa fa-usd doller" aria-hidden="true"></i>{this.state.total}</h1>
        </div>
      </div>
    );
  }
}

export default App;
