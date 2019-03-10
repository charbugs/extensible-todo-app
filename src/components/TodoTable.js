import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';

import { connect } from 'react-redux';
import * as actions from '../state/actions';

export const TodoTable = props => (
  <Paper style={{ padding: "24px 24px" }}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Todo</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Date</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        { props.todos.map((todo, index) => (
          <TableRow key={index}>
            <TableCell>{todo.text}</TableCell>
            <TableCell>{todo.user}</TableCell>
            <TableCell>{todo.date}</TableCell>
            <TableCell>
              <IconButton onClick={() => props.trashTodo(todo.id)}>
                <DeleteIcon/>
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

const mapStateToProps = state => ({
  todos: state.todoFilter.map(id => state.todos[id]),
});

const mapDispatchToProps = {
  trashTodo: actions.trashTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoTable);
