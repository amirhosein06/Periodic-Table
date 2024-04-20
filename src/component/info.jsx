import '../css/info.css';
import { useContext } from 'react';
import ElementContex from './context/context';

const Info = () => {
    const elementcontext = useContext(ElementContex);
    return ( 
        <div className="info_container" style={{'--textcolor': `#${elementcontext.colorCodes.textcolor}`}}>
            <h1>Periodic Table</h1>
            <div className='created'>
               <h3>Created By <span>Amirhosein Zolfaghary</span></h3>
               <img src="https://media.licdn.com/dms/image/D4E03AQEQQvOgXnqyWg/profile-displayphoto-shrink_200_200/0/1712819746436?e=1718841600&v=beta&t=bBPjO05ghrEKtNrpr3ai-luSS-ByF1J0KtO8f6a4O5s" alt="Amirhosein Zolfaghari" />
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