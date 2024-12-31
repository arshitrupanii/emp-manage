
const Header = ({data}) => {
  console.log(data);
  return (
    <div>
        <div className="flex justify-between items-center mb-5 mt-5 w-full">
                <div>
                    <h1 className="text-4xl">Hello,</h1>
                    <h1 className="text-4xl font-semibold">{data} 👋</h1>
                </div>
                <div>
                    <button className="bg-red-900 px-2 rounded-md">Log out</button>
                </div>
            </div>
    </div>
  )
}

export default Header
