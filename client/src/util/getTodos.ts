import { Todo } from "../Types/todo";
import axios from 'axios'
export default async function getTodos(): Promise<Todo[]> {
    try {
        const response = await axios.get('http://localhost:3000/todos');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}