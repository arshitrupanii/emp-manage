import Tasklist from "../../other/Tasklist";
import Tasklist1 from "../Task_card_data/Tasklist";
import Header from "../../other/Header";

const Emp_dash = ( { changeUser, data } ) => {
    return (
        <div className="flex flex-col p-10 h-auto bg-gray-900 text-white font-mono">
            <Header changeUser={changeUser} data={data} />
            {/* upper task status */}
            <Tasklist data={data} />
            {/* Task card */}
            <Tasklist1 data={data} />
        </div>
    );
};

export default Emp_dash;