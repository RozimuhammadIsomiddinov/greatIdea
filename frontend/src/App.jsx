import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import AddBook from "./pages/AddBook";
import UpdateBook from "./pages/UpdateBook";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const customStyle = {
    backgroundColor: "rgb(135, 88, 255)",
  };

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <div className="row" style={customStyle}>
          <div className="col-lg-8 offset-lg-2">
            <Routes>
              <Route path="/" exact element={<Main />} />
              <Route path="/add" element={<AddBook />} />
              <Route path="/update/:id" element={<UpdateBook />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
