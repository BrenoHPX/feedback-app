const axios = require('axios').default

export const respostas = []

axios
	.get(
		'https://sheets.googleapis.com/v4/spreadsheets/1Gidguorb8HsEtd_cOWFw3czGhjdDnmm9Bjow9CZR2Gg/values:batchGet?key=AIzaSyBsqkJsATIOzmpWCJ8mUyLTV5YS9m4djcQ&ranges=B1:Q20000'
	)
	.then(function (response: []) {})
