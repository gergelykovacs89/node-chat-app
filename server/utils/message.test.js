var expect = require('expect');

var {generateMessage} = require('./message');

describe('generate message', () => {
    it('should generate the correct message object', () => {
        var from = 'gergo';
        var text = 'test message to test';
        var message = generateMessage(from, text);

        expect(message).toMatchObject({
            from: from,
            text: text
        });
        expect(typeof message.createdAt).toBe('number');
    });
});