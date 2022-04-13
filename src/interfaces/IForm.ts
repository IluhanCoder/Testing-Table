import ITest from "./ITest";

export default interface IForm {
  _id: number;
  name: string;
  creationDate: Date;
  tests: ITest[];
}
