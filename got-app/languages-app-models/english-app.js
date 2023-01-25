/* eslint-disable indent */
// English inquirer load
const {
	inquirerMenu,
	readInput,
	pause,
	pages,
	listResults,
	numPages,
	numCorrect
} = require('../helpers/inquirerEnglish')

// Searches module load
const Searches = require('../modules/searches')

// English app model function
const mainEnglish = async () =>
{

	// New Searches class assigned to a variable
	const searches = new Searches()

	// Option variable
	let opt

	// English app loop
	do {

		// Inquirer menu function assigned to a variable, its returns an option
		opt = await inquirerMenu()

		// Menu selection switch clause
		switch (opt)
		{
			// List books option
			case 1:
				{
					// Search books and return them
					const resultsBooks = await searches.book()

					// The books are listed and the choice is returned as id
					const idBook = await listResults(resultsBooks)

					// If no book is chosen, continue
					if (idBook === '0') continue

					// Find chosen book and is assigned to a variable
					const bookChosen = resultsBooks.find((book) => book.id === idBook)

					// Save book name in history if book title exist
					if (bookChosen.name)
					{
						searches.addHistory(bookChosen.name)
					}

					// Log results in console
					console.log('\nBook information: \n'.green)
					console.log('Title:', bookChosen.name.green)
					console.log('ISBN:', bookChosen.id)
					console.log('Author:', bookChosen.authors)
					console.log('Number of pages:', bookChosen.numberOfPages)
					console.log('Publisher:', bookChosen.publisher)
					console.log('Country:', bookChosen.country)
					console.log('Released:', bookChosen.released)

					// Await user to continue
					await pause()

					break
				}

			// List characters option
			case 2:
				{
					// optCharacter: Chosen character option variable
					// contCharacter: counter variable, it will contain the current page
					let optCharacter, contCharacter

					// Initialised counter
					contCharacter = 1

					// Character navegation loop menu
					do
					{

						// Display character navigation menu and return chosen option
						optCharacter = await pages()

						// Character navigation switch clause
						switch (optCharacter)
						{
							// Display current page option
							case 1:
								break

							// Next page option
							case 2:

								contCharacter++
								break

							// Previous page option
							case 3:

								contCharacter--

								if (contCharacter < 1)
								{
									console.warn('Warning: You cannot go back to the previous page because you are on the first one.')
									console.log('Showing character first page.')
									contCharacter = 1
								}

								break

							// First page option
							case 4:
								contCharacter = 1
								break

							// Exit option
							case 0:
								contCharacter = 0
								break
						}

						// Exit loop condition
						if (contCharacter !== 0)
						{
							// Search characters and return them
							let resultsCharacter = await searches.character(contCharacter)

							// Characters filtered by name, to exclude the unnamed ones
							resultsCharacter = resultsCharacter.filter(character => character.name)

							// The characters are listed and the choice is returned as id
							const idCharacter = await listResults(resultsCharacter)

							// If no character is chosen, continue
							if (idCharacter === '0') continue

							// Find chosen character and is assigned to a variable
							const characterChosen = resultsCharacter.find((character) => character.id === idCharacter)

							// Save character name in history, doble checked name to avoid problems, first in line 134
							if (characterChosen.name)
							{
								searches.addHistory(characterChosen.name)
							}

							// Log results in console
							console.log('\nCharacter infomation: \n'.green)
							console.log('Name:', characterChosen.name.green)
							console.log('Gender:', characterChosen.gender)
							console.log('Culture:', characterChosen.culture)
							console.log('Born:', characterChosen.born)
							console.log('Died:', characterChosen.died)
							console.log('Titles:', characterChosen.titles)
							console.log('Aliases:', characterChosen.aliases)
							console.log('Father:', characterChosen.father)
							console.log('Mother:', characterChosen.mother)
							console.log('Houses:', characterChosen.allegiances)
							console.log('Seasons:', characterChosen.tvSeries)
							console.log('Played by', characterChosen.playedBy)
						}

						// Await to user to continue
						if (optCharacter !== 0) await pause()

					// Exit loop condition
					} while ((optCharacter !== 0))

					break
				}

			// List houses option
			case 3:
				{
					// optHouse: Chosen house option variable
					// contHouse: counter variable, it will contain the current page
					let optHouse, contHouse

					// Initialised counter
					contHouse = 1

					// House navegation menu loop
					do
					{

						// Display house navigation menu and return chosen option
						optHouse = await pages()

						// Character navigation switch clause
						switch (optHouse)
						{
							// Display current page option
							case 1:
								break

							// Next page option
							case 2:
								contHouse++
								break

							// Previous page option
							case 3:
								contHouse--
								if (contHouse < 1)
								{
									console.warn('Warning: You cannot go back to the previous page because you are on the first one.')
									console.log('Showing houses first page.')
									contHouse = 1
								}
								break

							// First page option
							case 4:
								contHouse = 1
								break

							// Exit option
							case 0:
								contHouse = 0
								break
						}

						// Exit loop condition
						if (contHouse !== 0)
						{
							// Search houses and return them
							let resultsHouse = await searches.house(contHouse)

							// Houses filtered by name, to exclude the unnamed ones
							resultsHouse = resultsHouse.filter(house => house.name)

							// The houses are listed and the choice is returned as id
							const idHouse = await listResults(resultsHouse)

							// If no house is chosen, continue
							if (idHouse === '0') continue

							// Find chosen house and is assigned to a variable
							const houseChosen = resultsHouse.find((house) => house.id === idHouse)

							// Save house name in history, doble checked name to avoid problems, first in line 234
							if (houseChosen.name)
							{
								searches.addHistory(houseChosen.name)
							}

							// Log results in console
							console.log('\nHouse information: \n'.green)
							console.log('Name:', houseChosen.name.green)
							console.log('Region:', houseChosen.region)
							console.log('Coat of arms:', houseChosen.coat)
							console.log('Words:', houseChosen.words)
							console.log('Titles:', houseChosen.titles)
							console.log('Seats:', houseChosen.seats)
							console.log('Current Lord:', houseChosen.currentLord)
							console.log('Heir:', houseChosen.heir)
							console.log('Founded:', houseChosen.founded)
							console.log('Founder:', houseChosen.founder)
							console.log('Die out year:', houseChosen.diedOut)
							console.log('Weapons:', houseChosen.weapons)
							console.log('Sworn members:', houseChosen.swornMembers)
						}

						// Await to user to continue
						if (optHouse !== 0) await pause()

					// Exit loop condition
					} while ((optHouse !== 0))

					break
				}

			// Search for a book option
			case 4:
				{
					// Prompt for a book title
					let bookName = await readInput('Book title: ')

					// Log searching await message
					console.log('Searching...')

					// Book search results array
					let resultsBookSearch = []

					// Book name converted to lower case
					bookName = bookName.toLowerCase()

					// Search the book and assign it into a variable
					let books = await searches.book()

					// Books filtered by name, to exclude the unnamed ones
					books = books.filter(book => book.name)

					// The title of books is compared with the title entered by the user and added to the array if it matches
					books.forEach(book =>
						{
							if (book.name.toLowerCase().includes(bookName))
							{
								resultsBookSearch.push(book)
							}
						}
					)

					// If no search results log message in console and continue
					if(resultsBookSearch.length === 0)
					{
						console.log('No results for that title.')
						await pause()
						continue
					}

					// The books are listed and the choice is returned as id
					const idBookSearch = await listResults(resultsBookSearch)

					// If no book is chosen, continue
					if (idBookSearch === '0') continue

					// Find chosen book and is assigned to a variable
					const searchBookChosen = resultsBookSearch.find((book) => book.id === idBookSearch)

					// Save book title in history, doble checked title to avoid problems, first in line 296
					if (searchBookChosen.name)
					{
						searches.addHistory(searchBookChosen.name)
					}

					// Log result in console
					console.log('\nBook information: \n'.green)
					console.log('Title:', searchBookChosen.name.green)
					console.log('ISBN:', searchBookChosen.id)
					console.log('Author:', searchBookChosen.authors)
					console.log('Number of pages:', searchBookChosen.numberOfPages)
					console.log('Publisher:', searchBookChosen.publisher)
					console.log('Country:', searchBookChosen.country)
					console.log('Released:', searchBookChosen.released)

					// Await to user to continue
					await pause()

					break

				}

			// Search for a character option
			case 5:
				{
					// Prompt for a character name
					let characterName = await readInput('Character name: ')

					// Log searching await message
					console.log('Searching...')
					
					// Character search results array
					let resultsCharacterSearch = []

					// Character name converted to lower case
					characterName = characterName.toLowerCase()

					// Character search loop
					for (let i = 1; i <= 43; i++)
					{
						// Function that return i number characters page and assign it into a variable
						let characters = await searches.characterByPage(i)

						// Characters filtered by name, to exclude the unnamed ones
						characters = characters.filter(person => person.name)

						// The name of characters is compared with the name entered by the user and added to the array if it matches
						characters.forEach(person =>
							{
								if (person.name.toLowerCase().includes(characterName))
								{
									resultsCharacterSearch.push(person)
								}
							}
						)
					}

					// If no search results log message in console and continue
					if(resultsCharacterSearch.length === 0)
					{
						console.log('No results for that name.')
						await pause()
						continue
					}

					// The characters are listed and the choice is returned as id
					const idCharacterSearch = await listResults(resultsCharacterSearch)

					// If no character is chosen, continue
					if (idCharacterSearch === '0') continue

					// Find chosen character and is assigned to a variable
					const searchCharacChosen = resultsCharacterSearch.find((character) => character.id === idCharacterSearch)

					// Save character name in history, doble checked name to avoid problems, first in line 370
					if (searchCharacChosen.name)
					{
						searches.addHistory(searchCharacChosen.name)
					}

					// Log result in console
					console.log('\nCharacter infomation: \n'.green)
					console.log('Name:', searchCharacChosen.name.green)
					console.log('Gender:', searchCharacChosen.gender)
					console.log('Culture:', searchCharacChosen.culture)
					console.log('Born:', searchCharacChosen.born)
					console.log('Died:', searchCharacChosen.died)
					console.log('Titles:', searchCharacChosen.titles)
					console.log('Aliases:', searchCharacChosen.aliases)
					console.log('Father:', searchCharacChosen.father)
					console.log('Mother:', searchCharacChosen.mother)
					console.log('Houses:', searchCharacChosen.allegiances)
					console.log('Seasons:', searchCharacChosen.tvSeries)
					console.log('Played by', searchCharacChosen.playedBy)

					// Await to user to continue
					await pause()

					break

				}

			// Search for a house option
			case 6:
				{

					// Prompt for a character name
					let houseName = await readInput('House name: ')

					// Log searching await message
					console.log('Searching...')

					// House search results array
					let resultsHouseSearch = []

					// House name converted to lower case
					houseName = houseName.toLowerCase()

					// House search loop
					for (let i = 1; i <= 9; i++)
					{
						// Function that return i number houses page and assign it into a variable
						let houses = await searches.houseByPage(i)

						// Houses filtered by name, to exclude the unnamed ones
						houses = houses.filter(house => house.name)

						// House name is compared with the entered name and added to the array if it matches
						houses.forEach(house =>
							{
								if (house.name.toLowerCase().includes(houseName))
								{
									resultsHouseSearch.push(house)
								}
							}
						)
					}

					// If no search results log message in console and continue
					if(resultsHouseSearch.length === 0)
					{
						console.log('No results for that name.')
						await pause()
						continue
					}

					// The houses are listed and the choice is returned as id
					const idHouseSearch = await listResults(resultsHouseSearch)

					// If no house is chosen, continue
					if (idHouseSearch === '0') continue

					// Find chosen house and is assigned to a variable
					const searchHouseChosen = resultsHouseSearch.find((house) => house.id === idHouseSearch)

					// Save house name in history, doble checked name to avoid problems, first in line 451
					if (searchHouseChosen.name)
					{
						searches.addHistory(searchHouseChosen.name)
					}

					// Log result in console
					console.log('\nHouse information: \n'.green)
					console.log('Name:', searchHouseChosen.name.green)
					console.log('Region:', searchHouseChosen.region)
					console.log('Coat of arms:', searchHouseChosen.coat)
					console.log('Words:', searchHouseChosen.words)
					console.log('Titles:', searchHouseChosen.titles)
					console.log('Seats:', searchHouseChosen.seats)
					console.log('Current Lord:', searchHouseChosen.currentLord)
					console.log('Heir:', searchHouseChosen.heir)
					console.log('Founded:', searchHouseChosen.founded)
					console.log('Founder:', searchHouseChosen.founder)
					console.log('Die out year:', searchHouseChosen.diedOut)
					console.log('Weapons:', searchHouseChosen.weapons)
					console.log('Sworn members:', searchHouseChosen.swornMembers)

					// Await to user to continue
					await pause()

					break
				}

			// Search history option
			case 7:
				{
					// Get the search history and log it on the console with the following format
					searches.historyCapitalized.forEach((query, i) =>
					{
						const idx = `${i + 1}.`.green
						console.log(`${idx} ${query} `)
					})

					// Await to user to continue
					await pause()

					break
				}

			// Delete search history
			case 8:
				{
					// Delete the search history database
					searches.deleteHistory()

					// Delete history logging message
					console.log('History has been deleted.')

					// Await to user to continue
					await pause()

					break
				}

			// Change pagination option
			case 9:
				{
					// Log current size page to the console
					console.log('Current size(items per page): ' + searches.getPageSize())

					// Prompt the new page size number and assign it to a variable
					let numPag = await numPages()

					// Check that user introduced a correct number
					if (numCorrect(numPag))
					{
						// Set new page size number
						searches.setPageSize(numPag)

						// Log succesfully updated page size message
						console.log('Page size successfully updated.')

					}
					else
					{
						// Warning the user when wrong number inserted
						console.warn('Warning: You have not inserted a valid size page number.')
					}

					// Await to user to continue
					await pause()

					break
				}
		}
	// Exit english app loop condition
	} while (opt !== 0)
}

// English app model export
module.exports = mainEnglish