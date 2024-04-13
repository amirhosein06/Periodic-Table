import '../css/element.css';

const Element = ({element}) => {
    return (
    <div className='element_container' style={{borderBottomColor: `#${element.cpkHexColor}`}}>
    <h2 className='atom_symbol' style={{color: `#${element.cpkHexColor}`}}>{element.symbol}</h2>
    <h4 className='atomic_number'>{element.atomicNumber}</h4>
    <h6 className='atom_name'>{element.name}</h6>
    </div>
    );
}
 
export default Element;



// const elementNameArray = element.name.split('');
// style={{fontSize: (elementNameArray.length * -1) + 18 + 'px'}}
//    <img src={`https://www.astronomy.ohio-state.edu/pogge.1/TeachRes/HandSpec/${element.name.toLowerCase()}.png`} alt="Chemical Elements" /> 
//    <img src={`https://images-of-elements.com/${element.name.toLowerCase()}.jpg`} alt="images of Elements" /> 