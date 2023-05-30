import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Viewdata from "./Pages/Viewdata";
import Adddata from "./Pages/Adddata";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Editdata from "./Pages/Editdata";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Viewdata />} />
          <Route path="/adddata" element={<Adddata />} />
          <Route path="/editdata/:userid" element={<Editdata />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
