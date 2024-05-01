import "./Header.css";
import { Mycontext } from "../Context/Context";
import { Link } from "react-router-dom";

function Header(){
const {menu, setMenu} = Mycontext();
   return (<>
      <header className="header">
         <button className='menu' type='button' onClick={()=>setMenu(!menu)} >&#9776;</button>
         
         <img src="../src/Pictures/back-in-to-90-s.jpg" className='Logo'/>

      </header><Link to="/Favorie" style={{color:"white"}} >lien</Link>
    </>
  );
}
export default Header;
