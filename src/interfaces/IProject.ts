import IForm from "./IForm";

export default interface IProject {
    _id: number;
    name: string;
    creationDate: Date;
    forms: IForm;
}