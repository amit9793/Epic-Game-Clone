import Secoundpage from "./components/2ndpage";

import Fetchindata from "./components/fatch";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/login";
import { Signin } from "./components/signin";
import { Payment } from "./components/payment.jsx";
import { Wishlist } from "./components/wishlist";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Fetchindata />}></Route>
        <Route path="/data" element={<Secoundpage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
      </Routes>
    </div>
  );
}

export default App;
