const express = require('express');
const router = express.Router();
const db = require('../helpers/db_helper');

// endpoints
// POST
router.post('/actions/', async (req, res) => {
  const action_data = req.body;
  if (!action_data.description) {
    res.status(400).json({ errorMessage: 'Please provide a description for your action.' });
  } else {
    try {
      const new_action = await db.add_action(action_data);
      res.status(201).json(new_action);
    } catch (error) {
      res.status(500).json({ errorMessage: 'Error saving action.' });
    }
  }
});

module.exports = router;