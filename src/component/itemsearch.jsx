import '../css/itemsearch.css';
import { useContext } from 'react';
import ElementContex from './context/context';

const ItemSearch = ({element}) => {
    const elementcontext = useContext(ElementContex);

    const goToElement = ()=>{
        window.location.assign(`/element/${element.atomicNumber}`);
    }
    return ( 
        <div className="search_element" onClick={goToElement} style={{
            '--textcolor': `#${elementcontext.colorCodes.textcolor}`,
            '--backcolor': `#${elementcontext.colorCodes.backcolor}`
        }}>
            <div className="symbolbox"><h5 style={{color: `#${element.cpkHexColor}`}}>{element.symbol}</h5></div>
            <h6>{element.name}</h6>
            <h4>{element.atomicNumber}</h4> 
        </div>
     );
}
 
export default ItemSearch;