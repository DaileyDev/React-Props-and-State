import React from "react";

//Components
import Title from './Title';


export default class Header extends React.Component {
  render() {
      //console.log(this.props);
    return (
      <div>
          <Title title = {this.props.title}/>
      </div>
    );
  }
}


//Input onclick handlers
  
// import React from "react";

// import Title from "./Header/Title";

// export default class Header extends React.Component {
//   handleChange(e) {
//     const title = e.target.value;
//     this.props.changeTitle(title);
//   }

//   render() {
//     return (
//       <div>
//         <Title title={this.props.title} />
//         <input value={this.props.title} onChange={this.handleChange.bind(this)} />
//       </div>
//     );
//   }
// }