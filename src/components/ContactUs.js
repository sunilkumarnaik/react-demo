import React, { useContext } from "react";
import { Link, Route, Routes } from "react-router-dom";
import UserContext from "../context/UserContext";
import TestComp1 from "./TestComp1";

const ContactUs = () => {
  let { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1>ContactUs :: {user}</h1>
      <button onClick={() => setUser("Joiginder")}>Chagne Name</button>
      <br />
    </>
  );
};

export default ContactUs;
