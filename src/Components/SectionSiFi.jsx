import { Mycontext } from "../Context/Context";
import './SectionArticle.css';

function SectionSiFi(){

   const {Bdd, articles} = Mycontext();
   const cat = Bdd[articles];
   const series = cat.series;


    return (<>
    <h1 className="name_categorie">&nbsp;{cat.categorie} </h1>
         <section className="SectionArticle">
            
            
            {series.map((article,index)=>(<>
                
                <article key={index} className="Articles">
                    <figure>
                        <figcaption className="fig_caption">{article.name}</figcaption>
                        <img className="img_series" src={`../src/Pictures_series/${article.img}`} />
                    </figure>
                </article>
                </>))}
            
        </section>
    </>)

}
export default SectionSiFi;