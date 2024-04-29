import { Mycontext } from "../Context/Context";
import "./SectionArticle.css";
import { Link } from "react-router-dom";

function SectionSiFi() {
  const { Bdd, articles } = Mycontext();
  const cat = Bdd[articles];
  const series = cat.series;
  const max = series.slice(0, 4);

  return (
    <>
      <h1 className="name_categorie">&nbsp;{cat.categorie} </h1>
      <section className="SectionArticle">
        {max.map((article, index) => (
          <>
            <article key={index} className="Articles">
              <figure>
                <figcaption className="fig_caption">{article.name}</figcaption>
                <img
                  className="img_series"
                  src={`../src/Pictures_series/${article.img}`}
                />
              </figure>
            </article>
          </>
        ))}
        <Link
          to="/voirtout"
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
export default SectionSiFi;
