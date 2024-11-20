const axios = require('axios')
const mapArrToStrings = require('../mapArrToStrings/mapArrToStrings')

const getData = async () => {
	try {
		const res = axios.get(`https://jsonplaceholder.typicode.com/users`)
		const usersId = res.data.map(item => item.id)

		return mapArrToStrings(usersId)
	} catch (err) {
		console.log(err)
	}
}

module.exports = getData
