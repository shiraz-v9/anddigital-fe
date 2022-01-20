import logo from "./assets/brandlogo1.png";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./homepage";
import Navbar from "./navbar";
import Shop from "./shop";
import Search from "./search";
import About from "./about";

import BasketPage from "./basket";

function App() {
  // favicon
  var link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.getElementsByTagName("head")[0].appendChild(link);
  }
  link.href = logo;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/shop" exact element={<Shop />}></Route>
        <Route path="/shop/:item" exact element={<Shop />}></Route>
        <Route path="/search/:product" exact element={<Search />}></Route>
        <Route path="/about" exact element={<About />}></Route>
        <Route path="/basket" exact element={<BasketPage />}></Route>
        <Route
          path="*"
          element={
            <div>
              <Navbar />
              <h1>not found</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
