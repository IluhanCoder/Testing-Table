import { useContext, useState } from "react"
import AppContext from "../context/Context"
import IProject from "../interfaces/IProject";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
    const { projects, setProjects } = useContext(AppContext);
    const [ inputValue, setInputValue ] = useState<string>("");
    
    function addProject(projectName: string) {
        let newIndex = ( projects?.length? projects.length : -1 ) + 1;
    
        let newProject: IProject = {
            _id: newIndex,
            name: projectName,
            creationDate: new Date(),
            forms: []
        }
        let newArray = projects?.push()
    }
    
    return(
        <div className="flex flex-col justify-center">
            <p>ppapa</p>
            <div className="flex flex-wrap gap-3 bg-gray-200">
                {projects?.map((project: IProject) => {
                    return(
                        <div key={project._id} className="p-10 flex flex-col justify-center gap-10 bg-green-400 text-white rounded drop-shadow">
                            <div className="flex flex-col">
                                <div><p>{project.name}</p></div>
                                <div><p>{project.creationDate}</p></div>
                            </div>
                            <div>
                                <Link to={"/project/" + project._id} className="bg-gray-700 hover:bg-gray-300 p-2 rounded">
                                    Open
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="flex gap-3">
                <input type="text" value={inputValue}/>
                <button onClick={() => addProject(inputValue)}>Add project</button>
            </div>
        </div>
    )
}

export default ProjectsPage