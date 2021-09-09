/** @format */

const suma = require("../src/suma")

describe("Pruebas para suma", () => {
	test("1+2 is 3", () => {
		expect(suma(1, 2)).toBe(3)
	})
	it("El resultado es   3 de 1 + 2", () => {
		expect(suma(1, 2)).toBe(3)
	})
	test("1+(-2) is -1", () => {
		expect(suma(1, -2)).toBe(-1)
	})
	test("-1+ (-2) is -3", () => {
		expect(suma(-1, -2)).toBe(-3)
	})
})
