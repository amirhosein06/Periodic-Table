import ElementContex from './component/context/context';
import Home from './component/home';
import Search from './component/search';
import './css/app.css';
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import NotFound from './component/notfound/notfound';
import Info from './component/info';

function App() {
  const [zoomVal, setzoomVal] = useState(0);
  const [numStatus, setnumStatus] = useState("hidden");

  return (
    <>
    <ElementContex.Provider value={{
      zoomVal: zoomVal,
      zoomValset: setzoomVal,
      numStatus: numStatus,
      numStatusset: setnumStatus
    }}>
      <Routes>
      <Route path="/" Component={Home} />
      <Route path="/search" Component={Search} />
      <Route path="/info" Component={Info} />
      <Route path="*" element={<NotFound/>} />
      </Routes>
    </ElementContex.Provider>
    </>
  );
}

export default App;