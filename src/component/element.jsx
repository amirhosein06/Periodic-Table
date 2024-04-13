import '../css/element.css';

const Element = ({element}) => {
    return (
    <>
    <h1>{element.symbol}</h1>
    </>
    );
}
 
export default Element;


//    <img src={`https://www.astronomy.ohio-state.edu/pogge.1/TeachRes/HandSpec/${element.name.toLowerCase()}.png`} alt="Chemical Elements" /> 
//    <img src={`https://images-of-elements.com/${element.name.toLowerCase()}.jpg`} alt="images of Elements" /> 