import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IProject from './interfaces/IProject';
import AppContext from './context/Context';

function App() {
  const [projects, setProjects] = useState<Array<IProject>>([]);

  return (
    <AppContext.Provider value={{projects, setProjects}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<></>}>
            <Route index element={<></>}/>
            <Route path="projects" element={<></>}/>
            <Route path="project/:projectId" element={<></>}/>
            <Route path="form/:formId" element={<></>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
