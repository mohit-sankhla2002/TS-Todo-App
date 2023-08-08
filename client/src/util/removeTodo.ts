import axios from 'axios';


export default async function removeTodo(id: number | string): Promise<void> {
    try {
        const response = await axios.delete(`http://localhost:3000/todos/${id}`);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}