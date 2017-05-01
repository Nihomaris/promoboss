import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header'
import OrderList from './components/order-list'
import Profile from './components/profile'
import Auth from './components/auth'
import OrderDetail from './components/order-detail'
import NewOrder from './components/new-order'
import Archive from './components/archive'

class App extends Component {

  state = {
  	auth: false
  }
  
  render() {
  	if(!this.state.auth) {
  		return (
  			<Router>
  			  <div className="App">
  				<Header />
  				<div className="container app-container">
  				<div className="row">

            <Route path="/profile" component={Profile} />
  					<Route exact={true} path="/" component={OrderList} />
            <Route path="/order.create" component={NewOrder} />
            <Route path="/order" component={OrderDetail} />
  			  	<Route path="/archive" component={Archive} />
  			  	</div>
  			  	</div>
  			  </div>
  			</Router>
  		);
  	} else {
  		return (
  				<div className="App">
  					<div className="container">
    					<div className="row">
    						<Auth />
    					</div>
  					</div>
  				</div>
  			) 
  	}

  }
}

export default App;
