import React from 'react';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import * as actions from '../state/actions';
import { withPlugins } from '../extend';


export class TodoEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      text: '',
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  handleUserInput(ev) {
    this.setState({ user: ev.target.value });
  }

  handleTextInput(ev) {
    this.setState({ text: ev.target.value });
  }

  handleAddClick(ev) {
    this.props.addTodoItem(
      this.state.user,
      this.state.text,
      new Date().toLocaleTimeString(),
    );
  }

  render() {
    return (
      <Paper style={{ padding: "24px 24px" }}>
        <Grid container direction="column" spacing={24}>
          <Grid item>
            <Typography variant="h5">
              Add Todos
            </Typography>
          </Grid>
          <Grid item>
            <TextField label="Your name" onChange={this.handleUserInput} />
          </Grid>
          <Grid item>
            <TextField label="What to do?" multiline onChange={this.handleTextInput} />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={this.handleAddClick}>
              Add
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

const mapDispatchToProps = {
  addTodoItem: actions.addTodoItem
}

export default connect(null, mapDispatchToProps)(withPlugins(TodoEditor, 'TodoEditor'));
