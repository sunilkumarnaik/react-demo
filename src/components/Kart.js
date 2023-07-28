import React, { useContext } from "react";
import KartContext from "../context/KartContext";

const Kart = () => {
  const { kart } = useContext(KartContext);
  let sum = 0;
  return (
    <>
      <div>
        {kart.map((res) => {
          sum = sum + res.price;
          return <div>{res.name}</div>;
        })}
      </div>
      <div> Total : {sum}</div>
    </>
  );
};

export default Kart;
