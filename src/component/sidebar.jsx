import '../css/sidebar.css';

const Sidebar = () => {
    return ( 
        <div className='sidebar'>
            <div className='icon_box'><i class="bi bi-brightness-high-fill"></i></div>
            <div className='icon_box' style={{fontSize: "20px"}}><i class="bi bi-filter"></i></div>
            <div className='icon_box'><i class="bi bi-search"></i></div>
            <div className='icon_box'><i class="bi bi-info-circle-fill"></i></div>
            
            <div className='icon_box'><i class="bi bi-zoom-in"></i>
            <i class="bi bi-zoom-out"></i>
            </div>
        </div>
     );
}
 
export default Sidebar;