import '../css/sidebar.css';
import { useState } from 'react';
import { useContext } from 'react';
import ElementContex from './context/context';

const Sidebar = () => {
    const elementcontext = useContext(ElementContex);
    const [rangeVal, setrangeVal] = useState(0);

    const goToSearch = ()=>{
        window.location.assign('/search');
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

    return ( 
        <div className='sidebar'>
            <div className='icon_box'><i class="bi bi-brightness-high-fill"></i></div>

            <div className='icon_box' style={{fontSize: "20px"}}>
                <div className="filter" style={{display: "none"}}></div>
                <i class="bi bi-filter"></i>
                </div>

            <div className='icon_box' onClick={goToSearch}><i class="bi bi-search"></i></div>

            <div className='icon_box_input icon_box'>
            <i class="bi bi-zoom-in" onClick={handleRangeIncrease}></i>
            <div className='input_box'>
            <input type="range" max={3} defaultValue={0} value={rangeVal} onChange={handleRange}/>
            </div>
            <i class="bi bi-zoom-out" onClick={handleRangeDecrease}></i>
            </div>

            <div className='icon_box'><i class="bi bi-info-circle-fill"></i></div>
        </div>
     );
}
 
export default Sidebar;