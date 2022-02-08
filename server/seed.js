const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/Celebrities')
	.then(db => console.log(`connected to database ${db.connections[0].name}`))
	.catch(err => console.log(err))

const Celebrity = require("./models/Celebrity.model")


const Celebrities = [
    { 
      name: 'Prince',
      occupation: 'Musician',
      catchphrase:'Hi my name is Prince'
    },

    {
    name: 'Bugs Bunny',
    occupation: 'Rabbit',
    catchphrase:'Whats up doc?'
    },

    { 
    name: 'Gandalf',
    occupation: 'Wizard',
    catchphrase:'Fly, you fools!'  
    },

]


Celebrity.create(Celebrities)
.then(Celebrities => {
    console.log('Celebs added to db')
})
 