import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IProject from "./interfaces/IProject";
import AppContext from "./context/Context";
import ProjectsPage from "./components/ProjectsPage";
import ProjectPage from "./components/ProjectPage";

function App() {
  const [projects, setProjects] = useState<Array<IProject>>([]);

  return (
    <AppContext.Provider value={[ projects, setProjects ]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProjectsPage></ProjectsPage>} />
          <Route path="project/:projectId" element={<ProjectPage></ProjectPage>} />
          <Route path="form/:formId" element={<></>} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
