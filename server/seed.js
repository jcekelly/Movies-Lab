const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/Celebrities')
	.then(db => console.log(`connected to database ${db.connections[0].name}`))
	.catch(err => console.log(err))

const Celebrity = require("./models/Celebrity.model")
const Movie = require('./models/Movies.js')

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

const Movies = [
  { 
    ttile: 'Brick',
    genre: 'Noir',
    plot:'oooOOO',
    cast: 'JGL',
  },

  

]


Celebrity.create(Celebrities)
.then(Celebrities => {
    console.log('Celebs added to db')
})

Movie.create(Movies)
.then(Movies => {
  console.log('Movies added to DB')
})
 