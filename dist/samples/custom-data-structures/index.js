"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ActionIterator {
    constructor(_currentActionNode) {
        this._currentActionNode = _currentActionNode;
    }
    [Symbol.iterator]() {
        return this;
    }
    throw(e) {
        throw new Error("Method not implemented.");
    }
    next() {
        //This method should:
        //1. move through each item in the list
        //2. return each item
        const curr = this._currentActionNode;
        if (!curr || !curr.value)
            return { value: null, done: true };
        this._currentActionNode = curr.prev;
        return { value: curr.value, done: false };
    }
}
exports.ActionIterator = ActionIterator;
//# sourceMappingURL=index.js.map