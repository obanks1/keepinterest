import React, {Component} from 'react'

import {FormControl, Input, Button} from '@material-ui/core'

class TodoAdder extends Component {
  render() {
    return (
      <FormControl margin="normal">
        <form onSubmit={this.props.addItem}>
          <Input placeholder="Portfolio Item"
            style={{margin: '15px'}} 
            onChange={this.props.handleInput}
          />
          <Button color="primary" variant="contained" type="submit" >Add Task</Button>
        </form>
      </FormControl>
    )
  }
}

export default TodoAdder