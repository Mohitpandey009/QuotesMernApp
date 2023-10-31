import React, { useEffect, useState } from "react";
import axios from "axios";
import "./quots.css";
function quots() {
  const [quots, setquots] = useState({
    text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison",
  });

  useEffect(() => {
    getQuots();
  }, []);

  const getQuots = () => {
    axios.get("http://localhost:3000/getdata")
      .then((res) => {
        let Quote = res.data;
        let select = Math.floor(Math.random() * Quote.length);
        let randomQuote = Quote[select];
        // console.log(randomQuote);
        setquots(randomQuote);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const rClick = () => {
    getQuots();
  };

 
  return (

    <>
    <div className="card nav" >
    <div className="card-header">Daily Quote's</div>
    <div className="card-body">
      <h5 className="card-title">- {quots.author}</h5>
      <p className="card-text">
      {quots.text}
      </p>
      <button className="btn btn-primary " onClick={rClick}>New Quote</button>

    </div>
   
  </div>
  </>
  );
}

export default quots;
