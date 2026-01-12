const sum = require("./sum");

test("adds numbers correctly", ()=>{
    expect(sum(1, 2)).toBe(3);
    expect(sum(5, 7)).toBe(12);
    expect(sum(100, 200)).toBe(300);
    expect(sum(43,37)).toBe(80);
    expect(sum(56,44)).toBe(100);
})