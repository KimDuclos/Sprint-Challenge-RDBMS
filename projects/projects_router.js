const express = require('express');
const router = express.Router();
const db = require('../helpers/db_helper');

// endpoings

// GET
router.get('/projects', async (req, res) => {
  try {
    const projects = await db.get_projects();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ errorMessage: 'Cannot retrieve projects.' });
  }
});

// POST
router.post('projects/', async (req, res) => {
  const project_data = req.body;
  console.log(req.body);
  if (!project_data.name || !project_data.description) {
    res.status(400).json({ errorMessage: 'Name and description needed to add project.' });
  } else {
    try {
      const new_project = await db.addProject(project_data);
      res.status(201).json(new_project);
    } catch (error) {
      res.status(500).json({ errorMessage: 'Could not save project to database.' });
    }
  }
});

// GET
router.get('/projects/:projectId', async (req, res) => {
  const { projectId } = req.params;

  db.get_projectActions(projectId)
    .then(action => {
      db.get_project(projectId)
        .then(project => {
          found_project = project[0];
          res.status(200).json({ ...found_project, actions: action });
        })
        .catch(_ => {
          res.status(404).json({ errorMessage: 'Project not found.' });
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: 'Project not found.' });
    });
});

module.exports = router;