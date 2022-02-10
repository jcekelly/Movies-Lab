const router = require("express").Router();
const { route } = require("express/lib/application");
const Celebrity = require("../models/Celebrity.js");
const Celebrities = require('../models/Celebrity.js')
const Movie = require('../models/Movies')

router.get("/", (req, res, next) => {
  res.render('Home.hbs')

});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

router.get('/celebrities', (req,res,next) => {
  Celebrities.find()
  .then(celebritiesFromDB => {
    console.log(celebritiesFromDB)
    res.render('celebrities/index.hbs', {Celebrities: celebritiesFromDB})
  })
  .catch(err => next(err))  
})

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new.hbs')
});



router.get('/celebrities/:id',(req,res,next)=>{
  const id = req.params.id
    Celebrities.findById(id)
    .then(celebritiesFromDB => {
      console.log(id)
      res.render('celebrities/show.hbs', {Celebrities: celebritiesFromDB})
    })
    .catch(err => next(err))
})

router.post('/celebrities', (req,res,next) => {
  const { name, occupation, catchphrase } = req.body
  Celebrity.create({name, occupation, catchphrase})
  .then(createdCelebrity => {
    // res.render('celebrities/show', {celebrity: createdCelebrity})
    res.redirect(`/celebrities/${createdCelebrity._id}`)

  })
})

router.post('/celebrities/:id/delete', (req,res,next) =>{
  const id = req.params.id
  Celebrity.findByIdAndRemove(id)
  .then(deletedCelebrity => {
    console.log(deletedCelebrity)
    res.redirect('/celebrities')
  })
})

router.get('/movies/new', (req,res,next) => {
  res.render('movies/new.hbs')
})

router.post('/movies', (req,res,next) => {
  const { title, genre, plot, cast } = req.body
  Movie.create({title, genre, plot, cast})
  .then(createdMovie => {
    res.redirect(`/movies/${createdMovie._id}`)

  })
})

router.get('/movies/:id',(req,res,next)=>{
  const id = req.params.id
    Movie.findById(id)
    .then(moviesFromDB => {
      console.log(id)
      res.render('movies/show.hbs', {Movies: moviesFromDB})
    })
    .catch(err => next(err))
})


module.exports = router;
