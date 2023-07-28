import "../css/App.css";

import Header from "./header/Header";
import { Body } from "./body/Body";
import Footer from "./footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import ErrorPage from "./ErrorPage";
import { RestaurantMenu } from "./body/RestaurantMenu";
import TestComp from "./TestComp";
import TestComp1 from "./TestComp1";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import UserContext from "../context/UserContext";
import { useState } from "react";
import Kart from "./Kart";
import KartContext from "../context/KartContext";
function App() {
  const [user, setUser] = useState("Vikram");
  const [kart, setKart] = useState([]);
  return (
    <div class="page-container">
      <UserContext.Provider value={{ user, setUser }}>
        <KartContext.Provider value={{ kart, setKart }}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/">
                <Route index={true} element={<Body />} />
                <Route path="restaurant/:resId" element={<RestaurantMenu />} />
              </Route>
              {/* <Route path="/restaurant/:resId" element={<RestaurantMenu />} /> */}
              <Route path="/about">
                <Route index={true} element={<AboutUs />} />
                <Route path="test" element={<TestComp />} />
              </Route>
              <Route
                path="/contact"
                element={
                  <ProtectedRoute>
                    <ContactUs />
                  </ProtectedRoute>
                }
              />
              <Route path="/test1" element={<TestComp1 />} />
              <Route path="/signin" element={<Login />} />
              <Route
                path="/kart"
                element={
                  <ProtectedRoute>
                    <Kart />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </KartContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
