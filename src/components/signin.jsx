import { useState } from "react";
import "./css/signin.css";
import {Link} from "react-router-dom"
export const Signin = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const handlechangename = (e) => {
    setName(e.target.value);
  };
  const handlechangemobile = (e) => {
    setMobile(e.target.value);
  };
  const handlechangepassword = (e) => {
    setPassword(e.target.value);
  };
  const submit = () => {
    if (mobile.length < 10 || mobile.length > 10) {
      alert("Mobile number is wrong");
    } else {
      const payload = {
        name: name,
        mobile: mobile,
        password: password,
        status: false,
      };
      fetch("http://localhost:8000/login", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "content-type": "application/json",
        },
      });
    }
  };

  return (
    <>
      <div className="signinmain">
        <div className="signingap"></div>
        <div className="signinbox">
          <div className="signintitle">Signup</div>
          <div className="signinput">
            <input
              onChange={handlechangename}
              className="signininput"
              placeholder="Enter Name"
            ></input>
            <div className="signingap1"></div>
            <input className="signininput" placeholder="Enter Gmail"></input>
            <div className="signingap1"></div>
            <input
              onChange={handlechangemobile}
              className="signininput"
              placeholder="Enter mobile Number"
            ></input>
            <div className="signingap1"></div>
            <input
              onChange={handlechangepassword}
              className="signininput"
              placeholder="Enter Password"
            ></input>
          </div>
          <div>
            <button onClick={submit} className="signinsubmit">
              Submit
            </button>
          </div>
          <Link to="/login">
            <div className="signinlogin">Login</div>
          </Link>
        </div>
      </div>
    </>
  );
};
