import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from '@mui/material'
import { Todo as TD } from '../../Types/todo';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import removeTodoFromDB from '../../util/removeTodo';
interface todoProps {
  todo: TD,
  setTodos: React.Dispatch<React.SetStateAction<TD[]>>;
}

const Todo: React.FC<todoProps> = ({ todo, setTodos }) => {
  const removeTodo = async () => {
    setTodos((prev) => {
      return prev.filter(td => td.id !== todo.id);
    });
    await removeTodoFromDB(todo.id);
  }
  return (
    <Accordion
      style={{
        width: "100%",
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography fontSize={25} fontWeight={`bold`}>{todo.title}</Typography>
      </AccordionSummary>
      <AccordionDetails style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Typography>{todo.description}</Typography>
        <Button variant='contained' color='error' onClick={removeTodo}>Done</Button>
      </AccordionDetails>
    </Accordion>
  );
}

export default Todo;