import React, {useState, useEffect} from 'react';
import { Box, useMediaQuery } from '@mui/material';
import getTodo from './util/getTodos'
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/Todo/TodoList';
import { Todo } from './Types/todo';
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    const getAllTodos = async () => {
      const allTodos = await getTodo();
      setTodos(allTodos);
    }
    getAllTodos();
  }, []);

  const isMobile = useMediaQuery('(max-width: 1000px)');
  return (
    <Box
      style={{
        paddingLeft: `${isMobile ? "1rem" : "200px"}`,
        paddingRight: `${isMobile ? "1rem" : "200px"}`,
        paddingTop: `${isMobile ? "1rem" : "100px"}`,
        display: "flex",
        gap: "30px",
        flexDirection: `${isMobile ? "column" : "row"}`,
      }}
    >
      <TodoForm setTodos={setTodos}/>
      <TodoList setTodos={setTodos} todos={todos} />
    </Box>
  );
}

export default App;