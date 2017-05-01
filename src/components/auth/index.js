import React, { Component } from 'react';
import './auth.css'

class Auth extends Component {

  render() {
    return (
        <div className="col-md-4 col-md-offset-4 auth-container">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Phone number</label>
              <input type="text" className="form-control" placeholder="Phone number"></input>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="text" className="form-control" placeholder="Password"></input>
              <p className="help-block">Invalid password</p>
            </div>
          
            <button type="submit" className="btn btn-success">Log in</button>
          </form>
        </div>
      )
  }
}

export default Auth;
