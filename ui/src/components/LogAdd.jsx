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
				<form name="logAdd" class="row g-3">
					<div class="col-md-3 ">
						<div class="col-auto">
							<label for="type" class="col-form-label">Type</label>
						</div>
						<div class="col-auto">
						<input type="text" id="type" class="form-control" aria-describedby="inputType"/>
						</div>
					</div>

					<div class="col-md-3 ">
						<div class="col-auto">
							<label for="type" class="col-form-label">Reps</label>
						</div>
						<div class="col-auto">
						<input type="text" id="reps" class="form-control" aria-describedby="inputType"/>
						</div>
					</div>

					<div class="col-md-3 ">
						<div class="col-auto">
							<label for="type" class="col-form-label">Unit</label>
						</div>
						<div class="col-auto">
						<input type="text" id="unit" class="form-control" aria-describedby="inputType"/>
						</div>
					</div>

					<div class="col-md-3 ">
						<div class="col-auto">
							<label for="type" class="col-form-label">Note</label>
						</div>
						<div class="col-auto">
						<input type="text" id="note" class="form-control" aria-describedby="inputType"/>
						</div>
					</div>

					<div class="btn-group" role="group" aria-label="Basic mixed styles example">
					<button type="button" class="btn btn-success" onClick={this.handleSubmit} >Add</button>
					<button type="button" class="btn btn-warning" onClick={console.log('edit')} >Edit</button>
					<button type="button" class="btn btn-danger" onClick={console.log('delete')} >Delete</button>
					</div>
				</form>
				);
	}
}

LogAdd.propTypes = {
createLog: PropTypes.func.isRequired,
};

