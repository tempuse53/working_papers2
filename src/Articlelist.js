
import React from 'react';
import FlipCard from './flipcard';


const Articlelist = ({ articles }) => {
  return (
    <div className="container">
      <div className="row h-10">
        <div class="col d-flex flex-column flex-md-row justify-content-around align-items-center">
        <div className="wrapper">
          {articles.map((article) => (
            <FlipCard key={article.id} article={article} />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articlelist;