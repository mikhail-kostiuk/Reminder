import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { addReminder, deleteReminder, clearReminders } from '../actions/reminderActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dueDate: '',
    };
  }

  addReminder() {
    this.props.addReminder(this.state.text, this.state.dueDate);
  }

  deleteReminder(id) {
    this.props.deleteReminder(id);
  }

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-4">
        {reminders.map(reminder => (
          <li key={reminder.id} className="list-group-item">
            <div className="list-item">
              <div>{reminder.text}</div>
              <div>
                <em>{moment(new Date(reminder.dueDate)).fromNow()}</em>
              </div>
            </div>
            <div
              className="list-item delete-button"
              onClick={() => this.deleteReminder(reminder.id)}
              onKeyDown={() => this.deleteReminder(reminder.id)}
              role="button"
              tabIndex={0}
            >
              &#x2715;
            </div>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="App">
        <div className="title">Reminder</div>
        <div className="form-inline reminder-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="I have to..."
              onChange={event => this.setState({ text: event.target.value })}
            />
            <input
              type="datetime-local"
              className="form-control"
              onChange={(event) => {
                this.setState({ dueDate: event.target.value });
              }}
            />
            <button className="btn btn-success" onClick={() => this.addReminder()}>
              Add Reminder
            </button>
          </div>
        </div>
        {this.renderReminders()}
        <div
          className="btn btn-danger"
          onClick={() => this.props.clearReminders()}
          onKeyDown={() => this.clearReminders}
          role="button"
          tabIndex={0}
        >
          Clear Reminders
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    reminders: state.reminders,
  };
}

App.propTypes = {
  addReminder: PropTypes.func.isRequired,
  deleteReminder: PropTypes.func.isRequired,
  clearReminders: PropTypes.func.isRequired,
  reminders: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    id: PropTypes.number,
  })).isRequired,
};

export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders })(App);
