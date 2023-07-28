import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

const AboutUs = () => {
  let { user } = useContext(UserContext);

  return (
    <h1>
      AboutUs Page <br />
      <Link to="test">Go To Test1 :: {user}</Link>
    </h1>
  );
};

export default AboutUs;
