import '../css/search.css';

const Search = () => {
    return (
    <div className='search_container'>
         <button className="back_btn" onClick={()=>{window.history.back()}}><i class="bi bi-chevron-left"></i>Back to table</button> 
        <div className="top">
            <input type="search" placeholder="Search by elements..."/>
        </div>
        <div className="bottom"></div>
    </div> );
}
 
export default Search;