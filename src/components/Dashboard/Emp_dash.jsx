import Tasklist from "../../other/Tasklist"
import Tasklist1 from "../Tasklist/Tasklist"
import Header from "../../other/Header"

const Emp_dash = () => {
    return (
        <>
            <div className="flex flex-col p-10 h-screen bg-gray-900 text-white font-mono">

                <Header />
                <Tasklist />


                {/* Tasklist */}
                <Tasklist1 />


            </div>
        </>
    )
}

export default Emp_dash




{/* <div className="border border-gray-700 w-[25%] h-[80%] rounded-lg shadow-lg p-5"> */ }