import { useContext, useEffect, useState } from "react";
import AppContext from "../context/Context";
import IProject from "../interfaces/IProject";
import { Link } from "react-router-dom";
import DateFormater from "./DateFormater";
import ProjectCard from "./ProjectCard";

const ProjectsPage = () => {
  const { setProjectsState, getProjectsState } = useContext(AppContext);
  const projects: Array<IProject> = getProjectsState();
  const [inputValue, setInputValue] = useState<string>("");

  function addProject(projectName: string) {
    let newId = projects?.length ? projects.length : 0;
    let newProject: IProject = {
      _id: newId,
      name: projectName,
      creationDate: new Date(),
      forms: [],
    };
    let tempArray: Array<IProject> = [];
    tempArray = projects?.concat([newProject]);
    setProjectsState(tempArray!);
  }

  return (
    <div className="flex flex-col w-full py-2 px-32 gap-10">
      <div className="flex justify-center">
        <p className="text-3xl font-bold text-green-500">
          Ultra Mega Extra Testing Enviroment By Peychev
        </p>
      </div>
      <div className="flex justify-center">
        <p className="text-2xl">Your projects:</p>
      </div>
      <div className="flex flex-wrap gap-3 px-20">
        <ProjectsMapper projects={projects} />
      </div>
      <div className="flex gap-5 justify-center">
        <input
          type="text"
          value={inputValue}
          className="border-2 border-green-400 bg-green-100 rounded px-1"
          placeholder="project name"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          className="bg-green-500 px-2 py-1 text-white rounded transition duration-150 ease-out hover:bg-green-300"
          onClick={() => addProject(inputValue)}
        >
          Add project
        </button>
      </div>
    </div>
  );
};

type LocalProps = {
  projects: Array<IProject>;
};

const ProjectsMapper = (props: LocalProps) => {
  const { projects } = props;
  if (projects && projects.length > 0) {
    return (
      <>
        {projects.map((project: IProject) => {
          return <ProjectCard project={project} />;
        })}
      </>
    );
  } else return <div className="flex justify-center w-full text-gray-600">Currently you have no projects</div>;
};

export default ProjectsPage;
