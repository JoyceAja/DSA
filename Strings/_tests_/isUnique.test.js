const String = require('../isUnique');

test('It should expect true for these inputs', () => {
    expect(String.isUnique('able').toBe(true))
    expect(String.isUnique('spicy').toBe(true))
})

test('It should expect false for these inputs', () => {
    expect(String.isUnique('hello')).toBe(false)
    expect(String.isUnique('aba')).toBe(false)
    expect(String.isUnique('happen').toBe(false))
})

test('It should expect true for these inputs', () => {
    expect(String.isUnique2('able').toBe(true))
    expect(String.isUnique2('spicy').toBe(true))
})

test('It should expect false for these inputs', () => {
    expect(String.isUnique2('hello')).toBe(false)
    expect(String.isUnique2('aba')).toBe(false)
    expect(String.isUnique2('happen').toBe(false))
})