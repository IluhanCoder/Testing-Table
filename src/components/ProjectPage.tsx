import { useContext } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../context/Context";

const ProjectPage = () => {
    const { projects, setProjects } = useContext(AppContext);
    const { projectId } = useParams();
    
    return(
        <div className="p-10">
            <table>
                {
                
                }
            </table>
        </div>
    )
}

export default ProjectPage;