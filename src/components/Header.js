import { Link, useNavigate } from "react-router-dom";
import Logo from "../public/img/Logo_shoes_mall.png";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { clearUser } from "../utils/UserInfoSlice";

{
  // #f4f4f5 #f0f0f1 => bg
  // #35383f         => text
}

const Header = () => {
  // variables
  const [searchText, setSearchText] = useState("");
  const [activePage, setActivePage] = useState("home");
  const navigate = useNavigate();
  const user = useSelector((store) => store.UserInfo.user);
  const Cart = useSelector((store) => store.CartInfo.cart.cartItems);
  const dispatch = useDispatch();
  const buttonDesign = useRef("");

  // functions
  const HandelSubmit = (e) => {
    if (searchText) {
      navigate(`/search/${searchText}`);
      setSearchText("");
    }
  };

  const HandelRegister = () => {
    navigate(`/register`);
  };

  const HandelLogOut = async () => {
    await fetch("http://localhost:3000/logout");
    dispatch(clearUser());
    console.log(user)
    navigate(`/`);
  };

  // const HandelActivePage = (name) => {
  //   setActivePage(name);
  // };

  // useEffect(async () => {
  //   const userId = localStorage.getItem("userId");

  //   const Response = await fetch("http://localhost:3000/keepLogedIn", {
  //     method: "GET",
  //     headers: {
  //       authentication: userId,
  //     },
  //   }).catch((e)=>{
  //     console.log(e);
  //   });
  //   console.log(Response);
  //   // try {
  //   //   if (Response.success) {
  //   //     const data = await Response.json();
  //   //     dispatch(clearUser());
  //   //     dispatch(addUser(data.user));
  //   //     console.log(data);
  //   //   } else {
  //   //     const error = await Response.json();
  //   //     alert(error.message);
  //   //     console.log(error);
  //   //   }
  //   // } catch (e) {
  //   //   console.log(e);
  //   // }
  // });

  return (
    <div key={"1111"}>
      <div className="Logo flex justify-evenly items-center" key={1113}>
        <Link to={"/"} className="LOGO " key={1112}>
          <img src={Logo} alt="Logo" className="w-28" key={1114} />
        </Link>
        {user != null ? (
          <div className="flex flex-col">
            <h1 className="font-thin text-lg">
              Hello {user[0]?.user?.username}{" "}
            </h1>
            <button
              className="bg-gray-200 px-3 rounded-lg hover:bg-gray-500 hover:text-white transition duration-200 ease-in-out"
              onClick={HandelLogOut}
            >
              LogOut
            </button>
          </div>
        ) : (
          <div className="border border-black p-2 h-fit rounded-lg flex bg-[#000080] ">
            <button className="text-white" onClick={HandelRegister}>
              Sign Up/ Sign In
            </button>
          </div>
        )}
      </div>
      <div className=" w-full flex justify-evenly ">
        <div className="Navigation w-1/2 flex">
          <nav className="w-full flex justify-evenly items-center">
            <Link
              to={"/"}
              className="font-light hover:font-medium hover:scale-110 transition duration-100 ease-in-out "
            >
              Home
            </Link>
            <Link
              to={"/all"}
              className="font-light hover:font-medium hover:scale-110 transition duration-100 ease-in-out "
            >
              Collection
            </Link>
            <Link
              to={"/"}
              className="font-light hover:font-medium hover:scale-110 transition duration-100 ease-in-out "
            >
              For Him
            </Link>
            <Link
              to={"/"}
              className="font-light hover:font-medium hover:scale-110 transition duration-100 ease-in-out "
            >
              For Her
            </Link>
            <Link
              to={"/"}
              className="font-light hover:font-medium hover:scale-110 transition duration-100 ease-in-out "
            >
              For Kids
            </Link>
            <Link
              to={"/about"}
              className="font-light hover:font-medium hover:scale-110 transition duration-100 ease-in-out "
            >
              About us
            </Link>
            <Link
              to={"/cart"}
              className="font-light hover:font-medium hover:scale-110 transition duration-100 ease-in-out "
            >
              Cart {Cart.length}
            </Link>
          </nav>
        </div>
        <div className="SearchBar flex items-center">
          <input
            className="bg-white rounded-md h-8"
            placeholder="Search"
            value={searchText}
            name={"searchBar"}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onSubmit={HandelSubmit}
          />
          <button
            onClick={() => {
              HandelSubmit();
            }}
          >
            <box-icon name="search-alt"></box-icon>
          </button>
        </div>
        <div className="SocialMedia w-1/6 flex justify-evenly m-3">
          <Link
            to={""}
            className="hover:scale-110 transition duration-100 ease-in-out"
          >
            <box-icon name="facebook" type="logo" color="#35383f"></box-icon>
          </Link>
          <Link
            to={""}
            className="hover:scale-110 transition duration-100 ease-in-out"
          >
            <box-icon name="twitter" type="logo" color="#35383f"></box-icon>
          </Link>
          <Link
            to={""}
            className="hover:scale-110 transition duration-100 ease-in-out"
          >
            {" "}
            <box-icon
              name="instagram-alt"
              type="logo"
              color="#35383f"
            ></box-icon>
          </Link>
          <Link
            to={""}
            className="hover:scale-110 transition duration-100 ease-in-out"
          >
            <box-icon name="youtube" type="logo" color="#35383f"></box-icon>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
