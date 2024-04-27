import './Header.css';
import { Mycontext } from '../Context/Context';

function Header(){
const {Bdd} = Mycontext();
   return (<>
      <header className="header">
         {Bdd[0].name}

      </header>
   </>) 
}
export default Header;