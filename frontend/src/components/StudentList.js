import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  UserIcon,
  AcademicCapIcon,
  CalendarIcon,
  TrashIcon
} from '@heroicons/react/24/solid';

function StudentList() {
  const [students, setStudents] = useState([]);
  const [deleteId, setDeleteId] = useState(null);

  const fetchStudents = async () => {
    const res = await axios.get('http://localhost:5000/api/students');
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
    window.addEventListener('studentAdded', fetchStudents);
    return () => window.removeEventListener('studentAdded', fetchStudents);
  }, []);

  const confirmDelete = async () => {
    await axios.delete(`http://localhost:5000/api/students/${deleteId}`);
    setDeleteId(null);
    fetchStudents();
  };

  return (
    <>
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Students List
        </h2>

        {students.length === 0 ? (
          <div className="text-center text-gray-400 py-8">
            No students found
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-600 text-sm">
                  <th className="p-3 text-left">#</th>
                  <th className="p-3 text-left">Student</th>
                  <th className="p-3 text-left">Class</th>
                  <th className="p-3 text-left">Year</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {students.map((s, index) => (
                  <tr
                    key={s.id}
                    className={`border-b ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    } hover:bg-blue-50 transition`}
                  >
                    {/* Number */}
                    <td className="p-3 font-medium text-gray-500">
                      {index + 1}
                    </td>

                    {/* Student */}
                    <td className="p-3">
                      <div className="flex items-center gap-2 whitespace-nowrap">
                        <UserIcon className="w-5 h-5 text-blue-500 shrink-0" />
                        <span className="font-medium text-gray-700">
                          {s.name}
                        </span>
                      </div>
                    </td>

                    {/* Class */}
                    <td className="p-3">
                      <div className="flex items-center gap-2 whitespace-nowrap">
                        <AcademicCapIcon className="w-5 h-5 text-purple-500 shrink-0" />
                        {s.class}
                      </div>
                    </td>

                    {/* Year */}
                    <td className="p-3">
                      <div className="flex items-center gap-2 whitespace-nowrap">
                        <CalendarIcon className="w-5 h-5 text-green-500 shrink-0" />
                        {s.year}
                      </div>
                    </td>

                    {/* Action */}
                    <td className="p-3 text-center">
                      <button
                        onClick={() => setDeleteId(s.id)}
                        className="inline-flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                      >
                        <TrashIcon className="w-4 h-4" />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-xl text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Are you sure?
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Do you really want to delete this student?
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setDeleteId(null)}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition"
              >
                No, Keep
              </button>

              <button
                onClick={confirmDelete}
                className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default StudentList;
