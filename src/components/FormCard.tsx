import IProject from "../interfaces/IProject";
import { Link } from "react-router-dom";
import DateFormater from "./DateFormater";
import IForm from "../interfaces/IForm";

type LocalParams = {
  form: IForm;
  projectId: string | number;
};

const FormCard = (params: LocalParams) => {
  const { form, projectId } = params;
  return (
    <Link to={`/project/${projectId}/${form._id}`}>
      <div className="px-10 py-6 flex flex-col gap-2 bg-green-400 text-white rounded drop-shadow transition duration-150 ease-out hover:bg-green-300">
        <div className="flex justify-center">
          <p className="text-2xl">{form.name}</p>
        </div>
        <div>
          <p className="font-light">{DateFormater(form.creationDate)}</p>
        </div>
      </div>
    </Link>
  );
};

export default FormCard;
