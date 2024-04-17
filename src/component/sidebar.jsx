import '../css/sidebar.css';
import { useContext,useRef,useState } from 'react';
import ElementContex from './context/context';

const Sidebar = () => {
    const elementcontext = useContext(ElementContex);
    const [rangeVal, setrangeVal] = useState(0);
    const filterDiv = useRef();
    const phaseDiv = useRef();
    const [filterOpen, setfilterOpen] = useState(false);
    const [phaseOpen, setphaseOpen] = useState(false);

    const goToSearch = ()=>{
        window.location.assign('/search');
    }
    const goToInfo = ()=>{
        window.location.assign('/info');
    }
    const handleRange = (e)=>{
       setrangeVal(e.target.value);
       elementcontext.zoomValset(e.target.value);
    }
    const handleRangeIncrease = ()=>{
        if (rangeVal < 3) {
            setrangeVal(rangeVal + 1);
            elementcontext.zoomValset(elementcontext.zoomVal + 1);
        }
    }
    const handleRangeDecrease = ()=>{
        if (rangeVal > 0) {
            setrangeVal(rangeVal - 1);
            elementcontext.zoomValset(elementcontext.zoomVal - 1);
        }
    }
    const hideAndShowNum = ()=>{
        if (elementcontext.numStatus === "hidden") {
            elementcontext.numStatusset("visible");
        }else{
            elementcontext.numStatusset("hidden");
        }
    }
    const handleOpenFilter =()=>{
        const ulChildrenArrayFilter = filterDiv.current.children[0].children;
        const ulChildrenArrayPhase = phaseDiv.current.children[0].children;

        if (filterOpen === false && phaseOpen === false) {
            filterDiv.current.style.display = "block";
            setfilterOpen(true);
        }else if (filterOpen === false && phaseOpen === true) {
            setphaseOpen(false);
            handleOpenPhase();
            filterDiv.current.style.display = "block";
            setfilterOpen(true);
            ulChildrenArrayPhase[0].classList.remove('liActive');
            [...ulChildrenArrayPhase].forEach((item)=>{
                item.classList.remove('liActive');
            });
            elementcontext.elementStateset([false,'']);
        }else{
            setfilterOpen(false);
            filterDiv.current.style.display = "none";
            ulChildrenArrayFilter[0].classList.remove('liActive');
            [...ulChildrenArrayFilter].forEach((item)=>{
                item.classList.remove('liActive');
            });
            elementcontext.gruopBlockset([false,'']);
        }
    }
    const handleOpenPhase =()=>{
        const ulChildrenArrayFilter = filterDiv.current.children[0].children;
        const ulChildrenArrayPhase = phaseDiv.current.children[0].children;

        if (filterOpen === false && phaseOpen === false) {
            phaseDiv.current.style.display = "block";
            setphaseOpen(true);
        }else if (filterOpen === true && phaseOpen === false) {
            setfilterOpen(false);
            handleOpenFilter();
            phaseDiv.current.style.display = "block";
            setphaseOpen(true);
            ulChildrenArrayFilter[0].classList.remove('liActive');
            [...ulChildrenArrayFilter].forEach((item)=>{
                item.classList.remove('liActive');
            });
            elementcontext.gruopBlockset([false,'']);
        }else{
            setphaseOpen(false);
            phaseDiv.current.style.display = "none";
            ulChildrenArrayPhase[0].classList.remove('liActive');
            [...ulChildrenArrayPhase].forEach((item)=>{
                item.classList.remove('liActive');
            });
            elementcontext.elementStateset([false,'']);
        }
    }

    const postLiDataGruopBlock = (e)=>{
        if (e.target.classList.value === '') {
        const ulChildrenArrayFilter = filterDiv.current.children[0].children;
        ulChildrenArrayFilter[0].classList.remove('liActive');
        [...ulChildrenArrayFilter].forEach((item)=>{
            item.classList.remove('liActive');
        });
        e.target.classList.add('liActive');
        elementcontext.gruopBlockset([true,e.target.dataset.gruopblok.toString()]);
        }else{
            e.target.classList.remove('liActive');
            elementcontext.gruopBlockset([false,'']);
        }
        console.log(typeof e.target.dataset.gruopblok.toString());
    }

    const postLiDataElementstate = (e)=>{
        if (e.target.classList.value === '') {
            const ulChildrenArrayPhase = phaseDiv.current.children[0].children;
            ulChildrenArrayPhase[0].classList.remove('liActive');
            [...ulChildrenArrayPhase].forEach((item)=>{
            item.classList.remove('liActive');
            });
            e.target.classList.add('liActive');
            elementcontext.elementStateset([true,e.target.dataset.elementstate.toString()]);
        }else{
            e.target.classList.remove('liActive');
            elementcontext.elementStateset([false,'']);
        }
    }

    return ( 
        <div className='sidebar'>

            <div className='icon_box'><i class="bi bi-brightness-high-fill"></i></div>

            <div className="filter" style={{display: "none"}} ref={filterDiv}>
                <ul>
                    <li data-gruopblok="post-transition metal" onClick={postLiDataGruopBlock}>post-transition metal</li>
                    <li data-gruopblok="alkali metal" onClick={postLiDataGruopBlock}>alkali metal</li>
                    <li data-gruopblok="transition metal" onClick={postLiDataGruopBlock}>transition metal</li>
                    <li data-gruopblok="metal" onClick={postLiDataGruopBlock}>metal</li>
                    <li data-gruopblok="nonmetal" onClick={postLiDataGruopBlock}>nonmetal</li>
                    <li data-gruopblok="lanthanoid" onClick={postLiDataGruopBlock}>lanthanoid</li>
                    <li data-gruopblok="metalloid" onClick={postLiDataGruopBlock}>metalloid</li>
                    <li data-gruopblok="actinoid" onClick={postLiDataGruopBlock}>actinoid</li>
                    <li data-gruopblok="noble gas" onClick={postLiDataGruopBlock}>noble gas</li>
                    <li data-gruopblok="halogen" onClick={postLiDataGruopBlock}>halogen</li>
                    <li data-gruopblok="alkaline earth metal" onClick={postLiDataGruopBlock}>alkaline earth metal</li>
                </ul>
            </div>
            <div className='icon_box' style={{fontSize: "20px"}} onClick={handleOpenFilter}>
                <i class="bi bi-filter"></i>
            </div>

            <div className="phase" style={{display: "none"}} ref={phaseDiv}>
                <ul>
                    <li data-elementState="solid" onClick={postLiDataElementstate}>solid</li>
                    <li data-elementState="liquid" onClick={postLiDataElementstate}>liquid</li>
                    <li data-elementState="gas" onClick={postLiDataElementstate}>gas</li>
                    <li data-elementState="unknown" onClick={postLiDataElementstate}>unknown</li>
                </ul>
            </div>
            <div className='icon_box' onClick={handleOpenPhase}>
            <i class="bi bi-box"></i>
            </div>

            <div className='icon_box' onClick={hideAndShowNum}><i class="bi bi-123"></i></div>

            <div className='icon_box' onClick={goToSearch}><i class="bi bi-search"></i></div>

            <div className='icon_box_input icon_box'>
            <i class="bi bi-zoom-in" onClick={handleRangeIncrease}></i>
            <div className='input_box'>
            <input type="range" max={3} defaultValue={0} value={rangeVal} onChange={handleRange}/>
            </div>
            <i class="bi bi-zoom-out" onClick={handleRangeDecrease}></i>
            </div>

            <div className='icon_box' onClick={goToInfo}><i class="bi bi-info-circle-fill"></i></div>
        </div>
     );
}
 
export default Sidebar;