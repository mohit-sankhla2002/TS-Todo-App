import axios from 'axios';
import { Todo } from '../Types/todo';

export default async function createTodo(title: string, description: string): Promise<Todo> {
    try {
        const response = await axios.post('http://localhost:3000/todos', {
            title, 
            description
        });
    
        const { data } = response;
        return data;
    } catch (error) {
        console.log(error);
    }
}