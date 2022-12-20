import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./css/styles.css"
import "./fontawesome-free/css/all.css";
import "./fontawesome-free/js/all.js";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import PortalLayout from "./Components/PortalLayout";
import Portal from "./Components/Portal";
import Students from "./Components/Student/Students";
import CreateStudent from "./Components/Student/CreateStudent";
import StudentProfile from "./Components/Student/StudentProfile";
import StudentEdit from "./Components/Student/StudentEdit";
import Teachers from "./Components/Teacher/Teachers";
import CreateTeacher from "./Components/Teacher/CreateTeacher";
import TeacherProfile from "./Components/Teacher/TeacherProfile";
import TeacherEdit from "./Components/Teacher/TeacherEdit";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}>
        </Route>
        <Route path="portal" element={<PortalLayout/>}>
          <Route path="welcome" element={<Portal/>} />
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="students_data" element={<Students/>} />
          <Route path="students_create" element={<CreateStudent/>} />
          <Route path="students_profile/:id" element={<StudentProfile/>} />
          <Route path="students_edit/:id" element={<StudentEdit />} />
          <Route path="teachers_data" element={<Teachers />} />
          <Route path="teachers_create" element={<CreateTeacher />} />
          <Route path="teachers_profile/:id" element={<TeacherProfile />} />
          <Route path="teachers_edit/:id" element={<TeacherEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
