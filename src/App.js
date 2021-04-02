import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fullname: "",
      username: "",
      email: "",
      password: "",
    };
    this.changefullname = this.changefullname.bind(this);
    this.changeusername = this.changeusername.bind(this);
    this.changeemail = this.changeemail.bind(this);
    this.changepassword = this.changepassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    const userRegistered = {
      fullname: this.state.fullname,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };

    // per pulire la pagina
    this.setState({
      fullname: "",
      username: "",
      email: "",
      password: "",
    });
  }
  changefullname(event) {
    this.setState({
      fullname: event.target.value,
    });
  }
  changeusername(event) {
    this.setState({
      username: event.target.value,
    });
  }
  changeemail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  changepassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  render() {
    return (
      <div className="container text-center">
        <h1 className=" text-center mb-5 my-5 ">Sign up</h1>
        <div className="form-div">
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              onChange={this.changefullname}
              value={this.state.fullname}
              className="form-control form-group"
              placeholder="full name"
            />
            <input
              type="text"
              onChange={this.changeusername}
              value={this.state.username}
              className="form-control form-group"
              placeholder="username"
            />
            <input
              type="text"
              onChange={this.changeemail}
              value={this.state.email}
              className="form-control form-group"
              placeholder="email"
            />
            <input
              type="number"
              onChange={this.changepassword}
              value={this.state.password}
              className="form-control form-group"
              placeholder="password"
            />
            <input
              type="submit"
              className="btn btn-warning  "
              value="submit"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
