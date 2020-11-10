import React, { Component } from "react";

import FeaturedVideoIcon from "@material-ui/icons/FeaturedVideo";

import {
  FormControl,
  Input,
  Button,
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
  Card
} from "@material-ui/core";

class TodoList extends Component {
  createTask = item => {
    return (
      <ListItem button>
        <ListItemIcon>
          <FeaturedVideoIcon />
        </ListItemIcon>
        <ListItemText>{item.key}</ListItemText>
      </ListItem>
    );
  };
  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTask);
    return <List>{listItems}</List>;
  }
}

export default TodoList;
