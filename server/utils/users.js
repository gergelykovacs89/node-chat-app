class Users {
    constructor() {
        this.users = [];
    }

    addUser(id, name, room) {
        let user = {id, name, room};
        this.users.push(user);
        return user;
    }

    removeUser(id) {
        let userToRemove = this.getUser(id);

        if (userToRemove) {
            this.users = this.users.filter((user) => user.id !== id);
        }
        return userToRemove;
    }

    getUser(id) {
        return this.users.find((user) => user.id === id);
    }

    getUserList(room) {
        let users = this.users.filter((user) => user.room === room);
        return users.map((user) => user.name);
    }

}

module.exports = {
    Users: Users
};