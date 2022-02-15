// import React from "react";

// class LoginForm extends React.Component {
//   constructor() {
//     super();

//     this.state = {};
//   }

//   render() {
//     return (
//       <form>
//         <div>
//           <label>
//             Username
//             <input id="username" name="username" type="text" />
//           </label>
//         </div>
//         <div>
//           <label>
//             Password
//             <input id="password" name="password" type="password" />
//           </label>
//         </div>
//         <div>
//           <button type="submit">Log in</button>
//         </div>
//       </form>
//     );
//   }
// }

// export default LoginForm;

import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const username = this.state.username
    const password = this.state.password
    if (username !== "" && password !== "") {
      this.props.handleLogin({username, password})
      this.setState({
        username: '',
        password: ''
      });
    }
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}