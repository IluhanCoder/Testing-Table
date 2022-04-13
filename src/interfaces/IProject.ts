import IForm from "./IForm";

export default interface Project {
  _id: number;
  name: string;
  creationDate: Date;
  forms: IForm[];
}
