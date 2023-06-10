import React from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { HomePage } from "./Pages/HomePage/HomePage";
import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage } from "./Pages/AboutPage/AboutPage";
import { Suspense } from "react";
import { Loader } from "./Components/loader/loader";
import { Error404 } from "./Components/error/error";
import { ResumePage } from "./Pages/resumePage/resumePage";
import { ProjectsPage } from "./Pages/projectsPage/projectsPage";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Navigate to={"/home"} />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
