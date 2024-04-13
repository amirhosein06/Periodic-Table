import '../css/content.css';
import { useContext,useEffect,useState } from 'react';
import ElementContex from './context/context';
import data from '../data/data.json';
import Element from './element';

const Content = () => {
    const elementcontext = useContext(ElementContex);
    const [datastate, setdatastate] = useState(data);
    const [blockedDtata, setblockedDtata] = useState({});

    // data filtering with block
    useEffect(() => {
        const copy_St = [...datastate];
        const blockSt = copy_St.filter(i=>i.atomicNumber < 3);
        const copy_S = [...datastate];
        const blockS = copy_S.filter(i=>i.block === "s" && i.atomicNumber > 2);
        const copy_P = [...datastate];
        const blockP = copy_P.filter(i=>i.block === "p");
        const copy_D = [...datastate];
        const blockD = copy_D.filter(i=>i.block === "d");
        const copy_F = [...datastate];
        const blockF = copy_F.filter(i=>i.block === "f");
        setblockedDtata({
            blockS: blockS,
            blockP: blockP,
            blockD: blockD,
            blockF: blockF,
            blockSt: blockSt
        })
    }, []);
    
    return (
        <div className='content_container' style={{overflow: elementcontext.zoomVal === 0 ? "hidden" : "scroll"}}> 
        <div className='content' style={{width: `${100 + (elementcontext.zoomVal * 20)}%`,
        height:`${100 + (elementcontext.zoomVal * 20)}%`}}>
            <div className='block_S_top'>
            {blockedDtata.blockSt?.map((item,index)=>(
                    <Element element={item} key={index}/>
                ))}
                <div className='fill_outer'></div>
            </div>
            <div className='block_S_bottom'>{
                blockedDtata.blockS?.map((item,index)=>(
                    <Element element={item} key={index}/>
                ))
            }</div>
            <div className='block_P'>
            {
                blockedDtata.blockP?.map((item,index)=>(
                    <Element element={item} key={index}/>
                ))
            }
            </div>
            <div className='block_D'>
            {
                blockedDtata.blockD?.map((item,index)=>(
                    <Element element={item} key={index}/>
                ))
            }
            </div>
            <div className='block_F'>
            {
                blockedDtata.blockF?.map((item,index)=>(
                    <Element element={item} key={index}/>
                ))
            }
            </div>

            <div className="num_v" style={{visibility: elementcontext.numStatus}} >
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
            </div>

            <div className="num_h" style={{visibility: elementcontext.numStatus}}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>
                <div>16</div>
                <div>17</div>
                <div>18</div>
            </div>
        </div>
        </div>
     );
}
 
export default Content;