import '../css/sidebar.css';
import { useState } from 'react';
import { useContext,useRef } from 'react';
import ElementContex from './context/context';

const Sidebar = () => {
    const elementcontext = useContext(ElementContex);
    const [rangeVal, setrangeVal] = useState(0);
    const filterDiv = useRef();
    const phaseDiv = useRef();
    const [filterOpen, setfilterOpen] = useState(false);
    const [phaseOpen, setphaseOpen] = useState(false);

    const goToSearch = ()=>{
        window.location.assign('/search');
    }
    const goToInfo = ()=>{
        window.location.assign('/info');
    }
    const handleRange = (e)=>{
       setrangeVal(e.target.value);
       elementcontext.zoomValset(e.target.value);
    }
    const handleRangeIncrease = ()=>{
        if (rangeVal < 3) {
            setrangeVal(rangeVal + 1);
            elementcontext.zoomValset(elementcontext.zoomVal + 1);
        }
    }
    const handleRangeDecrease = ()=>{
        if (rangeVal > 0) {
            setrangeVal(rangeVal - 1);
            elementcontext.zoomValset(elementcontext.zoomVal - 1);
        }
    }
    const hideAndShowNum = ()=>{
        if (elementcontext.numStatus === "hidden") {
            elementcontext.numStatusset("visible");
        }else{
            elementcontext.numStatusset("hidden");
        }
    }
    const handleOpenFilter =()=>{
        if (filterOpen === false && phaseOpen === false) {
            filterDiv.current.style.display = "block";
            setfilterOpen(true);
        }else{
            filterDiv.current.style.display = "none";
            setfilterOpen(false);
        }
    }
    const handleOpenPhase =()=>{
        if (filterOpen === false && phaseOpen === false) {
            phaseDiv.current.style.display = "block";
            setphaseOpen(true);
        }else{
            phaseDiv.current.style.display = "none";
            setphaseOpen(false);
        }
    }

    return ( 
        <div className='sidebar'>

            <div className='icon_box'><i class="bi bi-brightness-high-fill"></i></div>

            <div className="filter" style={{display: "none"}} ref={filterDiv}>
                <ul>
                    <li>post-transition metal</li>
                    <li>alkali metal</li>
                    <li>transition metal</li>
                    <li>metal</li>
                    <li>nonmetal</li>
                    <li>lanthanoid</li>
                    <li>metalloid</li>
                    <li>actinoid</li>
                    <li>noble gas</li>
                    <li>halogen</li>
                    <li>alkaline earth metal</li>
                </ul>
            </div>
            <div className='icon_box' style={{fontSize: "20px"}} onClick={handleOpenFilter}>
                <i class="bi bi-filter"></i>
            </div>

            <div className="phase" style={{display: "none"}} ref={phaseDiv}>
                <ul>
                    <li>solid</li>
                    <li>liquid</li>
                    <li>gas</li>
                    <li>unknown</li>
                </ul>
            </div>
            <div className='icon_box' onClick={handleOpenPhase}>
            <i class="bi bi-box"></i>
            </div>

            <div className='icon_box' onClick={hideAndShowNum}><i class="bi bi-123"></i></div>

            <div className='icon_box' onClick={goToSearch}><i class="bi bi-search"></i></div>

            <div className='icon_box_input icon_box'>
            <i class="bi bi-zoom-in" onClick={handleRangeIncrease}></i>
            <div className='input_box'>
            <input type="range" max={3} defaultValue={0} value={rangeVal} onChange={handleRange}/>
            </div>
            <i class="bi bi-zoom-out" onClick={handleRangeDecrease}></i>
            </div>

            <div className='icon_box' onClick={goToInfo}><i class="bi bi-info-circle-fill"></i></div>
        </div>
     );
}
 
export default Sidebar;