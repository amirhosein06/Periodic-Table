import '../css/itemsearch.css';

const ItemSearch = ({element}) => {
    return ( 
        <div className="search_element">
            <div className="symbolbox"><h5 style={{color: `#${element.cpkHexColor}`}}>{element.symbol}</h5></div>
            <h6>{element.name}</h6>
            <h4>{element.atomicNumber}</h4> 
        </div>
     );
}
 
export default ItemSearch;