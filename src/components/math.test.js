import math from "./math";

test('Test the math functions', () => {

	//console.log ("Hello World");
	expect(math.sum(1,2)).toBe(3);
	expect(math.substract(1,2)).toBe(-1);
	expect(math.multiply(1,2)).toBe(2);
	expect(math.divide(1,2)).toBe(0.5);
});