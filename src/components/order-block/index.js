import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OrderBlock extends Component {
  render() {
	return (
	  <div>
	  	<Link to="/order">
			<div className="list-group-item">
				<h4 className="list-group-item-heading">Coca-cola promo</h4>
				<div className="alert alert-success" role="alert">1 новый комментарий</div>
			</div>
		</Link>
	  </div>
	);
  }
}

export default OrderBlock;