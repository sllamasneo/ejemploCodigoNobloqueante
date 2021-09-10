/** @format */
let Validator = require("validatorjs")

async function passwordValidator(req) {
	req = req.trim()
	let rules = {
		Password: [
			"regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[\u0021-\u002b\u003c-\u0040]).{8,16}$/",
		],
	}
	let menssaje =
		"La Contraseña debe tener, al menos un dígito, minúscula, mayúscula y un carácter no alfanumérico."
	let validation = new Validator({ Password: req }, rules)
	if (validation.passes() && req.length != 0) {
		return true
	} else {
		throw menssaje
		//return false
	}
}
module.exports = passwordValidator
