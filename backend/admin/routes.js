const express = require('express');
const router = express.Router();
const db = require('../shared/db');
const { findUserByRole } = require('../shared/auth');

// Member 4 owns this file. Add all Admin-related endpoints here.

// POST /api/admin/login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = findUserByRole('admin', 'username', username, password);
  if (!user) return res.status(401).json({ message: 'Invalid username or password' });
  res.json({ user });
});

// GET /api/admin/users
router.get('/users', (req, res) => {
  const safeUsers = db.users.map(({ password, ...u }) => u);
  res.json({ users: safeUsers });
});

// GET /api/admin/reports
router.get('/reports', (req, res) => {
  res.json({ reports: db.reports });
});

// GET /api/admin/analytics
router.get('/analytics', (req, res) => {
  res.json({
    totalUsers: db.users.length,
    totalPosts: db.posts.length,
    pendingReports: db.reports.length,
    engagementGrowth: '+18%',
  });
});

module.exports = router;
