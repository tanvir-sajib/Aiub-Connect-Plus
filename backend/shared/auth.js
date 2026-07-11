const db = require('./db');

// Minimal login check shared by all 4 modules' routes.
// Replace with real password hashing (bcrypt) + JWT before production use.
function findUserByRole(role, identifierField, identifierValue, password) {
  const user = db.users.find(
    (u) => u.role === role && u[identifierField] === identifierValue
  );
  if (!user) return null;
  if (user.password !== password) return null;
  const { password: _pw, ...safeUser } = user;
  return safeUser;
}

module.exports = { findUserByRole };
