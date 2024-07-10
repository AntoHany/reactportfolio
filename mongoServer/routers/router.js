const express = require ('express');
const Project = require('../models/projects.js');
const Admin = require('../models/admin.js');

const router = express.Router();

router.get('/get/userdata', async (req, res)=>{
  try{
    const admin = await Admin.find();
    res.status(200).json(admin);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
});

router.get('/get/projects', async (req, res)=>{
  try{
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
});

router.post('/post/newcard', async (req, res)=>{
  try{
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(200).json({message: "Add Project", newProject});
  } catch (err) {
    res.status(500).json({error: err.message});
  }
});

router.put('/put/:id', async (req, res)=>{
  try{
    const {id} = req.params;
    const updateProject = req.body;
    await Project.findByIdAndUpdate(id, updateProject, {new: true});
    res.status(200).json({message: "Update Project", updateProject});
  } catch (err) {
    res.status(500).json({error: err.message});
  }
});

router.delete('/del/:id', async (req, res)=>{
  try{
    const {id} = req.params;
    await Project.findByIdAndDelete(id);
    res.status(200).json({message: "Delete Project"});
  } catch (err) {
    res.status(500).json({error: err.message});
  }
});

module.exports = router;