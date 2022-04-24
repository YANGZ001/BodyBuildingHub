import React from 'react';
import PropTypes from 'prop-types';

export default class LogAdd extends React.Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const form = document.forms.logAdd;
		const log = {
			type: form.type.value,
			reps: form.reps.value,
			unit: form.unit.value,
			note: form.note.value,
		};
		const { createLog } = this.props;
		createLog(log);
		form.type.value = ''; form.reps.value = '';
		form.unit.value = ''; form.note.value = '';
	}

	render() {
		return (
				<div>
					<form name="logAdd" onSubmit={this.handleSubmit}>
					<input type="text" name="type" placeholder="type" />
					<input type="text" name="reps" placeholder="reps" />
					<input type="text" name="unit" placeholder="unit" />
					<input type="text" name="note" placeholder="note" />
					<button type="submit">Add</button>
					</form>
					<div class="btn-group" role="group" aria-label="Basic mixed styles example">
					<button type="button" class="btn btn-success">Add</button>
					<button type="button" class="btn btn-warning">Edit</button>
					<button type="button" class="btn btn-danger">Delete</button>
					</div>
				</div>
				);
	}
}

LogAdd.propTypes = {
createLog: PropTypes.func.isRequired,
};

