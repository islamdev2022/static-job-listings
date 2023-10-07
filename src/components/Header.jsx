import close from "/images/icon-remove.svg"
const Header = ({keywords,removeKeywords, clearAll}) => {
    return ( 
    <div className="con">
<div className="header-container">
    <ul>
    {keywords.map((key, id)=>{
        return <li key={id}>
            {key}
            <button onClick={()=> removeKeywords(key)}>
                <img src={close} alt="" />
            </button>
            </li>
    })}

     </ul>
     <a href=""
 onClick={()=> clearAll()}>Clear</a>
</div>
</div>
    );
}
 
export default Header;