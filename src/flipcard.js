import { useState } from "react"; 
import cn from "classnames";

function FlipCard({ article }) {
  const [showBack, setShowBack] = useState(false); 

  function handleClick() { 
    if (article.variant === "click") { 
      setShowBack(!showBack); 
    } 
  } 

  return (
    <div className='tc dib br3 pa3 ma2 grow bw1'>
      <div
        className="flip-card-outer"
        onClick={handleClick} 
      >
        <div
          className={cn("flip-card-inner", {
            showBack, 
            "hover-trigger": article.id > -1
          })}
        >
          <div className="card front">
            <div className="card-body">
              <p className="card-text fs-6 fw-bold">{article.centralbank}</p>
                <hr></hr>
                <vr></vr>
              <p className="card-text fs-4 fw-bold justify-content-center align-items-center ">{article.title}</p>              
              <p className="card-text fs-7 fw-bold">{article.date_text}</p>
              <p className="card-text fs-7 fw-bold justify-content-center align-items-center">{article.authors}</p>

            </div>
          </div>
          <div className="card back">
{/*            <div className="card-body d-flex">
*/}         <div className="card-body">
              <p className="card-text fs-5 fw-bold">{article.title}</p>
              
              <div className="card backtext">
                <p className="card-text fs-5 fw-bold justify-content-center align-items-center">{article.title}</p>
                <p className="card-text fs-12 fw-bold" >{article.abstract}</p>
                <p className="card-text fs-9 fw-bold">Full article:</p>
                <p className="card-text fs-9">{article.linkarticle}</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;