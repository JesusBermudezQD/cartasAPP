import React, { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import backface from "../../images/question.png";

import "./Card.css";

const Card = ({ img, name,number ,validarClickMismaCarta,volverPosicion,deshabilitarCard }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [event,setEvent]=useState(true)

    useEffect(()=>{
        if(volverPosicion.includes(number)){
            setTimeout(() => {
                setIsFlipped(false)
            }, 500);  
        }
    },[volverPosicion])

    useEffect(()=>{
        if(deshabilitarCard.includes(number)){
              setEvent(false)
        }   
    },[deshabilitarCard])


  const handleClick = () => {
    if (validarClickMismaCarta(name,number) !== 0) {
      setIsFlipped(!isFlipped);
    }
  };


  return (
    <div className="card">
      <ReactCardFlip isFlipped={isFlipped}>
        <img src={backface} alt="back-face" onClick={event?handleClick:null} />
        <img src={img} alt="front-face" onClick={event?handleClick:null} />
      </ReactCardFlip>
    </div>
  );
};

export default Card;
<h2>card</h2>;
