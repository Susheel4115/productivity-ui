import Icon from "../svg's/Logo";
import Icon2 from "../svg's/Health";
import User from "../svg's/User";
import Bell from "../svg's/Bell";
import Arrow from "../svg's/Arrow";
function Header() {
  return (
    <div className="bg-white">
      <nav className=" border-gray-200 px-2 mt-5">
        <div className="container mx-auto flex flex-wrap items-center flex-start">
          <a href="/home" className="flex float-left">
            <Icon />
          </a>

          <div
            className="hidden md:block w-full md:w-auto ml-10"
            id="mobile-menu"
          >
            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="/home1"
                  className="bg-gray-700 md:bg-transparent text-white md:hover:text-blue-700 block pl-3 pr-4 py-2 md:text-gray-700 md:p-0 rounded"
                  aria-current="page"
                >
                  Clinical
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                >
                  Business Development
                </a>
              </li>
              <li>
                <a
                  href="services"
                  className="text-blue-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                >
                  admin
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="float-right mx-auto flex flex-end m-1 -mt-8">
          <div className="mr-10 cursor-pointer">
            <Icon2 />
          </div>
          <div className="mr-5 cursor-pointer">
            <Bell />
          </div>
          <div className="mr-10 cursor-pointer">
            <User />
          </div>
        </div>
      </nav>
      <div className="flex flex-row ml-4 bg-white p-6">
        <h1 className="font-bold ml-4 -mt-1 mr-3">Home</h1>
        <Arrow />
        <h1 className="font-bold ml-4  mr-3">Clinical</h1>
        <Arrow />
        <h1 className="font-bold ml-4 r-3 text-blue-600">Productivity</h1>
      </div>
      <div className="flex flex-row ml-10 -mt-5">
        <h1 className="font-bold ml-4 cursor-pointer mr-3">Productivity</h1>
        <h1 className="font-bold ml-4 cursor-pointer underline text-blue-600 mr-3">
          Users
        </h1>
        <h1 className="font-bold ml-4 r-3 cursor-pointer">Reports</h1>
      </div>
    </div>
  );
}

export default Header;
