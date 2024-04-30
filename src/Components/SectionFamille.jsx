import { Mycontext } from "../Context/Context";
import "./SectionFamille.css";
import { Link } from "react-router-dom";

function SectionFamille() {
  const { Bdd } = Mycontext();
  const cat = Bdd[1];
  const series = cat.series;
  const max = series.slice(0, 4);

  return (
    <>
      <h1 className="name_categorie_famille">&nbsp;{cat.categorie} </h1>
      <section className="SectionFamille">
        {max.map((article, index) => (
          <>
            <Link to={`/Download/1/${article.name}`}>
              <article key={index} className="Articles">
                <figure>
                  <figcaption className="fig_caption_famille">
                    {article.name}
                  </figcaption>
                  <img
                    className="img_series"
                    src={`../src/Pictures_series/${article.img}`}
                  />
                </figure>
                {article.year}
              </article>
            </Link>
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
