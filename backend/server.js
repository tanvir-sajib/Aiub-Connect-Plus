const express = require('express');
const cors = require('cors');

const studentRoutes = require('./student/routes');
const facultyRoutes = require('./faculty/routes');
const alumniRoutes = require('./alumni/routes');
const adminRoutes = require('./admin/routes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'AIUB Connect+ API is running.' });
});

// Each module mounted under its own path — matches frontend/shared/api.js
app.use('/api/student', studentRoutes);
app.use('/api/faculty', facultyRoutes);
app.use('/api/alumni', alumniRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`AIUB Connect+ backend running at http://localhost:${PORT}`);
});
