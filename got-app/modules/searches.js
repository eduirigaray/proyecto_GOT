/* eslint-disable quotes */
// File system build-in module
const fs = require('fs')

// Axios library
const axios = require('axios')

// Class to handle DB searches
class Searches
{
	// App history memory atribute
	history = []

	// Current items per page in pagination atribute
	pageSize = 10

	// DB path atribute setted using process library
	dbPath = `${process.cwd()}/got-app/db/database.json`

	// Class constructor
	constructor()
	{
		// Read DB when an class object is created
		this.readDB()
	}

	// Set page size
	setPageSize(size)
	{
		this.pageSize = size
	}

	// Get page size
	getPageSize()
	{
		return this.pageSize
	}

	// Method to add history searches atribute
	addHistory(query = '')
	{
		// Return if query already exists
		if (this.history.includes(query.toLocaleLowerCase()))
		{
			return
		}

		// Delete the first 5 items from index 0
		this.history = this.history.splice(0, 5)

		// Adds query element to the beginning of history array
		this.history.unshift(query.toLocaleLowerCase())

		// Write DB
		this.saveDB()
	}

	// Get history capitalized from class atribute
	get historyCapitalized()
	{
		// Return history mapped
		return this.history.map((query) =>
		{
			// Get a words array from history
			let words = query.split(' ')

			// Set first letter of every word to uppercase
			words = words.map((p) => p[0].toUpperCase() + p.substring(1))

			// Return string with spaces
			return words.join(' ')
		})
	}

	// Delete history atribute
	deleteHistory()
	{
		this.history = []
	}

	// Write history atribute array in DB
	saveDB()
	{
		// Get history
		const payload =
		{
			history: this.history,
		}

		// Write history in DB
		fs.writeFileSync(this.dbPath, JSON.stringify(payload))
	}

	// Get history from DB and set it into history atribute
	readDB()
	{
		// If path doesn't exists return
		if (!fs.existsSync(this.dbPath)) return

		// Save all path in a variable
		const info = fs.readFileSync(this.dbPath, { encoding: 'utf-8' })

		// Convert JSON info variable into object
		const data = JSON.parse(info)

		// Set history atribute with DB data
		this.history = data.history
	}

	// Book search method
	async book()
	{
		try
		{
			// Axios instance
			const intance = axios.create(
				{
					// baseURL: `https://www.anapioficeandfire.com/api`
					baseURL: `https://www.anapioficeandfire.com/api/books?pageSize=12`
				})

			// Try axios get request and return results
			const resp = await intance.get()

			// Return response mapped data
			return resp.data.map((book) =>
				(
					{
						id: book.isbn,
						name: book.name,
						authors: book.authors,
						numberOfPages: book.numberOfPages,
						publisher: book.publisher,
						country: book.country,
						released: book.released,
					}
				))
		} catch (error)
		{
			return []
		}
	}

	// Character search method
	async character(page = '')
	{
		try
		{
			// Axios instance
			const intance = axios.create(
				{
					// baseURL: `https://www.anapioficeandfire.com/api`
					baseURL: `https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=${this.pageSize}`
				})

			// Try axios get request and return results
			const resp = await intance.get()

			// Return response mapped data
			return resp.data.map((character) => 
				({
					id: character.url,
					name: character.name,
					gender: character.gender,
					culture: character.culture,
					born: character.born,
					died: character.died,
					titles: character.titles,
					aliases: character.aliases,
					father: character.father,
					mother: character.mother,
					allegiances: character.allegiances,
					tvSeries: character.tvSeries,
					playedBy: character.playedBy,

				}))
		} catch (error)
		{
			return []
		}
	}

	// Character by page search method, using maximum size to optimize search by name
	async characterByPage(page)
	{
		try 
		{
			// Axios instance
			const intance = axios.create(
				{
				// baseURL: `https://www.anapioficeandfire.com/api`
					baseURL: `https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=50`
				})

			// Try axios get request and return results
			const resp = await intance.get()

			// Return response mapped data
			return resp.data.map((character) => 
				({
					id: character.url,
					name: character.name,
					gender: character.gender,
					culture: character.culture,
					born: character.born,
					died: character.died,
					titles: character.titles,
					aliases: character.aliases,
					father: character.father,
					mother: character.mother,
					allegiances: character.allegiances,
					tvSeries: character.tvSeries,
					playedBy: character.playedBy,

				}))
		} catch (error)
		{
			return []
		}
	}

	// House search method
	async house(page = '')
	{
		try
		{
			// Axios instance
			const intance = axios.create(
				{
					// baseURL: `https://www.anapioficeandfire.com/api`
					baseURL: `https://www.anapioficeandfire.com/api/houses?page=${page}&pageSize=${this.pageSize}`,
				})

			// Try axios get request and return results
			const resp = await intance.get()

			// Return response mapped data
			return resp.data.map((house) => 
				({
					id: house.url,
					name: house.name,
					region: house.region,
					coat: house.coatOfArms,
					words: house.words,
					titles: house.titles,
					seats: house.seats,
					currentLord: house.currentLord,
					heir: house.heir,
					founded: house.founded,
					founder: house.founder,
					diedOut: house.diedOut,
					weapons: house.ancestralWeapons,
					swornMembers: house.swornMembers,
				}))
		} catch (error)
		{
			return []
		}
	}

	// House by page search method, using maximum size to optimize search by name
	async houseByPage(page = '')
	{
		try
		{
			// Axios instance
			const intance = axios.create(
				{
					// baseURL: `https://www.anapioficeandfire.com/api`
					baseURL: `https://www.anapioficeandfire.com/api/houses?page=${page}&pageSize=50`,
				})

			// Try axios get request and return results
			const resp = await intance.get()

			// Return response mapped data
			return resp.data.map((house) => 
				({
					id: house.url,
					name: house.name,
					region: house.region,
					coat: house.coatOfArms,
					words: house.words,
					titles: house.titles,
					seats: house.seats,
					currentLord: house.currentLord,
					heir: house.heir,
					founded: house.founded,
					founder: house.founder,
					diedOut: house.diedOut,
					weapons: house.ancestralWeapons,
					swornMembers: house.swornMembers,
				}))
		} catch (error)
		{
			return []
		}
	}

	
}

// Searches class model export
module.exports = Searches
