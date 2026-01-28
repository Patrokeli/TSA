import StudentForm from '../components/StudentForm';
import StudentList from '../components/StudentList';


function Home() {
  return (
    <div className="max-w-5xl mx-auto mt-10 px-4 space-y-12">
      <h1 className="text-2xl font-bold text-center">
        Student Management System
      </h1>

      <StudentForm />
      <StudentList />
    </div>
  );
}

export default Home;

