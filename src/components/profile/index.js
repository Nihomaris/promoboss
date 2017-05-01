import React, { Component } from 'react';
import './profile.css'

class Profile extends Component {
  render() {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-3">
					<h2>Edit profile</h2>
				</div>
				<div className="col-md-9 form-container">
					<form>
					  <div className="row">
					    <div className="form-group col-md-6">
					      <label htmlFor="exampleInputEmail1">First name</label>
					      <input type="text" className="form-control" placeholder="First name"></input>
					    </div>
					    <div className="form-group col-md-6">
					      <label htmlFor="exampleInputEmail1">Last name</label>
					      <input type="text" className="form-control" placeholder="Last name"></input>
					    </div>
					  </div>
					  <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Email address</label>
					    <input type="email" className="form-control" placeholder="Email"></input>
					    <p className="help-block">Example block-level help text here.</p>
					  </div>
					  <div className="form-group">
					    <label htmlFor="exampleInputPassword1">Password</label>
					    <input type="text" className="form-control" placeholder="Password"></input>
					  </div>
					  <div className="form-group">
					    <label htmlFor="exampleInputPassword1">Repeat Password</label>
					    <input type="text" className="form-control" placeholder="Repeat Password"></input>
					  </div>
		
					  <button type="submit" className="btn btn-default">Cancel</button>
					  <button type="submit" className="btn btn-success">Save</button>
					</form>
				</div>
			</div>
		</div>
	);
  }
}

export default Profile;
