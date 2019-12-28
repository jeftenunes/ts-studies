"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
function GetTodos(target, name) {
    const init = () => {
        return node_fetch_1.default('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json());
    };
    Object.defineProperty(target, name, {
        get: function () {
            return init();
        }
    });
}
class TodoService {
}
__decorate([
    GetTodos
], TodoService.prototype, "todos", void 0);
exports.TodoService = TodoService;
//# sourceMappingURL=index.js.map