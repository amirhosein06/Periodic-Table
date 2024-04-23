import '../css/bohrModel.css';

const BohrModel = ({elementNumber}) => {

    const electeronCreator_1 = ()=>{
        if (elementNumber === 1) {
            return (<span className='electeron'></span>);
        }else{
            return Array(2).fill(null).map((i,index)=>(
                (<span className='electeron' style={{rotate: (360 / 2) * index + 'deg'}}></span>)
            ));
        }
    }
    const electeronCreator_2 = ()=>{
            if (elementNumber > 2 && elementNumber < 11) {
                return Array(elementNumber - 2).fill(null).map((i,index)=>(
                    (<span className='electeron' style={{rotate: (360 / (elementNumber - 2)) * index + 'deg'}}></span>)
                ));
            }else if (elementNumber >= 11) {
                return Array(8).fill(null).map((i,index)=>(
                    (<span className='electeron' style={{rotate: (360 / 8) * index + 'deg'}}></span>)
                ));
            }
    }
    const electeronCreator_3 = ()=>{
        if (elementNumber <= 18 && elementNumber > 10) {
            return Array(elementNumber - 10).fill(null).map((i,index)=>(
                (<span className='electeron' style={{rotate: (360 / (elementNumber - 10)) * index + 'deg'}}></span>)
            ));
        }else if (elementNumber >= 19 && elementNumber < 21) {
            return Array(8).fill(null).map((i,index)=>(
                (<span className='electeron' style={{rotate: (360 / 8) * index + 'deg'}}></span>)
            ));
        }else if (elementNumber >= 21 && elementNumber !== 24 && elementNumber < 29) {
            return Array(elementNumber - 12).fill(null).map((i,index)=>(
                (<span className='electeron' style={{rotate: (360 / (elementNumber - 12)) * index + 'deg'}}></span>)
            ));
        }else if (elementNumber === 24) {
            return Array(13).fill(null).map((i,index)=>(
                (<span className='electeron' style={{rotate: (360 / 13) * index + 'deg'}}></span>)
            ));
        }else if (elementNumber >= 29) {
            return Array(19).fill(null).map((i,index)=>(
                (<span className='electeron' style={{rotate: (360 / 18) * index + 'deg'}}></span>)
            ));
        }
}
const electeronCreator_4 = ()=>{
    if (elementNumber === 19 || elementNumber === 24 || elementNumber === 29) {
        return (<span className='electeron'></span>);
    }else if (elementNumber >= 20 && elementNumber < 29) {
        return Array(2).fill(null).map((i,index)=>(
            (<span className='electeron' style={{rotate: (360 / 2) * index + 'deg'}}></span>)
        ));
    }else if (elementNumber > 29 && elementNumber < 38) {
        return Array(elementNumber - 28).fill(null).map((i,index)=>(
            (<span className='electeron' style={{rotate: (360 / (elementNumber - 28)) * index + 'deg'}}></span>)
        ));
    }
}
    return ( 
        <div className="bour_model">
        <span className='line_7 line'>
        <span className='line_6 line'>
        <span className='line_5 line'>
        <span className='line_4 line'>{electeronCreator_4()}
        <span className='line_3 line'>{electeronCreator_3()}
        <span className='line_2 line'>{electeronCreator_2()}
        <span className='line_1 line'>{electeronCreator_1()}
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