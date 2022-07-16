import './App.css';
import Main from "./pages/Main"
import Detail from "./pages/Detail"
import NotFound from "./pages/NotFound"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="container">
      <BrowserRouter>
		    <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/:regionId" element={<Detail />}></Route>
          <Route path="/404" element={<NotFound />}></Route>
		    </Routes>
		  </BrowserRouter>
      </div>
    </div>
  );
}





export default App;
