import "./MenuBurger.css";
import { Mycontext } from "../Context/Context";

function MenuBurger() {
  const { menu, setMenu } = Mycontext();

  return (
    <>
      {menu === true && (
        <div className="MenuBurger">
          <button className="button_croix" type="button" onClick={() => setMenu(!menu)}><img className="croix" src="../src/Pictures/cross_114275.png" /></button>
          <ul className="ul_burger">
            <li className="li_burger" >Science-fiction</li>
            <li className="li_burger">Famille</li>
            <li className="li_burger">Animé</li>
          </ul>
          
            
          
        </div>
      )}
    </>
  );
}
export default MenuBurger;
