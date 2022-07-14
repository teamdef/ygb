import './App.css';
import Main from "./pages/Main"
import Detail from "./pages/Detail"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="container">
      <BrowserRouter>
		    <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/detail/:regionId" element={<Detail />}></Route>
		    </Routes>
		  </BrowserRouter>
      </div>
    </div>
  );
}





export default App;
