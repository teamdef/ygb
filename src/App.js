import './App.css';
import Main from "./pages/Main"
import Point from "./pages/Point"
import NotFound from "./pages/NotFound"
import Room from "./pages/Room"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="container">
      <BrowserRouter>
		    <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/:regionId" element={<Point />}></Route>
          <Route path="/room/:detailId" element={<Room />}></Route>
          <Route path="/404" element={<NotFound />}></Route>
		    </Routes>
		  </BrowserRouter>
      </div>
    </div>
  );
}





export default App;
