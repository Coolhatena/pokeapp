import React, { useState, useEffect } from "react";
import getCardData from "../helpers/getCardData";

import "../css/PokeCard.css";

export const PokeCard = ({ name, url }) => {
  const [img, setImg] = useState("");
  const [id, setId] = useState(null);
  const [types, setTypes] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCardData(url).then((data) => {
      console.log('Cargando')
      setImg(data.sprites.front_default);
      setId(data.id);
      setTypes(types => types.concat([...data.types]));
      setLoading(false);
    });
  },[url])
  

  
  return (
    <div key={id} className="card animate__fadeInUp">
      {(loading)?
        <div className="loading">
          <div className="spinner"></div>
        </div> 
        : 
        <>
          <img src={img} alt={name} />
          <p className="number">No. {id}</p>
          <p className="name">{name}</p>
        </>
      }
      
    </div>
  );
};
