/* eslint-disable no-undef */
// /got-app/test/inquirerEnglish.test.js


const inquirerEnglish = require('../helpers/inquirerEnglish')
const {assert} = require('chai')

describe('English menu inquirer test', function ()
{

	const names = inquirerEnglish.questions[0].choices.map((choice)=>(choice.name))
	
	it('Inquirer menu should has the correct options.', function()
	{
		assert.deepEqual(names, [`${'1.'.green} List books`,`${'2.'.green} List characters`,`${'3.'.green} List houses`,
			`${'4.'.green} Search for a book`, `${'5.'.green} Search for a character`,`${'6.'.green} Search for a house`,
			`${'7.'.green} Search history`,`${'8.'.green} Delete search history`,`${'9.'.green} Change pagination`,`${'0.'.green} Exit` ])
	})

})
