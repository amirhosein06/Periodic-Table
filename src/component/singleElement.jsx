import '../css/singleElement.css';
import { useParams } from "react-router-dom";
import data from '../data/data.json';
import { useContext } from 'react';
import ElementContex from './context/context';
import BohrModel from './bohrModel';


const SingleElement = () => {
    const elementcontext = useContext(ElementContex);
    const routeParams = useParams();
    const element = data[routeParams.atomicNumber -1 ];

    const createSup = ()=>{
      let newarray = element.electronicConfiguration.split(' ');
      newarray.forEach((item,index)=>{
        let finallArray = item.split('');
        if (finallArray[0] !== '[') {
          if (finallArray.length === 3) {
            finallArray[2] = (<sup>{finallArray[2]}</sup>);
          }else{
            finallArray[2] = (<sup>{finallArray[2]}</sup>);
            finallArray[3] = (<sup>{finallArray[3]}</sup>);
          }
        }
        finallArray = [...finallArray,'  '];
        if (finallArray[0] === '[') {
          newarray = finallArray;
        }else{
          newarray =  [...newarray,finallArray];
        }
      })
      return newarray;
    }
    const createRomanNumber = ()=>{
      const num = element.group;
        if (isNaN(num))
            return NaN;
        var digits = String(+num).split(""),
            key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
                   "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
                   "","I","II","III","IV","V","VI","VII","VIII","IX"],
            roman = "",
            i = 3;
        while (i--)
            roman = (key[+digits.pop() + (i * 10)] || "") + roman;
        return Array(+digits.join("") + 1).join("M") + roman;
    }
    const addkelvin = (point)=>{
      if (point !== 'unknown') {
        return point + ' K';
      }else{
        return point;
      }
    }
    const addPm = (radius)=>{
      if (radius !== 'unknown') {
        return radius + ' pm';
      }else{
        return radius;
      }
    }
    const adddensity = (dens)=>{
      if (dens !== 'unknown') {
        return dens + ' g/cm';
      }else{
        return dens;
      }
    }

    return ( 
    <div className='singleElement_container' style={{
      '--textcolor': `#${elementcontext.colorCodes.textcolor}`,
      '--backcolor': `#${elementcontext.colorCodes.backcolor}`,
      '--symbolbackcolor': `#${elementcontext.colorCodes.symbolback}`

    }}>
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
      <div className="information_box">
        <div className="info_mini">name : <span>{element.name}</span></div>
        <div className="info_mini">amotic mass : <span>{element.atomicMass} g/mol</span></div>
        <div className="info_mini">amotic number : <span>{element.atomicNumber}</span></div>
        <div className="info_mini">density : <span>{adddensity(element.density)}<sup>3</sup></span></div>
        <div className="info_mini">year discovered : <span>{element.yearDiscovered}</span></div>
        <div className="info_mini">electronic Configuration : <span>{createSup()}</span></div>
        <div className="info_mini">period : <span>{element.period}</span></div>
        <div className="info_mini">group : <span>{createRomanNumber()}</span></div>
        <div className="info_mini">block : <span>{element.block} - block</span></div>
        <div className="info_mini">phase : <span>{element.standardState}</span></div>
        <div className="info_mini">melting point : <span>{addkelvin(element.meltingPoint)}</span></div>
        <div className="info_mini">boiling point : <span>{addkelvin(element.boilingPoint)}</span></div>
        <div className="info_mini info_min_img">emission spectrum : <img src={`https://www.astronomy.ohio-state.edu/pogge.1/TeachRes/HandSpec/${element.name.toLowerCase()}.png`} alt='image is not loded !'/></div>
        <div className="info_mini">oxidation states : <span>{element.oxidationStates}</span></div>
        <div className="info_mini">electro negativity : <span>{element.electronegativity}</span></div>
        <div className="info_mini">electron affinity : <span>{element.electronAffinity}</span></div>
        <div className="info_mini">bonding type : <span>{element.bondingType}</span></div>
        <div className="info_mini">ionization energy : <span>{element.ionizationEnergy}</span></div>
        <div className="info_mini">atomic radius : <span>{addPm(element.atomicRadius)}</span></div>
        <div className="info_mini">van der waals radius : <span>{addPm(element.vanDerWaalsRadius)}</span></div>
        <BohrModel electeronLayer={element.electronicConfiguration}/>
      </div>
    </div> 
    );
}
 
export default SingleElement;