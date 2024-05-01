import { Mycontext } from "../Context/Context";
import "./SectionFamille.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function SectionFamille() {
  const { Bdd, favorie, setFavorie } = Mycontext();
  const cat = Bdd[1];
  const series = cat.series;
  const max = series.slice(0, 4);

  const [Click, setClick] = useState([]);

  const fctFavorie = (Nbcat, name, index) => {
    if (!Click.includes(index)) {
      setClick([...Click, index]);
      setFavorie([...favorie, Nbcat, name]);
      // console.log(favorie);
    }
  };

  return (
    <>
      <h1 className="name_categorie_famille">&nbsp;{cat.categorie} </h1>
      <section className="SectionFamille">
        {max.map((article, index) => (
          <>
            
              <article key={index} className="Articles">
              <Link to={`/Download/1/${article.name}`}>
                <figure>
                  <figcaption className="fig_caption_famille">
                    {article.name}
                  </figcaption>
                  <img
                    className="img_series"
                    src={`../src/Pictures_series/${article.img}`}
                  />
                </figure>
                </Link>
                <p>{article.year}</p>
                <button
                type="button"
                className="button_favorie_on"
                onClick={() => {
                  fctFavorie(0, article.name, index);
                }}
              >
                <img
                  className="star"
                  src="../src/Pictures/icons8-étoile-48.png"
                />
              </button>
              </article>
            
          </>
        ))}
        <Link
          to={`/voirtout/1`}
          style={{
            color: "white",
            marginLeft: "15em",
            marginTop: "1em",
            textDecoration: "none",
          }}
        >
          voir tout
        </Link>
      </section>
    </>
  );
}
export default SectionFamille;
