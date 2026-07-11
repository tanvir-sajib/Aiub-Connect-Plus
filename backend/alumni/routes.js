const express = require('express');
const router = express.Router();
const db = require('../shared/db');
const { findUserByRole } = require('../shared/auth');

// Member 3 owns this file. Add all Alumni-related endpoints here.

// POST /api/alumni/login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = findUserByRole('alumni', 'email', email, password);
  if (!user) return res.status(401).json({ message: 'Invalid email or password' });
  res.json({ user });
});

// GET /api/alumni/jobs
router.get('/jobs', (req, res) => {
  res.json({ jobs: db.jobs });
});

// POST /api/alumni/jobs  (post a job)
router.post('/jobs', (req, res) => {
  const { title, company, location } = req.body;
  const newJob = { id: db.jobs.length + 1, title, company, location, postedAgo: 'just now' };
  db.jobs.push(newJob);
  res.status(201).json({ job: newJob });
});

module.exports = router;
