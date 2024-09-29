import { useState } from "react";
import "./register&login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, clearUser } from "../utils/UserInfoSlice";
import { addCartUser, clearCartUser } from "../utils/CartInfoSlice";

const Register = () => {
  // Variables
  const Navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    age: Number,
    email: "",
    password: "",
    mobile: Number,
  });

  const [login, setLogin] = useState({
    userId: "",
    password: "",
  });
  
  const [currentUser, setCurrentUser] = useState();
  
  const dispatch = useDispatch();
  
  
  let name, value;
  // functions
  const HandelInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const HandelLogIn = (e) => {
    name = e.target.name;
    value = e.target.value;
    setLogin({ ...login, [name]: value });
  };

  const Register = async (e) => {
    e.preventDefault();
    try {
      const Response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(user),
      }).then((res) => {
        console.log(res);
        alert("Register successful. Login to enter");
      });
    } catch (e) {
      console.log(e);
    }
  };

  const FetchCart = async (userId) => {
    try {
      const Response = await fetch("http://localhost:3000/getcart", {
        method: "POST",
        mode:"no-cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(userId),
      });

      console.log(Response);

    } catch (error) {
      console.log("Failed to get cart", error);
    }
  };

  const LogInFn = async (e) => {
    e.preventDefault();
    try {
      const Response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(login),
      });

      if (Response.ok) {
        const data = await Response.json();
        setCurrentUser(data);
        localStorage.setItem("userId", data.user._id);
        dispatch(clearUser());
        dispatch(addUser(data));
        dispatch(clearCartUser());
        dispatch(addCartUser(data.user._id));
        alert(data?.message);
        FetchCart(data.user._id);
        Navigate(`/all`);
      } else {
        const error = await Response.json();
        alert(error.message);
        console.log(error);
      }
    } catch (e) {
      console.log(e);
    }
  };

  //------------------ main render -----------------
  return (
    <form action="POST">
      <div className="h-[90vh] flex justify-center items-center">
        <div className="contactForm w-4/5 h-[50vh] m-auto">
          <h2 className=" text-2xl font-bold cursor-pointer">Register Now</h2>
          <div className="formBox Register">
            {/* take the valuse of selection to DB */}
            <div className=" h-12 w-12 flex justify-center items-center">
              <select className="h-fit text-xl border-none bg-transparent">
                <option value={"Mr"}>Mr.</option>
                <option value={"Ms"}>Ms.</option>
              </select>
            </div>
            <div className="inputBox w50">
              <input
                type="text"
                id="name"
                name="name"
                value={user.name}
                onChange={HandelInputs}
                required
              />
              <span>Username</span>
            </div>
            <div className="inputBox w50">
              <input
                type="number"
                id="age"
                name="age"
                value={user.age}
                onChange={HandelInputs}
                required
              />
              <span>Age</span>
            </div>
            <div className="inputBox w50">
              <input
                type="Mobile"
                id="mobile"
                name="mobile"
                value={user.mobile}
                onChange={HandelInputs}
                required
              />
              <span>Mobile Number</span>
            </div>
            <div className="inputBox w50">
              <input
                type="password"
                id="password for register"
                name="password"
                value={user.password}
                onChange={HandelInputs}
                required
              />
              <span>Password</span>
            </div>
            <div className="inputBox w50">
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={HandelInputs}
                required
              />
              <span>Email Address</span>
            </div>

            <div className="inputBox w100 button">
              <input
                type="submit"
                value="Register"
                name=""
                id="Register btn"
                onClick={Register}
              />
            </div>
          </div>
          <div className="formBox LogIn">
            <div className="w-full m-5 ">
              <h2 className=" text-2xl font-bold cursor-pointer">Log In</h2>
            </div>
            <div className="inputBox w50">
              <input
                type="text"
                id="userId for login"
                name="userId"
                value={login.userId}
                onChange={HandelLogIn}
                required
              />
              <span>User name</span>
            </div>
            <div className="inputBox w50">
              <input
                type="password"
                id="password for login"
                name="password"
                value={login.password}
                onChange={HandelLogIn}
                required
              />
              <span>Password</span>
            </div>
            <div className="inputBox w100 button">
              <input
                type="submit"
                value="Log In"
                name=""
                id="LogIn"
                onClick={LogInFn}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
