// Simple in-memory "database" so the whole team can run the backend
// immediately without installing MySQL/Postgres/Mongo first.
// Swap this out for a real database later (each module's routes.js
// only talks to the functions below, so the swap is contained here).

let users = [
  { id: 1, name: 'Nusrat Jahan', email: 'nusrat@student.aiub.edu', role: 'student', studentId: '21-12345-1', password: '1234' },
  { id: 2, name: 'Dr. Firoz Mridha', email: 'firoz@aiub.edu', role: 'faculty', facultyId: 'FAC-2201', password: '1234' },
  { id: 3, name: 'Rafi Ahmed', email: 'rafi@alumni.aiub.edu', role: 'alumni', password: '1234' },
  { id: 4, name: 'System Admin', email: 'admin@aiub.edu', role: 'admin', username: 'admin', password: 'admin123' },
];

let posts = [
  { id: 1, authorId: 1, author: 'Nusrat Jahan', time: '2h ago', content: 'Anyone up for a CSE study group before the midterm?', likes: 12, comments: 4 },
  { id: 2, authorId: 1, author: 'Rafi Ahmed', time: '5h ago', content: 'Just published my capstone poster — feedback welcome!', likes: 20, comments: 7 },
];

let notices = [
  { id: 1, title: 'Midterm Routine Published', authorId: 2, time: '1d ago' },
];

let jobs = [
  { id: 1, title: 'Junior Frontend Developer', company: 'BrightTech Ltd.', location: 'Dhaka', postedAgo: '2 days ago' },
  { id: 2, title: 'Data Analyst Intern', company: 'InsightWorks', location: 'Remote', postedAgo: '5 days ago' },
];

let reports = [
  { id: 1, type: 'Post Reported', detail: '"Buy exam answers cheap..." flagged as spam', time: '3h ago' },
];

module.exports = {
  users, posts, notices, jobs, reports,
};
