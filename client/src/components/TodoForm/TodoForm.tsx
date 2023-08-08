import { Button, TextField, Paper, Typography } from '@mui/material';
import React, { useState } from 'react'
import createTodo from '../../util/createTodo';
import { Todo as TD } from '../../Types/todo';
interface TodoFormProps {
  setTodos: React.Dispatch<React.SetStateAction<TD[]>>;
}

const TodoForm: React.FC<TodoFormProps> = ({setTodos}) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const createTodoHandler = async () => {
    if (title === '' || description === '') return;
    const td = await createTodo(title, description);
    setTodos((prevTodos: TD[]) => [...prevTodos, td]);
  }

  return (
    <Paper
      elevation={6}
      variant="elevation"
      style={{
        display: "flex",
        flexDirection: `column`,
        gap: '20px',
        maxWidth: '500px',
        minWidth: '300px',
        padding: '20px',
        justifyContent: 'center',
        maxHeight: '300px',
      }}
    >
      <Typography fontSize={30} fontWeight={`bold`}>Create Todo</Typography>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button 
        variant="outlined" 
        style={{
          padding: '10px'
        }}
        onClick={createTodoHandler}
      >Create Todo</Button>
    </Paper>
  );
}

export default TodoForm;