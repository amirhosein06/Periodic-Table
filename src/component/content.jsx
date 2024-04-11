import '../css/content.css';
import { useContext } from 'react';
import ElementContex from './context/context';

const Content = () => {
    const elementcontext = useContext(ElementContex);
    
    return (
        <div className='content_container' style={{overflow: elementcontext.zoomVal === 0 ? "hidden" : "scroll"}}> 
        <div className='content' style={{width: `${100 + (elementcontext.zoomVal * 20)}%`,
        height:`${100 + (elementcontext.zoomVal * 20)}%`}}>
            <div className='block_S_top'>
                <div className='fill_outer'></div>
            </div>
            <div className='block_S_bottom'>S</div>
            <div className='block_P'>P</div>
            <div className='block_D'>D</div>
            <div className='block_F'>F</div>
        </div>
        </div>
     );
}
 
export default Content;