import { Outlet, Link, useLocation } from "react-router-dom";

const Authenticated = () => {
  const location = useLocation();

  const { pathname } = location;

  return (
    <div className="bg-slate-100">
      <div className="flex justify-center border-b-2 border-gray-500 ">
        <div className=" container p-5">
          <nav className="flex justify-between items-center ">
            <div className="font-bold text-4xl text-red-500">
              <h1>My blog.com</h1>
            </div>
            <div className="p-1">
              <ul className="list-none flex gap-16 text-xl p-1">
                <Link to={"/verified"}>
                  <li
                    className={`hover:border-b-2 p-1 hover:border-red-200 hover:duration-200 ${
                      pathname === "/verified"
                        ? "border-b-2 border-red-200 text-red-500"
                        : ""
                    }`}
                  >
                    Home{" "}
                  </li>
                </Link>
                <Link to={"/verified/blog"}>
                  <li
                    className={`hover:border-b-2 p-1  hover:border-red-200 hover:duration-200 ${
                      pathname === "/verified/blog"
                        ? "border-b-2 border-red-200 text-red-500 transition duration-300"
                        : ""
                    }`}
                  >
                    New blog
                  </li>
                </Link>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <hr />

      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Authenticated;
