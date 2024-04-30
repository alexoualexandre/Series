import { Mycontext } from "../Context/Context";
import { useParams } from "react-router-dom";
import "./Download.css";

function Download() {
  const { Bdd } = Mycontext();

  const { cat, episode } = useParams();
  const selected_cat = Bdd[cat];
  const element = selected_cat.series.filter((elem) => elem.name === episode);
  const style_caption = ["fig_caption", "fig_caption_famille"];
  const elem = element[0];

  return (
    <>
      <section className="Section_Download">
        <article className="Articles_download">
          <figure>
            <figcaption className={style_caption[cat]}>{elem.name}</figcaption>
            <img className="img_series" src={elem.link_img} alt="no-picture" />
          </figure>
          {elem.year}
        </article>
        <div className="description">
          {elem.description}
          <div className="div_download">
            <a href={elem.link}>
              <button type="button" className="button_download">
                télécharger
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
export default Download;
