var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');
var from = 'joel@joel.com';
var text = 'test message';

describe('generateMessage', () => {
    it('should generate the correct message object', () => {

        
        
        var message = generateMessage(from, text);
        
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var longitude = 28.5410836;
        var latitude = -81.3692492;
        var locationMessage = generateLocationMessage(from, latitude, longitude);

        expect(locationMessage.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);
    });
});