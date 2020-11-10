import React, { Component } from "react";
import ReactDOM from "react-dom";

import TopBar from "./TopBar";
import TodoAdder from "./TodoAdder";
import TodoList from "./TodoList";

import { Paper } from "@material-ui/core";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: ""
      }
    };
  }
  handleInput = event => {
    const currentItem = {
      text: event.target.value,
      key: Date.now()
    };
    this.setState({ currentItem });
  };
  addItem = event => {
    event.preventDefault();
    const newItem = this.state.currentItem;
    const items = [...this.state.items, newItem];
    this.setState({ items });
  };

  render() {
    return (
      <div>
        <Paper>
          <TopBar />
          <TodoAdder addItem={this.addItem} handleInput={this.handleInput} />
          <TodoList entries={this.state.items} />
        </Paper>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
