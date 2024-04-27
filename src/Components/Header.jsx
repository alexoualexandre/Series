import "./Header.css";
import { Mycontext } from "../Context/Context";

function Header(){
const {menu, setMenu} = Mycontext();
   return (<>
      <header className="header">
         <button className='menu' type='button' onClick={()=>setMenu(!menu)} >&#9776;</button>
         
         <img src="../src/Pictures/back-in-to-90-s.jpg" className='Logo'/>

      </header>
    </>
  );
}
export default Header;
