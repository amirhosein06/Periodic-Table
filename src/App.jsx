import ElementContex from './component/context/context';
import Home from './component/home';
import Search from './component/search';
import { Route, Routes } from "react-router-dom";
import { useState,useEffect } from 'react';
import NotFound from './component/notfound/notfound';
import Info from './component/info';
import SingleElement from './component/singleElement';

function App() {
  const [zoomVal, setzoomVal] = useState(0);
  const [numStatus, setnumStatus] = useState("hidden");
  const [gruopBlock, setgruopBlock] = useState([false,'']);
  const [elementState, setelementState] = useState([false,'']);
  const [ThemeState, setThemeState] = useState('Dark');
  const [colorCodes, setcolorCodes] = useState({
    masterBack: '08090a',
    scrollColor: 'fff',
    textcolor: 'fff',
    backcolor: '101214',
    backcolorSidbar: '202020',
    iconcolor: 'fff',
    symbolback: '24292e'
  });

  useEffect(()=>{
    const BrowserTheme = localStorage.getItem("ThemeState");
    if (BrowserTheme === null) {
      localStorage.setItem("ThemeState",ThemeState);
    }else if (BrowserTheme === 'Light') {
      setcolorCodes({
        masterBack: 'F8EFCE',
        scrollColor: '333',
        textcolor: '101214',
        backcolor: 'F5DCB7',
        backcolorSidbar: 'F5DCB7',
        iconcolor: '333',
        symbolback: 'F8EFCE'
      })
    }
  },[])

  const body =  document.querySelector('body');
  body.style.backgroundColor = `#${colorCodes.masterBack}`;

  return (
    <>
    <ElementContex.Provider value={{
      zoomVal: zoomVal,
      zoomValset: setzoomVal,
      numStatus: numStatus,
      numStatusset: setnumStatus,
      gruopBlock: gruopBlock,
      gruopBlockset: setgruopBlock,
      elementState: elementState,
      elementStateset: setelementState,
      colorCodes: colorCodes,
      colorCodesSet: setcolorCodes,
      ThemeStateSet: setThemeState
    }}>
      <Routes>
      <Route path="/" Component={Home} />
      <Route path="/element/:atomicNumber" Component={SingleElement} />
      <Route path="/search" Component={Search} />
      <Route path="/info" Component={Info} />
      <Route path="*" element={<NotFound/>} />
      </Routes>
    </ElementContex.Provider>
    </>
  );
}

export default App;