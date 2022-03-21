import { createBrowserHistory } from "history";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/login.css";
import { browserHistory, useHref } from "react-router";
export const Login = () => {
  const [mob, setMob] = useState("");
  const [password, setPasword] = useState("");
  const [data, setData] = useState([]);

  const handlechange1 = (e) => {
    setMob(e.target.value);
  };
  const handlechange2 = (e) => {
    setPasword(e.target.value);
  };

  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    fetch("http://localhost:8000/login")
      .then((d) => d.json())
      .then((res) => {
        setData(res);
      });
  };

  const Handleclick = () => {
    var a = mob.toString();
    var b = password.toString();
    data.map((e) => {
      if (e.mobile == a && e.password == b) {
        alert("LOgin succesfullt");
      } else {
      }
    });
    useHref("/wish");
  };

  return (
    <div className="loginback">
      <div className="logingap"></div>
      <div className="loginbox">
        <div className="logintitle">Login</div>
        <input
          onChange={handlechange1}
          className="logininput"
          placeholder="Enter You Mobile Number"
        ></input>
        <input
          onChange={handlechange2}
          className="logininput"
          placeholder="Enter Paswoord"
        ></input>
        <Link to="/payment">
          <button onClick={Handleclick} className="submitbutton">
            Submit
          </button>
        </Link>

        <Link to="/signin">
          <div className="createaccount">Create Account</div>
        </Link>
      </div>
    </div>
  );
};
