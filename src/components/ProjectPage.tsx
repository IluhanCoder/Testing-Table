import { useContext } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../context/Context";
import IProject from "../interfaces/IProject";

const ProjectPage = () => {
    const { projects, setProjects } = useContext(AppContext);
    if(!projects) return <></>;
    const { projectId } = useParams();
    let projectIndex: number = projectId? +projectId : -1;
    const project: IProject = projects[projectIndex];
    
    return(
        <div className="p-10 flex flex-col justify-center">
            <div><p className="text-3xl">{project.name}</p></div>
            <div>
            <table>
                {
                    
                }
            </table>
            <div></div>
            </div>
        </div>
    )
}

export default ProjectPage;