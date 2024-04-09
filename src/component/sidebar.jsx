import '../css/sidebar.css';

const Sidebar = () => {

    const goToSearch = ()=>{
        window.location.assign('/search');
    }

    return ( 
        <div className='sidebar'>
            <div className='icon_box'><i class="bi bi-brightness-high-fill"></i></div>

            <div className='icon_box' style={{fontSize: "20px"}}>
                <div className="filter" style={{display: "none"}}></div>
                <i class="bi bi-filter"></i>
                </div>

            <div className='icon_box' onClick={goToSearch}><i class="bi bi-search"></i></div>

            <div className='icon_box_input icon_box'>
            <i class="bi bi-zoom-in"></i>
            <div className='input_box'>
            <input type="range" max={3} defaultValue={0}/>
            </div>
            <i class="bi bi-zoom-out"></i>
            </div>

            <div className='icon_box'><i class="bi bi-info-circle-fill"></i></div>
        </div>
     );
}
 
export default Sidebar;