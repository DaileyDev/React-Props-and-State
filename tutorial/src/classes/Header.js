import React from "react";

//Components
import Title from './Title';


export default class Header extends React.Component {
  render() {
      console.log(this.props);
    return (
      <div>
          <Title/>
      </div>
    );
  }
}
