// import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="content">
      <Nav></Nav>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" Component={Home}></Route>
          <Route path="/About" Component={About}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
