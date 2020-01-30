import React from "react";

//Components
import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {

  render() {
      const title = "Class is In Session!";
    return (
      <div>
        <Header title = {title} />
        <Footer />
      </div>
    );
  }
}



//Showing Render of setState updating the DoM 
//escape in chrome and go to render options

// export default class Layout extends React.Component {
//     constructor(){
//       super();
//       this.state = {name: 'Kayla'};
//     }

//   render() {
//     setTimeout(() => {
//       this.setState({name:'Punky'})
//     }, 1000)
//     return (
//       <div>
//         {this.state.name}
//         <Header  />
//         <Footer />
//       </div>
//     );
//   }
// }