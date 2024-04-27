import "./MenuBurger.css";
import { Mycontext } from "../Context/Context";

function MenuBurger() {
  const { menu,setMenu } = Mycontext();
  
  return (
    <>{menu === true && <div className="MenuBurger">
        <button type="button" onClick={()=>setMenu(!menu)}>fermeture</button>
    </div> }</>
)
}
export default MenuBurger;
