import mongoose from "mongoose"

const MovieSchema = new mongoose.Schema({
  title: {type: String, required: true},
  year: {type: Number, required: true},
  genre: {type: String, default: "genre missing"},
  rating: {type: Number, default: 0},
  director: {type: String, default: "director missing" }
}, {
  versionKey: false
})

const Movie = mongoose.model("Movie", MovieSchema)

export {Movie}