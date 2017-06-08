const {decodeMention} = require('./helpers.js');

test('decodeMention should work well', () => {
    expect(decodeMention("hello @<==abc=>")).toBe("hello =abc");
    expect(decodeMention("hello @<==abc=> @<==xyz=>")).toBe("hello =abc =xyz");
});

