var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generate location message', () => {
    it('should generate the correct location message object', () => {
        var from = 'gergo';
        var latitude = 12;
        var longitude = 34;
        var message = generateLocationMessage(from, latitude, longitude);
        var url = 'https://www.google.com/maps?q=12,34';
        expect(message).toMatchObject({
            from: from,
            url: url
        });
        expect(typeof message.createdAt).toBe('number');
    });
});