/** @format */
const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
	console.log("si estoy entrando ")
	res.render("index")
})

router.post("/update", (req, res) => {
	//console.log(req.file)
	//res.send("uploader")
	res.render("update")
})
/*
router.get("*", (req, res) => {
	res.end("Ruta no encontrada")
})
*/
module.exports = router
