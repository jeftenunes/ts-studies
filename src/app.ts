import Library from './samples/strict-property-initialization';
import { Action, ListNode, ActionIterator } from './samples/custom-data-structures';
import { UserImpl, waitsAdmin, AdminImpl } from './samples/in-operator';

console.log(`TS course`);
console.log('Null check and strict property initialization sample');
//Null check and strict property initialization

const library = new Library();
console.log(library);

const shortTitles = library.titles.filter(f => f.length <= 5);
console.log(shortTitles);

console.log('"In" operator');
//In operator
//typeOfUsr({test: 'test'}); //this doesn't compile

console.log(waitsAdmin(new UserImpl())); //false
console.log(waitsAdmin(new AdminImpl()));

let action1 = { type: 'LOGIN' };
let action2 = { type: 'LOAD_POSTS' };
let action3 = { type: 'DISPLAY_POSTS' };
let action4 = { type: 'LOGOUT' };

let actionNode1: ListNode<Action> = {
    value: action1,
    next: null,
    prev: null
};

let actionNode2: ListNode<Action> = {
    next: null,
    value: action2,
    prev: actionNode1
};

actionNode1.next = actionNode2;

let actionNode3: ListNode<Action> = {
    next: null,
    value: action3,
    prev: actionNode2,
};

actionNode2.next = actionNode3;

let actionNode4: ListNode<Action> = {
    next: null,
    value: action4,
    prev: actionNode3,
};

actionNode3.next = actionNode4;

const actionList = new ActionIterator(actionNode4);

console.log(actionList);
for(let action of actionList) {
    console.log(action.type);
}