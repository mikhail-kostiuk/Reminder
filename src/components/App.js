import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  render() {
    return (
      <div className="App">
        <div className="title">Reminder</div>
        <div className="form-inline">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="I have to..." />
          </div>
          <button className="btn btn-success">Add Reminder</button>
        </div>
      </div>
    );
  }
}

export default App;
