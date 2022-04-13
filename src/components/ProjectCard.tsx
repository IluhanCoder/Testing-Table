import IProject from "../interfaces/IProject";
import { Link } from "react-router-dom";
import DateFormater from "./DateFormater";

type LocalParams = {
    project: IProject;
}

const ProjectCard = (params: LocalParams) => {
    const {project} = params;
    return (
        <Link to={'/project/' + project._id}>
            <div
                  className="px-10 py-6 flex flex-col gap-2 bg-green-400 text-white rounded drop-shadow transition duration-150 ease-out hover:bg-green-300"
            >
                    <div className="flex justify-center">
                      <p className="text-2xl">{project.name}</p>
                    </div>
                    <div>
                      <p className="font-light">{DateFormater(project.creationDate)}</p>
                    </div>
            </div>
        </Link>
    )
}

export default ProjectCard;