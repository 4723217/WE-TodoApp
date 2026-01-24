import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Todo {
    id: number
    title: string
    description: string
    completed: boolean
}


export const useTodosStore = defineStore('todos', ()=>{
    let serialId = 4

    const todos = ref<Todo[]>([
        { id: 1, title: 'Buy groceries', description: 'Get milk, bread, and eggs', completed:false},
        { id: 2, title: 'Write report', description: 'Finish the quarterly report', completed:true},
        { id: 3, title: 'Call Alice', description: 'Discuss the project', completed:false},
    ])

    const addTodo = (title: string, description: string) => {
        const newTodo: Todo = {
            id: serialId++,
            title: title,
            description: description,
            completed: false,
        }
        todos.value.push(newTodo)
    }

    const removeTodo = (id: number) => {
        todos.value = todos.value.filter(todo => todo.id !== id)
    }

    return { todos, addTodo, removeTodo }
})