import React from "react";

const BlogHome = () => {
  const [name, changeName] = React.useState("james");
  const [className, changeClassname] = React.useState(
    "bg-yellow-500 text-white border-none rounded-xl p-3 ml-3"
  );

  const [username, updateUserName] = React.useState(false);

  const handleCLick = (value) => {
    changeName(value);
    if (value !== name) {
      changeName(value);
      changeClassname("bg-blue-800 text-white border-none rounded-xl p-3 ml-3");
    } else {
      changeName("james");
      changeClassname(
        "bg-yellow-500 text-white border-none rounded-xl p-3 ml-3"
      );
    }
  };

  // const userInfo = [
  //   {
  //     id: 1,
  //     name: "john doe",
  //     age: 20,
  //     status: "developer",
  //   },
  //   {
  //     id: 2,
  //     name: "james doe",
  //     age: 90,
  //     status: "Lawyer",
  //   },
  // ];

  // const [showList, ishowList] = React.useState(false)

  // const items = [{ name: "John", age: "22 ", status: "single" }];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" container p-5">
        <button
          className=" bg-purple-500 text-white border-none rounded-xl p-3  mt-2"
          onClick={(value, e) => {
            handleCLick("promise");
          }}
        >
          change name
        </button>
        <h1 className={`inline ${className}`}>{name}</h1>

        <button
          onClick={() => {
            updateUserName(true);
          }}
          type="submit"
          className="bg-green-500 text-white border-none rounded-xl p-3 block mt-2"
        >
          create a user
        </button>
        {username && <h1>Promise</h1>}
      </div>
    </div>
  );
};

export default BlogHome;
