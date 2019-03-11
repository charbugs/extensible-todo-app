import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import * as actions from '../state/actions';
import { withPlugins } from '../extend';


export const TodoFilters = props => (
  <Paper style={{ padding: "24px 24px" }}>
    <Grid container direction="column" spacing={24}>
      <Grid item>
        <Typography variant="h5">
          Filter
        </Typography>
      </Grid>
      <Grid item>
        <Button color="primary" onClick={props.showAll}>
          All
        </Button>
      </Grid>
      <Grid item>
        <Button color="primary" onClick={props.showRigby}>
          Rigby's
        </Button>
      </Grid>
      <Grid item>
        <Button color="primary" onClick={props.showMordacai} >
          Mordecai's
        </Button>
      </Grid>
    </Grid>
  </Paper>
);

const mapDispatchToProps = dispatch => ({
  showAll: () => dispatch(actions.filterTodosByRegex('user', /./)),
  showRigby: () => dispatch(actions.filterTodosByRegex('user', /Rigby/)),
  showMordacai: () => dispatch(actions.filterTodosByRegex('user', /Mordecai/)),
});

// withPlugins must be the innermost HOC to match the name of the target component
export default connect(null, mapDispatchToProps)(withPlugins(TodoFilters, 'TodoFilters'));
