import "./css/payment.css";
import { Link } from "react-router-dom";
export const Payment = () => {
  const handlepay = () => {
    alert("Downloded");
  };
  return (
    <>
      <div className="paymentmain">
        <div className="paygap"></div>
        <div className="paybox">
          <div className="paytitle">Credit Cart</div>
          <div className="paygap"></div>
          <div className="paygap"></div>
          <div className="paygap"></div>
          <input
            className="payinput"
            placeholder="Enter 16 Digit number "
          ></input>
          <div className="paygap"></div>
          <input className="payinput" placeholder="Enter CVV"></input>
          <div className="paygap"></div>
          <input className="payinput" placeholder="YY/MM/DD"></input>
          <div className="paygap"></div>
          <div className="paygap"></div>
          <div className="paygap"></div>
          <Link to="/">
            <button className="paybutton" onClick={handlepay}>
              Pay
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
