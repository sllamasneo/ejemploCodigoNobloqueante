/** @format */
"use strict"
const express = require("express")
const morgan = require("morgan")
const path = require("path")
const multer = require("multer")
const app = express()

const PORT = process.env.PORT || 3000

//
app.set("views", path.join(__dirname, "views"))

//rutas requeridas
const rutas = require("./routes")
//settings
app.set("view engine", "ejs")
app.set("appName", "MI app rendimientos")

//middleware

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname + "/public/images"))
	},
	filename: function (req, file, cb) {
		//const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9)
		cb(null, file.originalname)
	},
})
const update = multer({
	storage,
	dest: path.join(__dirname + "/public/images"),
}).single("image")

app.use(update)
app.use(morgan("dev"))

//rutas
app.use(rutas)

//static filtes
app.use(express.static(path.join(__dirname + "/public/images")))

app.listen(PORT, () => {
	console.log(`Servidor ejecutandose en  http://localhost:${PORT}`)
	console.log("Nombre de  la App: " + app.get("appName"))
})
