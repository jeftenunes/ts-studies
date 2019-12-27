import { Add, TodoActions } from "./todos.actions";

interface ITodoState {
    todos: string[];
}

function todoReducer(action: TodoActions, state: ITodoState = { todos: [] }): ITodoState {
    switch(action.type) {
        case 'Add': {
            return {
                todos: [...state.todos, action.payload]
            }
        }
        case 'RemoveAll': {
            return {
                todos: []
            }
        }
    }
}

