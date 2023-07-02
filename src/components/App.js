import "../css/App.css";

import Header from "./header/Header";
import { Body } from "./body/Body";
import Footer from "./footer/Footer";
function App() {
  return (
    <div class="page-container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
