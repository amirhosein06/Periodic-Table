import '../css/bohrModel.css';
import { useState,useEffect } from 'react';

const BohrModel = ({electeronLayer}) => {
    const [Layer1, setLayer1] = useState(0);
    const [Layer2, setLayer2] = useState(0);
    const [Layer3, setLayer3] = useState(0);
    const [Layer4, setLayer4] = useState(0);
    const [Layer5, setLayer5] = useState(0);
    const [Layer6, setLayer6] = useState(0);
    const [Layer7, setLayer7] = useState(0);
    
    useEffect(()=>{
        const newelecterons = electeronLayer.split(" ");
        let conut1 = 0,
        conut2 = 0,
        conut3 = 0,
        conut4 = 0,
        conut5 = 0,
        conut6 = 0,
        conut7 = 0;

        switch (newelecterons[0]) {
            case "[He]":
                conut1 = 2;
                break;
            case "[Ne]":
                conut1 = 2;
                conut2 = 8;
                break;
            case "[Ar]":
                conut1 = 2;
                conut2 = 8;
                conut3 = 8;
                break;
            case "[Kr]":
                conut1 = 2;
                conut2 = 8;
                conut3 = 18;
                conut4 = 8;
                break;
            case "[Xe]":
                conut1 = 2;
                conut2 = 8;
                conut3 = 18;
                conut4 = 18;
                conut5 = 8;
                break;
            case "[Rn]":
                conut1 = 2;
                conut2 = 8;
                conut3 = 18;
                conut4 = 32;
                conut5 = 18;
                conut6 = 8;
                break;
        
            default:
                break;
        }
        newelecterons.forEach((item) => {
            const elecCounter = item.split("");
        if (elecCounter[0] !== '[') {
            if (elecCounter.length === 3) {
                switch (elecCounter[0]) {
                    case '1':
                        conut1 += Number(elecCounter[2]);
                        break;
                    case '2':
                        conut2 += Number(elecCounter[2]);
                    break;
                    case '3':
                        conut3 += Number(elecCounter[2]);
                    break;
                    case '4':
                        conut4 += Number(elecCounter[2]);
                    break;
                    case '5':
                        conut5 += Number(elecCounter[2]);
                    break;
                    case '6':
                        conut6 += Number(elecCounter[2]);
                    break;
                    case '7':
                        conut7 += Number(elecCounter[2]);
                    break;
                
                    default:
                        break;
                }
            }else{
                switch (elecCounter[0]) {
                    case '1':
                        conut1 += Number(elecCounter[2].toString() + elecCounter[3].toString())
                        break;
                    case '2':
                        conut2 += Number(elecCounter[2].toString() + elecCounter[3].toString())
                    break;
                    case '3':
                        conut3 += Number(elecCounter[2].toString() + elecCounter[3].toString())
                    break;
                    case '4':
                        conut4 += Number(elecCounter[2].toString() + elecCounter[3].toString())
                    break;
                    case '5':
                        conut5 += Number(elecCounter[2].toString() + elecCounter[3].toString())
                    break;
                    case '6':
                        conut6 += Number(elecCounter[2].toString() + elecCounter[3].toString())
                    break;
                    case '7':
                        conut7 += Number(elecCounter[2].toString() + elecCounter[3].toString())
                    break;
                
                    default:
                        break;
                }
            }
        }
    });
    setLayer1(conut1);
    setLayer2(conut2);
    setLayer3(conut3);
    setLayer4(conut4);
    setLayer5(conut5);
    setLayer6(conut6);
    setLayer7(conut7);
    },[]);
    console.log(Layer1,Layer2,Layer3,Layer4,Layer5,Layer6,Layer7);


    return ( 
        <div className="bour_model">
        <span className='line_7 line'>{Array(Layer7).fill(null).map((i,index)=>(
        (<span className='electeron' style={{rotate: (360 / (Layer7)) * index + 'deg'}}></span>)))}
        <span className='line_6 line'>{Array(Layer6).fill(null).map((i,index)=>(
        (<span className='electeron' style={{rotate: (360 / (Layer6)) * index + 'deg'}}></span>)))}
        <span className='line_5 line'>{Array(Layer5).fill(null).map((i,index)=>(
        (<span className='electeron' style={{rotate: (360 / (Layer5)) * index + 'deg'}}></span>)))}
        <span className='line_4 line'>{Array(Layer4).fill(null).map((i,index)=>(
        (<span className='electeron' style={{rotate: (360 / (Layer4)) * index + 'deg'}}></span>)))}
        <span className='line_3 line'>{Array(Layer3).fill(null).map((i,index)=>(
        (<span className='electeron' style={{rotate: (360 / (Layer3)) * index + 'deg'}}></span>)))}
        <span className='line_2 line'>{Array(Layer2).fill(null).map((i,index)=>(
        (<span className='electeron' style={{rotate: (360 / (Layer2)) * index + 'deg'}}></span>)))}
        <span className='line_1 line'>{Array(Layer1).fill(null).map((i,index)=>(
        (<span className='electeron' style={{rotate: (360 / (Layer1)) * index + 'deg'}}></span>)))}
           <span className='circle'></span>
        </span>
        </span>
        </span>
        </span>
        </span>
        </span>
        </span>
      </div>
     );
}
 
export default BohrModel;