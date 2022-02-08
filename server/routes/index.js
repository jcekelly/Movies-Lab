const router = require("express").Router();
const Celebrity = require("../models/Celebrity.js");
const Celebrities = require('../models/Celebrity.js')

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


module.exports = router;
