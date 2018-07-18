const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string value', () => {
        var testText = 12;

        var validation = isRealString(testText);

        expect(validation).toBeFalsy();
    });

    it('should reject string with only spaces', () => {
        var testText = '         ';
        var validation = isRealString(testText);

        expect(validation).toBeFalsy();

    });

    it('should allow string with non-space characters', () => {
        var testText = 'ojoij90()';
        var validation = isRealString(testText);

        expect(validation).toBeTruthy();
    });
});