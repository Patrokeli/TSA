import { useState } from 'react';
import axios from 'axios';
import {
  UserIcon,
  AcademicCapIcon,
  CalendarIcon,
  PlusIcon,
  ArrowRightIcon
} from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';

function StudentForm() {
  const [name, setName] = useState('');
  const [className, setClassName] = useState('');
  const [year, setYear] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !className || !year) return;

    setLoading(true);

    try {
      await axios.post('http://localhost:5000/api/students', {
        name,
        class: className,
        year
      });

      setShowSuccess(true);
      setName('');
      setClassName('');
      setYear('');
      window.dispatchEvent(new Event('studentAdded'));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <motion.form
  onSubmit={handleSubmit}
  className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto flex flex-col items-center gap-5 text-center"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
>
  {/* Circle Add Button */}
  <div className="w-20 h-20 rounded-full border-4 border-green-500 flex items-center justify-center">
    <PlusIcon className="w-10 h-10 text-green-500" />
  </div>

  {/* Title */}
  <h2 className="text-xl font-semibold text-gray-800">
    Add New Student
  </h2>

  {/* Sub text */}
  <p className="text-sm text-gray-400">
    All fields are required
  </p>

  {/* Inputs */}
  <div className="w-full flex flex-col gap-4 mt-4">
    <label className="flex items-center gap-2 border p-3 rounded focus-within:ring-2 focus-within:ring-green-400">
      <UserIcon className="w-5 h-5 text-gray-400" />
      <input
        className="flex-1 outline-none"
        placeholder="First Name and Last Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </label>

    <label className="flex items-center gap-2 border p-3 rounded focus-within:ring-2 focus-within:ring-green-400">
      <AcademicCapIcon className="w-5 h-5 text-gray-400" />
      <input
        className="flex-1 outline-none"
        placeholder="Class"
        value={className}
        onChange={(e) => setClassName(e.target.value)}
      />
    </label>

    <label className="flex items-center gap-2 border p-3 rounded focus-within:ring-2 focus-within:ring-green-400">
      <CalendarIcon className="w-5 h-5 text-gray-400" />
      <input
        type="number"
        className="flex-1 outline-none"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
    </label>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    disabled={loading || !name || !className || !year}
    className="mt-4 flex items-center gap-2 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition disabled:bg-green-300"
  >
    Add Student
    <ArrowRightIcon className="w-4 h-4" />
  </button>
</motion.form>


      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-xl shadow-xl text-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            >
              <h3 className="text-lg font-semibold text-green-600">
                Student added successfully!
              </h3>

              <button
                onClick={() => setShowSuccess(false)}
                className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
              >
                OK
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default StudentForm;
