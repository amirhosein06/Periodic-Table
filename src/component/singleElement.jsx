import '../css/singleElement.css';
import { useParams } from "react-router-dom";
import data from '../data/data.json';


const SingleElement = () => {
    const routeParams = useParams();
    const element = data[routeParams.atomicNumber -1 ];

    return ( 
    <div className='singleElement_container'>
      <div className="img_box">
        <div className="link_box">
        <a href={`https://en.wikipedia.org/wiki/${element.name}`} target="_blank"><i class="bi bi-wikipedia"></i></a>
        <div className="block_name" style={{backgroundColor: `#${element.cpkHexColor}`,color: element.cpkHexColor === 'FFFFFF' && "#333"}}>{element.groupBlock}</div>
        </div>
        <img srcSet={`https://images-of-elements.com/${element.name.toLowerCase()}.jpg`} alt="Element image is not loded !" />
        <div className="name_box">
            <h4>{element.name}</h4>
            <h2 style={{color: `#${element.cpkHexColor}`}}>{element.symbol}</h2>
        </div> 
      </div>
    </div> 
    );
}
 
export default SingleElement;



{/* <img src={`https://www.astronomy.ohio-state.edu/pogge.1/TeachRes/HandSpec/${element.name.toLowerCase()}.png`} alt="Chemical Elements" /> */}