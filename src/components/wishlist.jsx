import "./css/wishlist.css";
import { useEffect, useState } from "react";
export const Wishlist = () => {
  const [wish, setWish] = useState([]);

  useEffect(() => {
    wishTodo();
  }, []);

  const wishTodo = () => {
    fetch("http://localhost:8000/wish")
      .then((d) => d.json())
      .then((res) => {
        setWish(res);
      });
  };

  return (
    <>
      <div className="wishmain">
        <div className="wishgap"></div>
        <div className="wishtitle">Wishlist</div>
        <div className="wishbox">
          <div className="databox">
            {wish.map((e) => (
              <img src={e.image} height="200px" width="300px" alt="" />
            ))}
            {/* {wish.map((e) => (
              <div className="demo">
                <img src={e.image} width="314px" height="260px" alt="" />
                <button className="download"> Download</button>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </>
  );
};
