import React from "react";
import ReactDom from "react-dom/client";
import Counter from "./components/Counter";

class Ota extends React.Component {
  constructor() {
    super();
    this.state = { son: 5, isDisplayCounter: true };
  }

  propsniOzgartir = () => {
    this.setState({ son: Math.random() });
  };
  displayniOzgartir = () => {
    this.setState({ isDisplayCounter: !this.state.isDisplayCounter });
  };
  render() {
    return (
      <>
        <h1>Ota Boshlanishi</h1>
        <button onClick={this.propsniOzgartir}>Propsni o'zgartir</button>
        <button onClick={this.displayniOzgartir}>Displayni o'zgartir</button>
        {this.state.isDisplayCounter && <Counter sonProp={this.state.son} />}
        <h1>Ota Tugashi </h1>
      </>
    );
  }
}


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Ota />);
