// /got-app/test/searches.test.js

// Loads
const Searches = require('../modules/searches')
const {assert} = require('chai')
const sinon = require('sinon')
const { default: axios } = require('axios')

// New Searches class assigned to a variable
const searches = new Searches()

describe('Successful creation of Searches', function ()
{
	
	it('history atribute successfully created.', function()
	{
		assert.exists(searches.history)
	})

	it('pageSize atribute successfully created.', function()
	{
		assert.exists(searches.pageSize)
	})

	it('dbPath atribute successfully created.', function()
	{
		assert.exists(searches.dbPath)
	})

	it('setPageSize method successfully created.', function()
	{
		assert.exists(searches.setPageSize)
	})

	it('getPageSize method successfully created.', function()
	{
		assert.exists(searches.getPageSize)
	})

	it('addHistory method successfully created.', function()
	{
		assert.exists(searches.addHistory)
	})

	it('historyCapitalized method successfully created.', function()
	{
		assert.exists(searches.historyCapitalized)
	})

	it('deleteHistory method successfully created.', function()
	{
		assert.exists(searches.deleteHistory)
	})
    
	it('saveDB method successfully created.', function()
	{
		assert.exists(searches.saveDB)
	})

	it('readDB method successfully created.', function()
	{
		assert.exists(searches.readDB)
	})

	it('book method successfully created.', function()
	{
		assert.exists(searches.book)
	})

	it('character method successfully created.', function()
	{
		assert.exists(searches.character)
	})

	it('characterByPage method successfully created.', function()
	{
		assert.exists(searches.characterByPage)
	})

	it('house method successfully created.', function()
	{
		assert.exists(searches.house)
	})

	it('houseByPage method successfully created.', function()
	{
		assert.exists(searches.houseByPage)
	})

})

describe('Searches atributes are working properly',function()
{
	before(function ()
	{
		searches.history = ['juan palomo']
	})

	it('Set history atribute works.', function()
	{
		assert.notEqual(searches.history,[])
	})

	it('historyCpitalized method works.', function()
	{
		assert.deepEqual(searches.historyCapitalized,['Juan Palomo'])
	})

	it('deleteHistory is working properly.', function()
	{
		searches.deleteHistory()
		assert.deepEqual(searches.history,[])

	})

	it('Set adn Get pageSize atribute methods work.', function()
	{
		searches.setPageSize(15)
		assert.exists(searches.getPageSize,15)
	})

	it('Set dbPath atribute works.', function()
	{
		assert.equal(searches.dbPath,`${process.cwd()}/got-app/db/database.json`)
	})
})

describe('Searches methods are working properly',function()
{

	beforeEach(function () {
		// runs before each test in this block
	})

	it('addHistory method is working properly.', function()
	{
		const mock = sinon.mock(searches)
		let expectation = mock.expects('saveDB')
		expectation.exactly(1)
		searches.addHistory('Juan')
		mock.verify()
	})

	it('saveDB method is working properly.', function()
	{
		const fs = require('fs')
		const mock = sinon.mock(fs)
		let expectation = mock.expects('writeFileSync')
		expectation.exactly(1)
		searches.saveDB()
		mock.verify()

	})

	it('readDB method is working properly.', function()
	{
		const fs = require('fs')
		const mock = sinon.mock(fs)
		let expectation = mock.expects('existsSync')
		expectation.exactly(1)
		searches.readDB()
		mock.verify()

	})

	it('book method is working properly.', async function()
	{
		const mock = sinon.mock(axios)
		let expectation = mock.expects('create')
		expectation.exactly(1)
		searches.book()
		mock.verify()

	})

	it('character method is working properly.', async function()
	{
		const mock = sinon.mock(axios)
		let expectation = mock.expects('create')
		expectation.exactly(1)
		searches.character()
		mock.verify()
	})

	it('characterByPage method is working properly.', async function()
	{
		const mock = sinon.mock(axios)
		let expectation = mock.expects('create')
		expectation.exactly(1)
		searches.characterByPage()
		mock.verify()
	})

	it('house method is working properly.', async function()
	{
		const mock = sinon.mock(axios)
		let expectation = mock.expects('create')
		expectation.exactly(1)
		searches.house()
		mock.verify()
	})

	it('houseByPage method is working properly.', async function()
	{
		const mock = sinon.mock(axios)
		let expectation = mock.expects('create')
		expectation.exactly(1)
		searches.houseByPage()
		mock.verify()
	})
})