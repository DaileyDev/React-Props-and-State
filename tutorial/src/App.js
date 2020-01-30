import React from "react";

import Footer from "./classes/Footer";
import Header from "./classes/Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Kayla",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Header  />
        <Footer />
      </div>
    );
  }
}