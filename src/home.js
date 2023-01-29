import React from 'react';

function Home() {
    return (
        <div className="container">
            <br></br>
            <h2 className="card-text fw-bold">Aim of website</h2>
                <p className="card-text fs-5">The time between the first publication of a working paper and its publication in an economic journal can last years. 
                Central banks provide researchers a respected platform to display their findings in the meantime. 
                Unfortunately, as these platforms are becoming more numerous, it is increasingly time-consuming to get an overview of recent
                literature developments, as it would require visiting each institution's website on a regular basis. 
                Global academic search engines (e.g., google.scholar) and repos (e.g., RePEc) are an invaluable asset in 
                literature research, but cannot provide a rapid overview of the most recently published working papers in central banking. 
                </p>
                <p className="card-text fs-5">This website has as only goal to facilitate the access to the working papers of central banks and a selection of related 
                public institutions, by only displaying the paper's abstract and the link to the institution's website that hosts the full paper.</p> 
            <br></br>

            <h2 className="card-text fw-bold">Article centralizing</h2>
                <p className="card-text fs-5">The collecting of the working papers relies on straightforward website scraping from the respective institutions.</p> 
                <p className="card-text fs-5">The covered European central banks are: </p> 
                 <ul>
                  <li className="card-text fs-5">European Central Bank (Euro)</li>
                  <li className="card-text fs-5">Banque de France (FR)</li>
                  <li className="card-text fs-5">Bundesbank (DE)</li>
                  <li className="card-text fs-5">Banca d'Italia (IT)</li>
                  <li className="card-text fs-5">Bank of Spain (ES)</li>
                  <li className="card-text fs-5">Bank of Sweden (SE)</li>
                  <li className="card-text fs-5">Bank of Austria (AT)</li>
                </ul>
                <p className="card-text fs-5">The covered non-european central banks are: </p> 
                 <ul>
                  <li className="card-text fs-5">The Federal Reserve (US)</li>
                  <li className="card-text fs-5">Bank of Canada (CA)</li>
                  <li className="card-text fs-5">Bank of Japan (JP)</li>
                </ul> 
                <p className="card-text fs-5">The related economic institions are: </p> 
                 <ul>
                  <li className="card-text fs-5">Bank of International Settlements (BIS)</li>
                </ul> 
                <p className="card-text fs-5">The Bank of England (EN), Bank of Switzerland (CH), IMF and De Nederlandsche Bank (NL) are currently not included.</p> 
            <br></br>

            <h2 className="card-text fw-bold">Contact</h2>
                <p className="card-text fs-5">For any relevant question, please contact a relevant email address.</p> 
                <br></br>
        </div>        
    );
}

export default Home;