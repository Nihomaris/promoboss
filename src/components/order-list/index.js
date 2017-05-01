import React, { Component } from 'react';
import './order-list.css'

import OrderBlock from '../order-block'

class OrderList extends Component {
  render() {
	return (
	  <div>
			<div className="col-md-3 panel panel-default">
				<div className="panel-heading">Новые акции</div>
					<div className="panel-body">
					<div className="list-group">
						<OrderBlock />
					</div>
				</div>
			</div>
			<div className="col-md-3 panel panel-info">
				<div className="panel-heading">Акции в работе</div>
					<div className="panel-body">
					<div className="list-group">
						<OrderBlock />
					</div>
				</div>
			</div>
			<div className="col-md-3 panel panel-warning">
				<div className="panel-heading">Завершенные акции</div>
					<div className="panel-body">
					<div className="list-group">
						пусто
					</div>
				</div>
			</div>
			<div className="col-md-3 panel panel-danger">
				<div className="panel-heading">Отмененные акции</div>
					<div className="panel-body">
					<div className="list-group">
						пусто
					</div>
					</div>
			</div>
		</div>
	);
  }
}

export default OrderList;