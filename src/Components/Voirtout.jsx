import { useParams } from "react-router-dom";
import { Mycontext } from "../Context/Context";

function Voirtout() {
  const { Bdd } = Mycontext();
  const { id_section } = useParams();
  const section = Bdd[id_section];
  console.log(section);
  return (
    <>
    <h1 className="name_categorie">&nbsp;{section.categorie} </h1>
      <section className="SectionArticle">
        {section.series.map((article, index) => (
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
        
      </section>
    </>
  );
}
export default Voirtout;
