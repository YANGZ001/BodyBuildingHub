import React from 'react';
import PropTypes from 'prop-types';

export default class LogDelete extends React.Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const form = document.forms.logDelete;
		const id = form.id.value;
		console.log("Id = " + id + " type = " + typeof id);
		const { deleteLog } = this.props;
		deleteLog(id);
		//form.id.value = '';
	}

	render() {
		return (
				<form name="logDelete" class="row g-3" onSubmit={this.handleSubmit}>
					<div class="input-group mb-3">
						<span class="input-group-text" id="basic-addon1">id</span>
						<input type='number' name="id" class="form-control" aria-label="id" aria-describedby="basic-addon1"/>
					</div>
					<button type="submit" class="btn btn-primary">Confirm</button>
				</form>
				);
	}
}

LogDelete.propTypes = {
deleteLog: PropTypes.func.isRequired,
};

