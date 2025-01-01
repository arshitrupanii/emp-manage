import Tasklist from "../../other/Tasklist";
import Tasklist1 from "../Tasklist/Tasklist";
import Header from "../../other/Header";

const Emp_dash = ( props ) => {
    return (
        <div className="flex flex-col p-10 h-auto bg-gray-900 text-white font-mono">
            <Header data={props} />
            <Tasklist data={props.data} />
            {/* Tasklist */}
            <Tasklist1 data={props.data} />
        </div>
    );
};

export default Emp_dash;