import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../context/Context";
import IForm from "../interfaces/IForm";
import IProject from "../interfaces/IProject";
import FormCard from "./FormCard";
import { Link } from "react-router-dom";

const ProjectPage = () => {
  const { setProjectsState, getProjectsState } = useContext(AppContext);
  const projects = getProjectsState();
  const [inputValue, setInputValue] = useState<string>("");
  const { projectId } = useParams();
  let projectIndex: number = +projectId!;
  const project: IProject = projects[projectIndex];
  console.log(project);

  function addForm(formName: string) {
    let newIndex = projects[+projectId!].forms?.length ? projects.length : 0;
    let newForm: IForm = {
      _id: newIndex,
      name: formName,
      creationDate: new Date(),
      tests: [],
    };
    let tempProjects: Array<IProject> = [].concat(projects);
    tempProjects[+projectId!].forms = projects[+projectId!].forms.concat([
      newForm,
    ]);
    setProjectsState(tempProjects);
  }

  return (
    <div className="flex flex-col w-full py-2 px-10 gap-10">
      <div className="flex justify-center">
        <p className="text-4xl font-bold">Project: {project.name}</p>
      </div>
      <div className="flex justify-center">
        <p className="text-2xl">forms:</p>
      </div>
      <div className="flex flex-wrap gap-3 px-20">
        {project!.forms.map((form: IForm) => {
          return <FormCard form={form} projectId={project._id} />;
        })}
      </div>
      <div className="flex gap-5 justify-center">
        <input
          type="text"
          value={inputValue}
          className="border-2 border-green-400 bg-green-100 rounded px-1"
          placeholder="form name"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          className="bg-green-500 px-2 py-1 text-white rounded transition duration-150 ease-out hover:bg-green-300"
          onClick={() => addForm(inputValue)}
        >
          Add form
        </button>
      </div>
      <div className="flex justify-center">
        <Link to="/" className="text-green-600 underline">
          back to projects menu
        </Link>
      </div>
    </div>
  );
};

export default ProjectPage;
