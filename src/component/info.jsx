import '../css/info.css';

const Info = () => {
    return ( 
        <div className="info_container">
            <h1>Priodic Table</h1>
            <div className='created'>
               <h3>Created By <span>Amirhosein Zolfaghary</span></h3>
               <a href="https://github.com/amirhosein06"><i class="bi bi-github"></i></a>
               <a href="https://www.linkedin.com/in/amirhosein-zolfaghari06/"><i class="bi bi-linkedin"></i></a>
            </div>
            <a  href="" className="gitpage">
            <i class="bi bi-github"></i>
            see project github page
            </a>
            <a  href="https://github.com/amirhosein06?tab=repositories" className="moreproject">
            moree projects
            </a>
        </div>
     );
}
 
export default Info;