import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Principal from "./pages/Principal";
import Register from "./pages/Register";
import GlobalStyle from "./style/style";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/principal" element={<Principal />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
}

export default App;
