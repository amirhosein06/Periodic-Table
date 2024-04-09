import ElementContex from './component/context/context';
import Home from './component/home';
import Search from './component/search';
import './css/app.css';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <ElementContex.Provider value={{}}>
      <Routes>
      <Route path="/" Component={Home} />
      <Route path="/search" Component={Search} />
      </Routes>
    </ElementContex.Provider>
    </>
  );
}

export default App;