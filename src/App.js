import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="container">
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/home" element={<Homepage />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
