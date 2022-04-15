import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IProject from "./interfaces/IProject";
import AppContext from "./context/Context";
import ProjectsPage from "./components/ProjectsPage";
import ProjectPage from "./components/ProjectPage";
import FormPage from "./components/FormPage";

function App() {
  const [projects, setProjects] = useState<Array<IProject>>([]);

  function setProjectsState(state: Array<IProject>) {
    window.localStorage.setItem("projects", JSON.stringify(state));
    setProjects(state);
  }

  function getProjectsState(): Array<IProject> {
    const projectStore = window.localStorage.getItem("projects");
    if(projectStore) return JSON.parse(projectStore ? projectStore : "");
    else return [];
  }

  return (
    <AppContext.Provider value={{ setProjectsState, getProjectsState }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProjectsPage></ProjectsPage>} />
          <Route
            path="project/:projectId"
            element={<ProjectPage></ProjectPage>}
          />
          <Route path="project/:projectId/:formId" element={<FormPage></FormPage>} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
