import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./store/actions";
import "../components/css/fetch.css";
import { Link } from "react-router-dom";

import "./css/fetch.css";

function Fetchindata({ Middle }) {
  const [todo, setTodo] = useState([]);
  const [senddata, setSenddata] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = () => {
    fetch("http://localhost:8000/data")
      .then((d) => d.json())
      .then((res) => {
        setTodo(res);
      });
  };
  const handleclick = (e) => {
    var a = e.target;
    var z = a.src;

    var ab = todo.filter((e) => e.image == z);
    dispatch(addTodo(ab));
  };

  return (
    <>
      <div className="all">
        <div className="navbar">
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/31/Epic_Games_logo.svg"
              alt="Girl in a jacket"
              width="50"
              height="40"
            ></img>
          </div>
          <div className="check">STORE</div>
          <div className="check">FAQ</div>
          <div className="check">HELP</div>
          <div className="check">UNREAL ENGINE</div>

          <div>
            <img
              src="https://www.freepnglogos.com/uploads/logo-internet-png/logo-internet-clipart-internet-logo-clipground-33.jpg"
              alt="Girl in a jacket"
              width="20"
              height="20"
            ></img>
          </div>
          <div>
            <Link to="/login">
              <img
                src="http://cdn.onlinewebfonts.com/svg/img_311846.png"
                alt="Girl in a jacket"
                width="20"
                height="20"
              ></img>
            </Link>
          </div>
          <div>
            <Link to="/wishlist">
              <img
                src="https://freepikpsd.com/file/2019/10/download-logo-png-9-Transparent-Images.png"
                alt="Girl in a jacket"
                width="30"
                height="20"
              ></img>
            </Link>
          </div>
        </div>
        <div className="main1">
          <div className="indexinput">
            <input placeholder="Search"></input>
          </div>
          <div className="bigimage">
            <img
              className="image"
              src="https://wallpaperaccess.com/full/346534.jpg"
              alt="Girl in a jacket"
              width="90%"
              height="600px"
            ></img>
          </div>

          <div className="p">Game On Sale</div>
          <div className="sail">
            {todo.map((e) => (
              <div className="salebox">
                <div onClick={handleclick}>
                  <Link to="/data">
                    <img src={e.image} width="100%" height="250px"></img>
                    <div className="divideprice">
                      <div className="namecombo">{e.name}</div>
                      <div className="namecombo">{e.feature}</div>
                      <div className="namecombo">Price: ₹{e.pricee}</div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Fetchindata;
