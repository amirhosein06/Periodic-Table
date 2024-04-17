import '../css/element.css';
import { useContext,useEffect,useRef } from 'react';
import ElementContex from './context/context';

const Element = ({element}) => {
    const elementContainer = useRef();
    const elementcontext = useContext(ElementContex);
    useEffect(()=>{
        if (elementcontext.gruopBlock[0] === true) {
            if (elementcontext.gruopBlock[1] !== element.groupBlock) {
                elementContainer.current.style.opacity = '0.1';
            }else{
                elementContainer.current.style.opacity = '1';
            }
        }

        if (elementcontext.elementState[0] === true) {
            if (elementcontext.elementState[1] !== element.standardState) {
                elementContainer.current.style.opacity = '0.1';
            }else{
                elementContainer.current.style.opacity = '1';
            }
        }else if (elementcontext.elementState[0] === false && elementcontext.gruopBlock[0] === false) {
            elementContainer.current.style.opacity = '1';
        }
    });

    return (
    <div className='element_container' style={{borderBottomColor: `#${element.cpkHexColor}`}} ref={elementContainer}>
    <h2 className='atom_symbol' style={{color: `#${element.cpkHexColor}`,fontSize: elementcontext.zoomVal * 4 + 27 + 'px'}}>{element.symbol}</h2>
    <h4 className='atomic_number' style={{fontSize: elementcontext.zoomVal * 2 + 11 + 'px'}}>{element.atomicNumber}</h4>
    <h6 className='atom_name' style={{fontSize: elementcontext.zoomVal * 2.5 + 8 + 'px'}}>{element.name}</h6>
    </div>
    );
}
 

export default Element;




//    <img src={`https://www.astronomy.ohio-state.edu/pogge.1/TeachRes/HandSpec/${element.name.toLowerCase()}.png`} alt="Chemical Elements" /> 
//    <img src={`https://images-of-elements.com/${element.name.toLowerCase()}.jpg`} alt="images of Elements" /> 