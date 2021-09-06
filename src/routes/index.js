/** @format */
const express = require("express")
const router = express.Router()
const { cacheInit } = require("../middleware/cache")

// Este método  va a mostrar  el index en 7 segundo  pero solo será la primera vez, ya que usando el caché  será inmediato
router.get("/", cacheInit, (req, res) => {
	console.log("si estoy entrando ")
	setTimeout(() => {
		res.render("index")
	}, 7000)
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
