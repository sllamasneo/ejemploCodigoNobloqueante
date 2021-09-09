/** @format */

test("2+2 es 4", () => {
	expect(2 + 2).toBe(4)
})

test("Objetos rspuesta ", () => {
	const data = { nombre: "salvador_llamas" }
	const data2 = { nombre: "salvador" }
	expect(data).toEqual({ nombre: "salvador_llamas" })
	expect(data).not.toEqual(data2)
})
