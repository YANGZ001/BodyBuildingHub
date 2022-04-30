import React from "react";
import PropTypes from "prop-types";

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
      number: form.number.value,
      unit: form.unit.value,
      note: form.note.value,
    };

    const { createLog } = this.props;
    createLog(log);
    form.type.value = "";
    form.reps.value = "";
    form.unit.value = "";
    form.note.value = "";
    form.number.value = "";
  }

  render() {
    return (
      <form name="logAdd" class="row g-3" onSubmit={this.handleSubmit}>
        <div class="col-md-3">
          <div class="col-auto">
            <label htmlFor="type" class="col-form-label">
              Type
            </label>
          </div>
          <div class="col-auto">
            <input
              type="text"
              id="type"
              class="form-control"
              aria-describedby="inputType"
            />
          </div>
        </div>

        <div class="col-md-2 ">
          <div class="col-auto">
            <label htmlFor="reps" class="col-form-label">
              Reps
            </label>
          </div>
          <div class="col-auto">
            <input
              type="number"
              id="reps"
              class="form-control"
              aria-describedby="inputType"
            />
          </div>
        </div>

        <div class="col-md-2 ">
          <div class="col-auto">
            <label htmlFor="number" class="col-form-label">
              Number
            </label>
          </div>
          <div class="col-auto">
            <input
              type="number"
              id="number"
              class="form-control"
              aria-describedby="inputType"
            />
          </div>
        </div>

        <div class="col-md-2 ">
          <div class="col-auto">
            <label htmlFor="type" class="col-form-label">
              Unit
            </label>
          </div>
          <div class="col-auto">
            <input
              type="text"
              id="unit"
              class="form-control"
              aria-describedby="inputType"
            />
          </div>
        </div>

        <div class="col-md-3 ">
          <div class="col-auto">
            <label htmlFor="type" class="col-form-label">
              Note
            </label>
          </div>
          <div class="col-auto">
            <input
              type="text"
              id="note"
              class="form-control"
              aria-describedby="inputType"
            />
          </div>
        </div>

        <button type="submit" class="btn btn-primary">
          Confirm
        </button>
      </form>
    );
  }
}

LogAdd.propTypes = {
  createLog: PropTypes.func.isRequired,
};
