import "../components/css/2ndpage.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./store/actions";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Secoundpage = ({ num }) => {
  const counter = useSelector((state) => state.init);

  function clickme() {
    alert("added");
    var a = "amit";
    counter.map((e) => (a = e.image));
    const payload = {
      image: a,
    };

    fetch("http://localhost:8000/wish", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    });
  }

  return (
    <div className="all1">
      <div className="gap1"></div>
      <div className="gap1"></div>
      <div className="gap1"></div>
      {counter.map((e) => (
        <div className="main2ndpage">
          <div className="gamename">Game Name:{e.name}</div>
          <div className="leftright">
            <div className="image1">
              <img src={e.image} height="700px" width="1200px" alt="" />
            </div>
            <div className="left">
              <div className="gap1"></div>
              <div className="gap1"></div>
              <div className="name">{e.name}</div>

              <div className="leftdata">
                <div className="gap1"></div>
                <div className="gap1"></div>
                <div className="saradata">
                  <h1>Price : ₹ {e.pricee}</h1>
                  <h1>Genres : {e.feature}</h1>
                  <h1>Release Date : {e.releasedate}</h1>
                  <h1>Developer name : {e.publisher}</h1>
                </div>

                <div className="gap1"></div>
                <div className="gap1"></div>
                <div className="buy">
                  <Link to="/login">
                    <div className="buynow1">Buy Now</div>
                  </Link>
                </div>
                <div className="gap1"></div>
                <div className="gap1"></div>

                <div className="buy">
                  <button onClick={clickme} className="buynow1">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <h2>About Game</h2>
            <div className="footerdata">{e.data}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Secoundpage;
