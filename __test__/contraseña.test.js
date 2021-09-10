/** @format */

const pass = require("../src/contraseña")

const contraseña = "SalvadorLL"

describe("Test de la caontrseña -- " + contraseña, () => {
	test("No tiene datos null", () => {
		expect(contraseña).not.toBeNull()
	})
	test("No tiene espacios en blanco", () => {
		expect(contraseña).toMatch(/^(?!\s)/)
	})
	test("Contiene almenos una mayuscula  " + contraseña, () => {
		expect(contraseña).toMatch(/^(?=.*?[A-Z])/)
	})
	test("Contiene  carácters no alfanumérico  = " + contraseña, () => {
		expect(contraseña).toMatch(/^(?=.*[\u0021-\u002b\u003c-\u0040])/)
	})
	test("Contiene al menos un dígito = " + contraseña, () => {
		expect(contraseña).toMatch(/^(?=.*?[0-9])/)
	})
	describe("Debe ser mayor igual a 8 y menor igual a 16", () => {
		test("La longitud debe ser menora a <=16 " + contraseña, () => {
			expect(contraseña.length).toBeLessThanOrEqual(16)
		})
		test("La longitud debe ser mayor a >=8 " + contraseña, () => {
			expect(contraseña.length).toBeGreaterThanOrEqual(8)
		})
	})
})
describe("Estado de la contraseña", () => {
	it(" " + contraseña, async () => {
		expect.assertions(1)
		try {
			let respuesta = await pass(contraseña)
			expect(respuesta).toBe(true)
		} catch (e) {
			expect(e).toBeNull()
		}
	})
})
