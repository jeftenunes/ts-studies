import fetch from 'node-fetch';

export interface ITodo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
}

function GetTodos(target: any, name: string) {
    const init = () => {
        return fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json());
    }

    Object.defineProperty(target, name, {
        get: function() {
            return init();
        }
    });
}

export class TodoService {
    @GetTodos
    todos: Promise<ITodo[]>;
}