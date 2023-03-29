import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./Components/Logins/Login";
import Signup from "./Components/Logins/Signup";
import Navbar from "./Components/Navbar/Index";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import SingleProduct from "./Pages/Product/SingleProduct";
import { useAuthContext } from "./Components/hooks/useAuthContext";
import HomeNavbar from "./Components/Navbar/HomeNavbar";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
      { !user ?   <Navbar /> :<HomeNavbar user={user} /> }
          <div className="views">
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Route>
                <Route path="/product" element={<Products />}>
                    <Route path="single" element={<SingleProduct />} />
                </Route>
                  <Route path="/about" element={<About />}></Route>
                  <Route path="/Contact" element={<Contact />}></Route>
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
