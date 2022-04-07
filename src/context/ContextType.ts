import IProject from "../interfaces/IProject";

type ContextType = {
    projects?: IProject[],
    setProjects?: React.Dispatch<React.SetStateAction<IProject[]>>
}

export default ContextType;