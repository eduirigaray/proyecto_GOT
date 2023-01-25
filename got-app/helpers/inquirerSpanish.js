// Node module Inquirer
const inquirer = require('inquirer')

// Node module Colors
require('colors')

// Questions array
const questions =
[
	{
		type: 'list',
		name: 'option',
		message: '¿Que desea hacer?',
		choices: [
			{
				value: 1,
				name: `${'1.'.green} Listar libros`,
			},
			{
				value: 2,
				name: `${'2.'.green} Listar personajes`,
			},
			{
				value: 3,
				name: `${'3.'.green} Listar casas`,
			},
			{
				value: 4,
				name: `${'4.'.green} Buscar libro`,
			},
			{
				value: 5,
				name: `${'5.'.green} Buscar personaje`,
			},
			{
				value: 6,
				name: `${'6.'.green} Buscar casa`,
			},
			{
				value: 7,
				name: `${'7.'.green} Historial de busquedas`,
			},
			{
				value: 8,
				name: `${'8.'.green} Borrar historial de busquedas`,
			},
			{
				value: 9,
				name: `${'9.'.green} Cambiar paginación`,
			},
			{
				value: 0,
				name: `${'0.'.green} Salir`,
			},
		],
	},
]

// Inquirer spanish main menu function
const inquirerMenu = async () =>
{
	// Presentation logs
	console.log('---------------------------------------------------------------------------------------------------------'.green)
	console.log('-----------gggggggg--------------------------------------------------------------------------------------'.white)
	console.log('---------ggg------gg------aaaaa-------mm------mm---eeeeeeeeeeee------------------------------------------'.white)
	console.log('--------ggg-------gg-----a-----a------mm------mm---ee---------------ooooo----fffffff---------------------'.white)
	console.log('-------ggg-------ggg-----a-----a------m-m----m-m---ee--------------o-|-|-o---f---------------------------'.white)
	console.log('------ggg---------------aa-----aa-----m-m----m-m---eeeeeeeeeee-----o-|-|-o---fffff-----------------------'.white)
	console.log('------ggg------ggggg----aaaaaaaaa-----m--m--m--m---ee--------------o-|-|-o---f---------------------------'.white)
	console.log('-------ggg--------gg---aa-------aa----m---mm---m---ee---------------ooooo----f---------------------------'.white)
	console.log('--------ggg-------gg---aa-------aa----m--------m---ee----------------------------------------------------'.white)
	console.log('----------ggg----ggg--aa---------aa---m--------m---eeeeeeeeeeee------------------------------------------'.white)
	console.log('-----------gggggggg--------------------------------------------------------------------------------------'.white)
	console.log('---------------------------------------------------------------------------------------------------------'.white)
	console.log('-----ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt-----------'.white)
	console.log('----------tt---------------------------------------------------------------------------------------------'.white)
	console.log('----------tt---hh-----hh---rrrrrrrrrr-----ooooooooo----nn------n---eeeeeeeeeeee----ssssssssss------------'.white)
	console.log('----------tt---hh-----hh---rr-------rr---o--|-|-|--o---nnn-----n---ee-------------ss---------------------'.white)
	console.log('----------tt---hh-----hh---rr-------rr--oo--|-|-|--oo--n-nn----n---ee-------------ss---------------------'.white)
	console.log('----------tt---hhhhhhhhh---rr-------r---oo--|-|-|--oo--n--nn---n---eeeeeeeeeee-----ssssssssss------------'.white)
	console.log('----------tt---hh-----hh---rrrrrrrrr----oo--|-|-|--oo--n---nn--n---ee-----------------------ss-----------'.white)
	console.log('----------tt---hh-----hh---rr------rr---oo--|-|-|--oo--n----nn-n---ee------------------------ss----------'.white)
	console.log('----------tt---hh-----hh---rr-------rr---o--|-|-|--o---n-----nnn---ee-----------------------ss-----------'.white)
	console.log('----------tt---hh-----hh---rrr-------rr---ooooooooo----n------nn---eeeeeeeeeeee----sssssssss-------------'.white)
	console.log('---------------------------------------------------------------------------------------------------------\n'.green)
	console.log('Nota: A veces en la paginación de los datos en esta aplicación muestra menos datos de los que debería. '.green)
	console.log('      Esto es debido a que algunos regitros de la base de datos fueron añadidos sin un nombre,'.green)
	console.log('      por lo que han sido excluidos por esta aplicación.\n'.green)

	// Promt questions to user and return the chosen option
	const { option } = await inquirer.prompt(questions)
	return option
}

// Page navigation display menu function
const pages = async () =>
{
	// Choices array
	const choices =
	[
		{
			value: 1,
			name: `${'1.'.green} Mostrar página actual`,
		},
		{
			value: 2,
			name: `${'2.'.green} Siguiente página`,
		},
		{
			value: 3,
			name: `${'3.'.green} Página anterior`,
		},
		{
			value: 4,
			name: `${'4.'.green} Primera página`,
		},
		{
			value: 0,
			name: `${'0.'.green} Salir`,
		},
	]

	// Question array
	const question =
	[
		{
			type: 'list',
			name: 'option',
			message: 'Selecciona una opción:',
			choices,
		},
	]

	// Promt questions to user and return the chosen option
	const { option  } = await inquirer.prompt(question)
	return option
}

// Pause navigation display menu function
const pause = async () =>
{
	// Question array
	const question =
	[
		{
			type: 'input',
			name: 'enter',
			message: `Presiona ${'enter'.green} para continuar.`,
		},
	]

	// Log message to user and await them to press enter
	console.log('\n')
	await inquirer.prompt(question)
}

// Read-input navigation display menu function
const readInput = async (message) =>
{
	// Question array
	const question =
	[
		{
			type: 'input',
			name: 'term',
			message,
			// Validate function that returns true only if user entered a name
			validate(value)
			{
				if (!value)
				{
					return 'Por favor introduce un nombre:'
				}
				return true
			},
		},
	]

	// Promt question to user and return the name
	const { term } = await inquirer.prompt(question)
	return term
}

// Results-list navigation display menu function
const listResults = async (results = []) =>
{
	// Choices menu options from results
	const choices = results.map((res, i) =>
	{
		const idx = `${i + 1}.`.green

		return {
			value: res.id,
			name: `${idx} ${res.name}`,
		}
	})

	// Option 0 added to cancel
	choices.unshift(
		{
			value: '0',
			name: '0.'.green + ' Cancelar',
		})

	// Question array
	const question =
	[
		{
			type: 'list',
			name: 'id',
			message: 'Selecciona una opción:',
			choices,
		},
	]

	// Promt questions to user and return the chosen option id
	const { id } = await inquirer.prompt(question)
	return id
}

// Read-input type navigation display menu function, return a number of items
const numPages = async () =>
{
	// Question array
	const question =
	[
		{
			type: 'number',
			name: 'number',
			message: 'Introduce un número de items por página(mín 10, max 50):',
		},
	]

	// Promt question to user and return the entered number
	const { number } = await inquirer.prompt(question)
	return number
}

// Number validation function
const numCorrect = (num) =>
{
	// Try to convert num to Number
	num = Number.parseInt(num)
	// If is a correct number, return true, else return false
	if(Number.isInteger(num) && num >= 10 && num <= 50)
	{
		return true
	}
	else
	{
		return false
	}
}

// Spanish inquirer function exports
module.exports =
{
	inquirerMenu,
	readInput,
	pause,
	pages,
	listResults,
	numPages,
	numCorrect,
	questions
}
