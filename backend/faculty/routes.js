const express = require('express');
const router = express.Router();
const db = require('../shared/db');
const { findUserByRole } = require('../shared/auth');

// Member 2 owns this file. Add all Faculty-related endpoints here.

// POST /api/faculty/login
router.post('/login', (req, res) => {
  const { facultyId, password } = req.body;
  const user = findUserByRole('faculty', 'facultyId', facultyId, password);
  if (!user) return res.status(401).json({ message: 'Invalid Faculty ID or password' });
  res.json({ user });
});

// GET /api/faculty/notices
router.get('/notices', (req, res) => {
  res.json({ notices: db.notices });
});

// POST /api/faculty/notices  (create a notice)
router.post('/notices', (req, res) => {
  const { title, authorId } = req.body;
  const newNotice = { id: db.notices.length + 1, title, authorId, time: 'just now' };
  db.notices.push(newNotice);
  res.status(201).json({ notice: newNotice });
});

module.exports = router;
