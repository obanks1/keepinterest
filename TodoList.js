import React, { Component } from "react";

import FeaturedVideoIcon from "@material-ui/icons/FeaturedVideo";

import ArtTrackIcon from "@material-ui/icons/ArtTrack";

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
      <ListItem button onClick={() => this.props.remove(item.key)}>
        <ListItemIcon>
          {item.text.includes("design") ? (
            <ArtTrackIcon />
          ) : (
            <FeaturedVideoIcon />
          )}
        </ListItemIcon>
        <ListItemText>{item.text}</ListItemText>
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
