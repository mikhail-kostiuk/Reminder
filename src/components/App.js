import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addReminder } from '../actions/reminderActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  addReminder() {
    this.props.addReminder(this.state.text);
  }

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-4">
        {reminders.map(reminder => (
          <li key={reminder.id} className="list-group-item">
            <div>{reminder.text}</div>
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
            <button className="btn btn-success" onClick={() => this.addReminder()}>
              Add Reminder
            </button>
          </div>
        </div>
        {this.renderReminders()}
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
  reminders: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    id: PropTypes.number,
  })).isRequired,
};

export default connect(mapStateToProps, { addReminder })(App);
