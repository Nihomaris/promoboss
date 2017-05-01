import React, { Component } from 'react';
import './archive.css'

class Archive extends Component {
  render() {
	return (
	  <div>
	  <div className="container-fluid archive">
	  <div className="row">
		  <div className="col-md-3">
		  	<h2>Archive</h2>
		  </div>
		  <div className="col-md-9 form-container">
			<div className="table-responsive">
			  <table className="table table-bordered">
			  <thead>
			    <tr>
			      <td>#</td>
			      <td>Дата</td>
			      <td>Адрес</td>
			      <td>Промоутеры</td>
			      <td>Статус</td>
			    </tr>
			   </thead>
			   <tbody>
			    <tr className="success">
			      <td>1</td>
			      <td>01.05.2017</td>
			      <td>улица Автостроителей, 6</td>
			      <td>2 человека</td>
			      <td>Завершено</td>
			    </tr>
			    <tr className="danger">
			      <td>2</td>
			      <td>21.04.2017</td>
			      <td>улица Автостроителей, 6</td>
			      <td>1 человек</td>
			      <td>Отменено</td>
			    </tr>
			  </tbody>
			  </table>
			</div>
		  </div>
		</div>
	  </div>
	  </div>
	);
  }
}

export default Archive;