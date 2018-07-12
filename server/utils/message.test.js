var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {

        
        var from = 'joel@joel.com';
        var text = 'test message';
        var message = generateMessage(from, text);
        
        expect(message.createdAt).toBeA('number');
        expect(message.from).toInclude({from, text});

        
        //store res in variable
        //asset from matches
        //asert text matches
        //assert that createdat value is a number toBeA('number)
    });
});