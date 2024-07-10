const mongoose = require ("mongoose");

const projectSchema = new mongoose.Schema({
  projectName:{
    type: String,
    required: true
  },
  projectType:{
    type: String,
    required: true
  },
  projectDesc:{
    type: String,
    required: true
  },
  projectLink:{
    type: String,
    required: true
  },
  projectImage:{
    type: String,
    required: true
  },
})

module.exports = mongoose.model("project", projectSchema);