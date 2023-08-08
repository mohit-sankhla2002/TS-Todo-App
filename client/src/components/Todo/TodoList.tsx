import React from 'react'
import { Todo as TD } from '../../Types/todo';
import { Box } from '@mui/material';
import Todo from '../Todo/Todo';
interface todoListProps {
    todos: TD[],
    setTodos: React.Dispatch<React.SetStateAction<TD[]>>;
}

const TodoList: React.FC<todoListProps> = ({ todos, setTodos }) => {
  return (
    <Box width={`100%`}>
        {todos.map((todo: TD, index: number) => {
            return <Todo key={index} todo={todo} setTodos={setTodos} /> 
        })}
    </Box>
  )
}

export default TodoList;