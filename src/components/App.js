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
function App() {
  return (
    <div class="page-container">
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
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/test1" element={<TestComp1 />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
