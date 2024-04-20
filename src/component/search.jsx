import '../css/search.css';
import data from '../data/data.json';
import { useState,useContext } from 'react';
import ItemSearch from './itemsearch';
import ElementContex from './context/context';

const Search = () => {
    const elementcontext = useContext(ElementContex);
    const [inputval, setinputval] = useState('');
    const [dataelement, setdataelement] = useState(data);

    const handleinputchange = (e)=>{
        setinputval(e.target.value);
        const newdata = [...data];
        const filteredArray = newdata.filter((i)=>
        i.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        i.symbol.toLowerCase().includes(e.target.value.toLowerCase()) ||
        i.atomicNumber == (e.target.value)
        );
        setdataelement(filteredArray);
    }

    return (
    <div className='search_container' style={{
        '--backcolor': `#${elementcontext.colorCodes.symbolback}`,
        '--textcolor': `#${elementcontext.colorCodes.textcolor}`
    }}>
         <button className="back_btn" onClick={()=>{window.history.back()}}><i class="bi bi-chevron-left"></i>Back to table</button> 
        <div className="top">
            <input type="search" placeholder="Search by elements..." value={inputval} onChange={handleinputchange}/>
        </div>
        <div className="bottom">
            {dataelement.map(item=>(
                <ItemSearch element={item} />
            ))}
        </div>
    </div> );
}
 
export default Search;