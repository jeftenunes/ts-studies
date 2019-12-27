"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Add {
    constructor(payload) {
        this.payload = payload;
        this.type = 'Add';
    }
}
exports.Add = Add;
class RemoveAll {
    constructor(payload) {
        this.payload = payload;
        this.type = 'RemoveAll';
    }
}
exports.RemoveAll = RemoveAll;
//# sourceMappingURL=todos.actions.js.map