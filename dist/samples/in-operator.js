"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserImpl {
    constructor() {
        this.email = '';
    }
}
exports.UserImpl = UserImpl;
class AdminImpl {
    constructor() {
        this.id = ``;
        this.role = ``;
        this.email = ``;
    }
}
exports.AdminImpl = AdminImpl;
function waitsAdmin(usr) {
    return "role" in usr;
}
exports.waitsAdmin = waitsAdmin;
//# sourceMappingURL=in-operator.js.map