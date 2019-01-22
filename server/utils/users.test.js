const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [
            {
                id: '1',
                name: 'peti',
                room: 'room1'
            },
            {
                id: '2',
                name: 'zoli',
                room: 'room2'
            },
            {
                id: '3',
                name: 'ági',
                room: 'room1'
            }
        ];
    });

    it('should add new user', function () {
        let users = new Users();
        let user = {id: '123', name: 'gergo', room: 'rooom'};
        let responseUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', function () {
        let userId = '2';
        let userRemoved = users.removeUser(userId);
        expect(userRemoved.id).toEqual(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user with nonexisting id', function () {
        let userId = '342';
        let userRemoved = users.removeUser(userId);
        expect(userRemoved).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should get a user', function () {
        let userId = '2';
        let user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not get a user with nonexisting id', function () {
        let userId = '6';
        let user = users.getUser(userId);

        expect(user).toBeFalsy();
    });

    it('should return names for the room1', function () {
        let userList = users.getUserList('room1');
        expect(userList).toEqual(['peti', 'ági']);

    });

    it('should return names for the room2', function () {
        let userList = users.getUserList('room2');
        expect(userList).toEqual(['zoli']);

    });
});