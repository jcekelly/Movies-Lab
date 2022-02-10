const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
  {
    title: {
      type: String,
    },
    genre: String,
    plot: String,
    cast: [
        String,
    ]
  },
 
);

const Movie = model("Movie", movieSchema);

module.exports = Movie;