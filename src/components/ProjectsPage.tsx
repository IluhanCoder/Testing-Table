import { useContext } from "react"
import AppContext from "../context/Context"
import IProject from "../interfaces/IProject";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
    const { projects, setProjects } = useContext(AppContext);
    
    return(
    <div className="flex flex-wrap gap-3 bg-gray-200">
        {projects?.map((project: IProject) => {
            return(
                <div className="p-10 flex flex-col justify-center gap-10 bg-green-400 text-white rounded drop-shadow">
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
    )
}

export default ProjectsPage