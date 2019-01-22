let expect = require('expect');
let {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', function () {
        let res = isRealString(321);
        expect(res).toBeFalsy();
    });

    it('should reject strings with only spaces', function () {
        let res = isRealString('                 ');
        expect(res).toBeFalsy();
    });

    it('should allow strings with non-space characters', function () {
        let res = isRealString('  bambala  ');
        expect(res).toBeTruthy();
    });
});
