/** @format */

const getExpeditiousCache = require("express-expeditious")

const defaultOptions = {
	namespace: "expresscache",
	defaultTtl: "15 minutes", //para 1 minuto es  60*1000
	statusCodeExpires: {
		404: "5 minutes",
		500: 0, //1 minuto en millisegundos
	},
}
const cacheInit = getExpeditiousCache(defaultOptions)

module.exports = { cacheInit }
