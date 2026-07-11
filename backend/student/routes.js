const express = require('express');
const router = express.Router();
const db = require('../shared/db');
const { findUserByRole } = require('../shared/auth');

// Member 1 owns this file. Add all Student-related endpoints here.

// POST /api/student/login
router.post('/login', (req, res) => {
  const { studentId, password } = req.body;
  const user = findUserByRole('student', 'studentId', studentId, password);
  if (!user) return res.status(401).json({ message: 'Invalid Student ID or password' });
  res.json({ user });
});

// GET /api/student/feed
router.get('/feed', (req, res) => {
  res.json({ posts: db.posts });
});

// POST /api/student/feed  (create a post)
router.post('/feed', (req, res) => {
  const { authorId, author, content } = req.body;
  const newPost = { id: db.posts.length + 1, authorId, author, time: 'just now', content, likes: 0, comments: 0 };
  db.posts.push(newPost);
  res.status(201).json({ post: newPost });
});

module.exports = router;
