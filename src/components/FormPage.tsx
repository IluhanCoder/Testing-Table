import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../context/Context";
import IForm from "../interfaces/IForm";
import IProject from "../interfaces/IProject";
import ITest from "../interfaces/ITest";
import DateFormater from "./DateFormater";

const FormPage = () => {
    const {projectId, formId} = useParams();
    if(!projectId || !formId) throw new Error("Programmer is invalid!");
    const [testName, setTestName] = useState<string>("");
    const [testCreator, setTestCreator] = useState<string>("");
    const [testResult, setTestResult] = useState<boolean>();
    const {getProjectsState ,setProjectsState} = useContext(AppContext);
    const projects : Array<IProject> = getProjectsState();
    const forms : Array<IForm> = projects[+projectId].forms;
    const form : IForm = forms[+formId];
    
    function addTest (){
        let newIndex = form.tests.length ? form.tests.length : 0;
        let newTest: ITest = {
          _id: newIndex,
          name: testName,
          creator: testCreator,
          success: testResult!,
          creationDate: new Date()
        };
        const tempProjects = projects;
        tempProjects[+projectId!].forms[form._id].tests.push(newTest);
        setProjectsState(tempProjects);
    }

    return(
        <div className="flex flex-col py-2 px-4 gap-4">
            <div className="flex justify-center">
                <p className="text-2xl">Form: {form.name}</p>
            </div>
            <div className="flex justify-center">
                <table className="text-left w-full">
                    <thead className="bg-green-400 text-white">
                        <td>
                            <th>ID</th>
                        </td>
                        <td className="py-2 pr-48">
                            <th>Condition</th>
                        </td>
                        <td className="py-2 pr-2">
                            <th>Creator</th>
                        </td>
                        <td className="py-2 pr-2">
                            <th>Result</th>
                        </td>
                        <td className="py-2">
                            <th>Testing Date n Time</th>
                        </td>
                    </thead>
                    <tbody className="bg-gray-100">
                    { 
                        form.tests.map((test: ITest) => {
                            return(
                                <tr>
                                    <td className="py-1">
                                        {test._id}
                                    </td>
                                    <td>
                                        {test.name}
                                    </td>
                                    <td>
                                        {test.creator}
                                    </td>
                                    <td className={"text-" + (test.success? "green-600" : "red-600")}>
                                        {test.success ? "success" : "fail"}
                                    </td>
                                    <td>
                                        {DateFormater(test.creationDate)}
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center">
                <form className="flex flex-col gap-6 p-3">
                    <div className="flex gap-2">
                        <input type="text" className="border-2 border-green-400 bg-green-100 rounded px-2" placeholder="test condition"
                            onChange={e => setTestName(e.target.value)}>
                            {/* {testName} */}
                        </input>
                        <input type="text" className="border-2 border-green-400 bg-green-100 rounded px-2" placeholder="record creator"
                            onChange={e => setTestCreator(e.target.value)}>
                            {/* {testCreator} */}
                        </input>
                        <label>
                            Test result: 
                        </label>
                        <select className="bg-green-400 rounded text-white px-2 py-1" value={testResult? "true" : "false"}
                            onChange={e => setTestResult(e.target.value === "true")}>
                            <option value="true">Success</option>
                            <option value="false">Fail</option>
                        </select>
                    </div>
                    <div className="flex place-content-center">
                        <button type="button" className="bg-green-400 rounded px-10 py-2 hover:bg-green-300 text-white text-xl"
                            onClick ={() => addTest()}>
                            Add test record
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormPage;