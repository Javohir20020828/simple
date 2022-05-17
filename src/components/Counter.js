import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    console.log('Constructor'.toUpperCase());
    console.log('-----------');
    super(props);
    this.state = {counter: 0};
  }

  increment = () => {
    this.setState(oldingiHolat => ({counter: oldingiHolat.counter + 1}))
  }
  decrement = () => {
    this.setState(oldingiHolat => ({counter: oldingiHolat.counter - 1}))
  }

  componentDidMount() {
    console.log('COMPONENT DID MOUNT')
    console.log('-----------')
    this.counterInterval = setInterval(()=>{
      this.increment();
      console.log(this.state.counter)
    }, 1000);
  }

  componentDidUpdate() {
    console.log('COMPONENT DID UPDATE')
    console.log('-----------')
  }

  componentWillUnmount() {
    console.log('COMPONENT WILL UNMOUNT')
    console.log('-----------')
    clearInterval(this.counterInterval)
  }

  render() {
    console.log('RENDER');
    console.log('-----------');
    return (
      <>
        <h2>Bola Component</h2>
        <h3>Son prop: {this.props.sonProp}</h3>
        <h2>{this.state.counter}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </>
    )
  }
}
