/* eslint-disable no-undef */
// /got-app/test/inquirerEnglish.test.js


const inquirerSpanish = require('../helpers/inquirerSpanish')
const {assert} = require('chai')

describe('Spanish menu inquirer test', function ()
{

	const names = inquirerSpanish.questions[0].choices.map((choice)=>(choice.name))
	
	it('Inquirer menu should has the correct options', function()
	{
		assert.deepEqual(names, [`${'1.'.green} Listar libros`,`${'2.'.green} Listar personajes`,`${'3.'.green} Listar casas`,
			`${'4.'.green} Buscar libro`, `${'5.'.green} Buscar personaje`,`${'6.'.green} Buscar casa`,
			`${'7.'.green} Historial de busquedas`,`${'8.'.green} Borrar historial de busquedas`,`${'9.'.green} Cambiar paginación`,`${'0.'.green} Salir` ])
	})

	

})
