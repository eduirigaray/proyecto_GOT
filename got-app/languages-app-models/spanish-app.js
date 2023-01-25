/* eslint-disable indent */
// Spanish inquirer load
const {
    inquirerMenu,
    readInput,
    pause,
    pages,
    listResults,
    numPages,
    numCorrect
} = require('../helpers/inquirerSpanish')

// Searches module load
const Searches = require('../modules/searches')

// Spanish app model function
const mainSpanish = async () =>
{

    // New Searches class assigned to a variable
    const searches = new Searches()

    // Option variable
    let opt

    // Spanish app loop
    do
    {
        // Inquirer menu function assigned to a variable, its returns an option
        opt = await inquirerMenu()

        // Menu selection switch clause
        switch (opt) {

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
                    console.log('\nInformación del libro: \n'.green)
                    console.log('Título:', bookChosen.name.green)
                    console.log('ISBN:', bookChosen.id)
                    console.log('Autor:', bookChosen.authors)
                    console.log('Número de páginas:', bookChosen.numberOfPages)
                    console.log('Editorial:', bookChosen.publisher)
                    console.log('Pais:', bookChosen.country)
                    console.log('Lanzamiento:', bookChosen.released)

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
                                    console.warn('Warning: No puedes volver a la página anterior porque estas en la primera.')
                                    console.log('Mostrando la primera página de personajes.')
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

                            // Save character name in history, doble checked name to avoid problems, first in line 133
                            if (characterChosen.name)
                            {
                                searches.addHistory(characterChosen.name)
                            }


                            // Log results in console
                            console.log('\nInformación del personaje: \n'.green)
                            console.log('Nombre:', characterChosen.name.green)
                            console.log('Genero:', characterChosen.gender)
                            console.log('Cultura:', characterChosen.culture)
                            console.log('Nacimiento:', characterChosen.born)
                            console.log('Fallecimiento:', characterChosen.died)
                            console.log('Títulos:', characterChosen.titles)
                            console.log('Alias:', characterChosen.aliases)
                            console.log('Padre:', characterChosen.father)
                            console.log('Madre:', characterChosen.mother)
                            console.log('Casas:', characterChosen.allegiances)
                            console.log('Temporadas:', characterChosen.tvSeries)
                            console.log('Interpretado por', characterChosen.playedBy)
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
                                    console.warn('Warning: No puedes volver a la página anterior porque estas en la primera.')
                                    console.log('Mostrando la primera página de casas.')
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

                            // Save house name in history, doble checked name to avoid problems, first in line 236
                            if (houseChosen.name)
                            {
                                searches.addHistory(houseChosen.name)
                            }

                            // Log results in console
                            console.log('\nInformación de la casa: \n'.green)
                            console.log('Nombre:', houseChosen.name.green)
                            console.log('Region:', houseChosen.region)
                            console.log('Escudo de armas:', houseChosen.coat)
                            console.log('Palabras:', houseChosen.words)
                            console.log('Titulos:', houseChosen.titles)
                            console.log('Asientos:', houseChosen.seats)
                            console.log('Lord actual:', houseChosen.currentLord)
                            console.log('Heredero:', houseChosen.heir)
                            console.log('Año de fundación:', houseChosen.founded)
                            console.log('Fundador:', houseChosen.founder)
                            console.log('Año de extinción:', houseChosen.diedOut)
                            console.log('Armas ancestrales:', houseChosen.weapons)
                            console.log('Miembros juramentados:', houseChosen.swornMembers)
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
                    let bookName = await readInput('Introduce el título del libro: ')

                    // Log searching await message
					console.log('Buscando...')

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
						console.log('No hay resultados para ese título.')
						await pause()
						continue
					}

                    // The books are listed and the choice is returned as id
                    const idBookSearch = await listResults(resultsBookSearch)

                    // If no book is chosen, continue
                    if (idBookSearch === '0') continue

                    // Find chosen book and is assigned to a variable
                    const searchBookChosen = resultsBookSearch.find((book) => book.id === idBookSearch)

                    // Save book title in history, doble checked title to avoid problems, first in line 298
                    if (searchBookChosen.name)
                    {
                        searches.addHistory(searchBookChosen.name)
                    }

                    // Log result in console
                    console.log('\nInformación del libro: \n'.green)
                    console.log('Título:', searchBookChosen.name.green)
                    console.log('ISBN:', searchBookChosen.id)
                    console.log('Autor:', searchBookChosen.authors)
                    console.log('Número de páginas:', searchBookChosen.numberOfPages)
                    console.log('Editorial:', searchBookChosen.publisher)
                    console.log('Pais:', searchBookChosen.country)
                    console.log('Lanzamiento:', searchBookChosen.released)

                    // Await to user to continue
                    await pause()

                    break
                }

            // Search for a character option
            case 5:
                {
                    // Prompt for a character name
					let characterName = await readInput('Introduce el nombre del personaje: ')

					// Log searching await message
					console.log('Buscando...')
					
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
						console.log('No hay resultados para ese nombre.')
						await pause()
						continue
					}

					// The characters are listed and the choice is returned as id
					const idCharacterSearch = await listResults(resultsCharacterSearch)

					// If no character is chosen, continue
					if (idCharacterSearch === '0') continue

					// Find chosen character and is assigned to a variable
					const searchCharacChosen = resultsCharacterSearch.find((character) => character.id === idCharacterSearch)

					// Save character name in history, doble checked name to avoid problems, first in line 371
					if (searchCharacChosen.name)
					{
						searches.addHistory(searchCharacChosen.name)
					}

                    // Log result in console
                    console.log('\nInformación del personaje: \n'.green)
                    console.log('Nombre:', searchCharacChosen.name.green)
                    console.log('Genero:', searchCharacChosen.gender)
                    console.log('Cultura:', searchCharacChosen.culture)
                    console.log('Nacimiento:', searchCharacChosen.born)
                    console.log('Fallecimiento:', searchCharacChosen.died)
                    console.log('Títulos:', searchCharacChosen.titles)
                    console.log('Alias:', searchCharacChosen.aliases)
                    console.log('Padre:', searchCharacChosen.father)
                    console.log('Madre:', searchCharacChosen.mother)
                    console.log('Casas:', searchCharacChosen.allegiances)
                    console.log('Temporadas:', searchCharacChosen.tvSeries)
                    console.log('Interpretado por', searchCharacChosen.playedBy)

                    // Await to user to continue
                    await pause()

                    break
                }

            // Search for a house option
            case 6:
                {
                    // Prompt for a character name
                    let houseName = await readInput('Introduce el nombre de la casa: ')

                    // Log searching await message
                    console.log('Buscando...')

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
						console.log('No hay resultados para ese nombre.')
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
                    console.log('\nInformación de la casa: \n'.green)
                    console.log('Nombre:', searchHouseChosen.name.green)
                    console.log('Region:', searchHouseChosen.region)
                    console.log('Escudo de armas:', searchHouseChosen.coat)
                    console.log('Palabras:', searchHouseChosen.words)
                    console.log('Titulos:', searchHouseChosen.titles)
                    console.log('Asientos:', searchHouseChosen.seats)
                    console.log('Lord actual:', searchHouseChosen.currentLord)
                    console.log('Heredero:', searchHouseChosen.heir)
                    console.log('Año de fundación:', searchHouseChosen.founded)
                    console.log('Fundador:', searchHouseChosen.founder)
                    console.log('Año de extinción:', searchHouseChosen.diedOut)
                    console.log('Armas ancestrales:', searchHouseChosen.weapons)
                    console.log('Miembros juramentados:', searchHouseChosen.swornMembers)

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
					console.log('El historial ha sido borrado.')

					// Await to user to continue
					await pause()

					break
                }

            // Change pagination option
            case 9:
                {
                    // Log current size page to the console
                    console.log('Tamaño actual(items por página): ' + searches.getPageSize())

                    // Prompt the new page size number and assign it to a variable
                    let numPag = await numPages()

                    // Check that user introduced a correct number
                    if (numCorrect(numPag))
                    {
                        // Set new page size number
                        searches.setPageSize(numPag)

                        // Log succesfully updated page size message
                        console.log('Tamaño de página actualizado correctamente.')
                    }
                    else
                    {
                        // Warning the user when wrong number inserted
                        console.warn('Warning: No has insertado un número de items válido.')
                    }

                    // Await to user to continue
                    await pause()

                    break
                }
        }
    // Exit spanish app loop condition
    } while (opt !== 0)
}

// Spanish app model export
module.exports = mainSpanish