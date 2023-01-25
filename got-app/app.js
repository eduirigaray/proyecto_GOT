// Welcome function load
const {welcome} = require('./helpers/inquirerEnglish')

// Node colors load
require('colors')

// Language-app-models loads
const mainEnglish = require('./languages-app-models/english-app')
const mainSpanish = require('./languages-app-models/spanish-app')

// App's main function
const presentation =  async () =>
{
	// Presentation logs
	console.log('\x1b[150;1m           [WELCOME TO GAME OF THRONES APP]             \x1b[0m '.green)
	console.log('\x1b[150;1m    [Please expand the console to fill the entire screen.]           \x1b[0m \n'.green)

	// Welcome function assigned to a variable, its returns an option
	let opt= await welcome()

	// Language selection switch clause
	switch (opt)
	{
	case 1:
		mainEnglish()
		break
	
	case 2:
		mainSpanish()
		break
	case 0:
		break
	}
}

// App execution
presentation()