# Game of Thrones Console App

## Game of Thrones Api

This app use 'An API of Ice And Fire' from: https://anapioficeandfire.com/, that is a big GOT database.

It does not need any key to use it.

## Notes

This GOT api supposedly provides filters for data searches but they don't work. My app has been made with this in mind so that you can search by titles/names about books, characters and houses.

Sometimes the pagination data of this application shows less results than it should. This is because some database records were added without a name and they have been excluded by this application.

There are many records that have empty fields, but from this app we have no control to modify these records.



## Use

To use this app:

- Use the command console to set the active directory to the application's parent folder.

- Maximize console to full screen.

- Execute "npm run start:got-app"


Utility list:

```bash
    "axios": "^0.21.1",
    "chai": "^4.3.7",
    "colors": "^1.4.0",
    "inquirer": "^7.3.3",
    "sinon": "^15.0.1"
```

Scripts:

```bash
    "test": "mocha --recursive ./got-app/test/*.js",
    "start:got-app": "node got-app/app.js",
    "start:doctor": "ncu --doctor -u",
    "start:version": "npm version patch",
    "poststart:version": "npm publish"
```

Thanks for using my app.

Eduardo Irigaray Calvo