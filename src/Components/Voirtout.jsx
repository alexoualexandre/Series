import { Link, useParams } from "react-router-dom";
import { Mycontext } from "../Context/Context";

function Voirtout() {
  const { Bdd } = Mycontext();
  const { id_section } = useParams();
  const section = Bdd[id_section];

  const style_caption = ["fig_caption", "fig_caption_famille"];
  const style_name_categorie = ["name_categorie", "name_categorie_famille"];

  return (
    <>
      <h1 className={style_name_categorie[id_section]}>
        &nbsp;{section.categorie}{" "}
      </h1>

      <section className="SectionArticle">
        {section.series.map((article, index) => (
          <>
            <Link to={`../Download/${id_section}/${article.name}`}>
              <article key={index} className="Articles">
                <figure>
                  <figcaption className={style_caption[id_section]}>
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
      </section>
    </>
  );
}
export default Voirtout;
