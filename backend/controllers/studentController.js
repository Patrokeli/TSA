const Student = require('../models/studentModel');

const studentController = {
  getAllStudents: (req, res) => {
    Student.getAll((err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  },

  addStudent: (req, res) => {
    const { name, class: className, year } = req.body;
    if (!name || !className || !year) return res.status(400).json({ error: 'All fields required' });

    Student.create({ name, class: className, year }, (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Student added', id: results.insertId });
    });
  },

  deleteStudent: (req, res) => {
    const { id } = req.params;
    Student.delete(id, (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Student deleted' });
    });
  },
};

module.exports = studentController;
