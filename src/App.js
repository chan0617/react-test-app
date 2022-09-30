import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import MainPage from "./components/MainPage";
import ProductPage from "./components/ProductPage";
import UploadPage from "./components/UploadPage";
import "./App.css";
const App = () => {
  return (
    <>
      <div id="header">
        <img src="/images/icons/logo.png" alt="logo" />
      </div>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>

      <div id="footer">
        <Link to={"/about"}>회사소개</Link>
        <Link to={"/policy"}>이용약관</Link>
        <Link to={"/sales"}>통신판매업:123-1234</Link>
        <Link to={"/license"}>사업자등록번호:456-56-78951</Link>
      </div>

    </>
  );
};
export default App;
