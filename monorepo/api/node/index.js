const demo = require('demo')

module.exports = (req, res) => {
	demo()
	res.end(new Date().toString())
}
