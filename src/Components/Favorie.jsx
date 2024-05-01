import { Mycontext } from "../Context/Context";
import { Link } from "react-router-dom";

function Favorie() {
  const { Bdd, fix } = Mycontext();
  const filterBdd = Bdd.map((elem) => elem.series); 
  const newTable = filterBdd[0].concat(filterBdd[1]); // remplacer newTable par newTable1 quand il y aura les 5 catégorie
  // const newTable2 = newTable1.concat(filterBdd[2]);
  // const newTable3 = newTable2.concat(filterBdd[3]);     décommanter quand il y aura les 5 catégorie
  // const newTable4 = newTable3.concat(filterBdd[4]);
  const filtre = newTable.filter((elem) => fix.includes(elem.name)); // remplacer newTable par newTable4 quand il y aura les 5 catégorie
  
  console.log(filtre)
  return (
    <>
      <section style={{ marginTop: "5em" }} className="SectionArticle">
        {filtre.map((elem, index) => (
          <article key={index} className="Articles">
            <Link to={`/Download/${elem.section_number}/${elem.name}`}>
            <figure>
              <figcaption className={elem.style_caption} >{elem.name}</figcaption> 
              <img
                className="img_series"
                src={`../src/Pictures_series/${elem.img}`}
              />
            </figure>
            </Link>
            <p>{elem.year}</p>
            <button
                type="button"
                className="button_favorie_on"
                onClick={() => {
                  fctFavorie(0, article.name, index);
                }}
              >
                <img
                  className="star"
                  src="../src/Pictures/icons8-supprimer-la-corbeille-50.png"
                />
              </button>
          </article>
        ))}
      </section>
    </>
  );
}

export default Favorie;
