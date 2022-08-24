import "./App.css";
import Header from './component/Header'
import GoTop from './component/GoTop'
import Footer from './component/Footer'
import Main from "./pages/Main";
import Point from "./pages/Point";
import NotFound from "./pages/NotFound";
import Room from "./pages/Room";
import { BrowserRouter, Routes, Route,useLocation } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header/>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/:regionName" element={<Point />}></Route>
          <Route path="/:regionName/:detailId" element={<Room />}></Route>
          <Route path="/404" element={<NotFound />}></Route>
        </Routes>
        <GoTop/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
