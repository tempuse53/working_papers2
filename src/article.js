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
    <div className='tc bg-light-green grow bw'>
      <div
        className="flip-card-outer"
        onClick={handleClick} 
      >
        <div
          className={cn("flip-card-inner", {
            showBack, 
            "hover-trigger": article.id > 0
          })}
        >
          <div className="card front">
            <div className="card-body d-flex justify-content-center align-items-center">
              <p className="card-text fs-1 fw-bold">{article.authors}</p>
            </div>
          </div>
          <div className="card back">
            <div className="card-body d-flex justify-content-center align-items-center">
              <p className="card-text fs-1 fw-bold">{article.abstract}</p>
              {/*<p className="card-text fs-1 fw-bold">{article.abstract}</p>*/}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;

