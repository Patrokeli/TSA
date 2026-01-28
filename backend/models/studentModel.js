const db = require('../db');

const Student = {
  getAll: (callback) => {
    db.query('SELECT * FROM students', callback);
  },

  create: (data, callback) => {
    db.query(
      'INSERT INTO students (name, class, year) VALUES (?, ?, ?)',
      [data.name, data.class, data.year],
      callback
    );
  },

  delete: (id, callback) => {
    db.query('DELETE FROM students WHERE id = ?', [id], callback);
  },
};

module.exports = Student;
