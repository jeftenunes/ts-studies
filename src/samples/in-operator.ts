interface Admin {
    id: string;
    role: string;
    email: string;
}

interface User {
    email: string;
}

class UserImpl implements User {
    email: string;
    
    constructor() {
        this.email = '';
    }
}

class AdminImpl implements Admin {
    id: string;
    role: string;
    email: string;

    constructor() {
        this.id = ``;
        this.role = ``;
        this.email = ``; 
    }
}

function waitsAdmin(usr: Admin | User): usr is Admin {
    return "role" in usr;
}

export { User, Admin, UserImpl, AdminImpl, waitsAdmin };