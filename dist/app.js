"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const strict_property_initialization_1 = __importDefault(require("./samples/strict-property-initialization"));
const custom_data_structures_1 = require("./samples/custom-data-structures");
const in_operator_1 = require("./samples/in-operator");
const services_1 = require("./samples/services");
console.log(`TS course`);
console.log('Null check and strict property initialization sample');
//Null check and strict property initialization
const library = new strict_property_initialization_1.default();
console.log(library);
const shortTitles = library.titles.filter(f => f.length <= 5);
console.log(shortTitles);
console.log('"In" operator');
//In operator
//typeOfUsr({test: 'test'}); //this doesn't compile
console.log(in_operator_1.waitsAdmin(new in_operator_1.UserImpl())); //false
console.log(in_operator_1.waitsAdmin(new in_operator_1.AdminImpl()));
let action1 = { type: 'LOGIN' };
let action2 = { type: 'LOAD_POSTS' };
let action3 = { type: 'DISPLAY_POSTS' };
let action4 = { type: 'LOGOUT' };
let actionNode1 = {
    value: action1,
    next: null,
    prev: null
};
let actionNode2 = {
    next: null,
    value: action2,
    prev: actionNode1
};
actionNode1.next = actionNode2;
let actionNode3 = {
    next: null,
    value: action3,
    prev: actionNode2,
};
actionNode2.next = actionNode3;
let actionNode4 = {
    next: null,
    value: action4,
    prev: actionNode3,
};
actionNode3.next = actionNode4;
const actionList = new custom_data_structures_1.ActionIterator(actionNode4);
console.log(actionList);
for (let action of actionList) {
    console.log(action.type);
}
const todoService = new services_1.TodoService();
todoService
    .todos
    .then(todo => console.log(todo));
//# sourceMappingURL=app.js.map