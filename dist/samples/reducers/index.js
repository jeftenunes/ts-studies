"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function todoReducer(action, state = { todos: [] }) {
    switch (action.type) {
        case 'Add': {
            return {
                todos: [...state.todos, action.payload]
            };
        }
        case 'RemoveAll': {
            return {
                todos: []
            };
        }
    }
}
//# sourceMappingURL=index.js.map