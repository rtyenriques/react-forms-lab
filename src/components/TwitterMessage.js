// import React from "react";
// // import App from "../App.js"


// class TwitterMessage extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       // message: "",
//       counter: 2
//     };
//   }

//   handleChange = (e) => {
//     this.setState({
//       message: e.target.value,
//       counter: this.state.counter -=1
//     })
//   }

//   render() {
 
//     console.log(this.state)
//     return (
//       <div>
//         <strong>Your message:</strong>
//         <input type="text"
//           name="message"
//           id="message"
//           onChange={e => this.handleChange(e)}
//           value={this.props.maxChars} 
//           />
        
//       </div>
//     );
//   }
// }

// export default TwitterMessage;

import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      value: '',
    };
  }

  handleChange(event){
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <p>You have got {this.props.maxChars - this.state.value.length} characters remaining. </p>
      </div>
    );
  }
}