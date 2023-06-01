import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Books from "./Components/Books";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import ShoppingCart from "./Components/ShoppingCart";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
        </Provider>
      </Router>
    </>
  );
}

export default App;
