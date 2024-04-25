import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Student from "./Pages/Student/Student";
import Teacher from "./Pages/Teacher/Teacher";
import Page404 from "./Pages/Page404/Page404";
import JoinClass from "./Pages/Student/JoinClass/JoinClass";
import Classrooms from "./Pages/Teacher/Classrooms/Classrooms";
import CreateClassroom from "./Pages/Teacher/CreateClassroom/CreateClassroom";
import QrGenerator from "./Pages/Teacher/QrGenerator/QrGenerator";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    axios
      .get("/api/Users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(`couldn't fetch the users: ${error}`);
      });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/*" element={<Page404 />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student" element={<Student />} />
          <Route path="/student/join-class" element={<JoinClass />} />
          {users.map((user, index) => {
            return (
              <Route
                key={index}
                path={`/teacher/${user.id}`}
                element={<Teacher />}
              />
            );
          })}
          <Route path="/teacher/classrooms" element={<Classrooms />} />
          <Route
            path="/teacher/create-classroom"
            element={<CreateClassroom />}
          />{" "}
          <Route path="/teacher/qr-generator" element={<QrGenerator />} />
          {/* still need to implement authority on accessing student or teacher page*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
