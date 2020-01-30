import React from "react";

//Components
import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
    
    state = {
         name: "Kayla",
    };

  render() {
    return (
      <div>
        <Header  />
        <Footer />
      </div>
    );
  }
}