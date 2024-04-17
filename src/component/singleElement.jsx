import '../css/singleElement.css';
import { useParams } from "react-router-dom";
import data from '../data/data.json';


const SingleElement = () => {
    const routeParams = useParams();
    const element = data[routeParams.atomicNumber -1 ];

    return ( 
    <div className='singleElement_container'>
      <div className="img_box">
        <a href={`https://en.wikipedia.org/wiki/${element.name}`} target="_blank"><i class="bi bi-wikipedia"></i></a>
        <img src={`https://images-of-elements.com/${element.name.toLowerCase()}.jpg`} alt="images of Elements" />
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