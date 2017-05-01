import React, { Component } from 'react';

class OrderDetail extends Component {
  render() {
	return (
	  <div>
		  <div className="container-fluid archive">
		  <div className="row">
			  <div className="col-md-3">
			  	<h2>Заказ #31234</h2>
			  </div>
			  <div className="col-md-9 form-container">
			  	<form>
			  	  <div className="row">
			  	    <div className="form-group col-md-6">
			  	      <label>Где раздавать?</label>
			  	      <input type="text" className="form-control" placeholder="Адрес точки"></input>
			  	      <p className="help-block">Example block-level help text here.</p>
			  	    </div>
			  	    <div className="form-group col-md-6">
			  	      <label>Где забрать листовки</label>
			  	      <input type="text" className="form-control" placeholder="Адрес выдачи"></input>
			  	    </div>
			  	  </div>
			  	  <div className="row">
				  	  <div className="form-group col-md-3">
				  	    <label>Начало работы</label>
				  	    <input type="text" className="form-control" placeholder="12:00"></input>
				  	  </div>
				  	  <div className="form-group col-md-3">
				  	  	<label>&nbsp;</label>
				  	    <input type="text" className="form-control" placeholder="12/09/2025"></input>
				  	  </div>
				  	  <div className="form-group col-md-3">
				  	    <label>Конец работы</label>
				  	    <input type="text" className="form-control" placeholder="18:00"></input>
				  	  </div>
				  	  <div className="form-group col-md-3">
				  	  	<label>&nbsp;</label>
				  	    <input type="text" className="form-control" placeholder="12/09/2025"></input>
				  	  </div>
				  </div>
			  	  <div className="row">
			  	  <div className="form-group col-md-3">
			  	    <label>Кол-во промоутеров</label>
			  	    <select className="form-control">
			  	      <option>1</option>
			  	      <option>2</option>
			  	      <option>3</option>
			  	      <option>4</option>
			  	      <option>5</option>
			  	    </select>
			  	  </div>
			  	  </div>
			  	  <div className="form-horizontal">
				  	  <div className="form-group">
				  	    <label className="col-sm-2 control-label">Сумма:</label>
				  	    <div className="col-sm-10">
				  	      <p className="form-control-static">36.000.000р</p>
				  	    </div>
				  	  </div>
			  	  </div>
			  	  <button className="btn btn-default">Cancel</button>
			  	  <button className="btn btn-success">Save</button>
			  	</form>
			  </div>
		  </div>
		  </div>
	  </div>
	);
  }
}

export default OrderDetail;