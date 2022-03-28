import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Cards.css";

const Cards = () => {
  const [imgs, setImg] = useState([]);
  const [primeraImg, setPrimeraImg] = useState({});
  const [segundaImg, setSegundaImg] = useState({});

  const [volverPosicion, setVolverPosicion] = useState([]);
  const [deshabilitarCard, setDeshabilitarCard] = useState([]);

  const getImg = () => {
    let copyImgs = [];
    fetch("https://dog.ceo/api/breeds/image/random/10")
      .then((respuesta) => respuesta.json())
      .then((data) => {
        copyImgs = data.message.concat(data.message);
        let k = crearObjeto(shuffle(copyImgs));
        setImg(k);
      });
  };

  const crearObjeto = (arr) => {
    let ar = [];

    for (let i = 0; i < arr.length; i++) {
      let ob = {
        name: arr[i],
        number: i,
      };
      ar.push(ob);
    }
    return ar;
  };

  useEffect(() => {
    getImg();
  }, []);

  useEffect(() => {
    validarIgual();
  }, [segundaImg]);

  const shuffle = (arr) => {
    var i, j, temp;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  };

  const validarClickMismaCarta = (name,number) => {
    if (primeraImg.name === name && primeraImg.number===number) return 0;
    if (!primeraImg.name) {
      setPrimeraImg({name,number});
    } else if (!segundaImg.name) {
      setSegundaImg({name,number});
    }

    return 1;
  };

  const validarIgual = () => {
    if (primeraImg.name && segundaImg.name) {
      const igual = primeraImg.name === segundaImg.name;
      igual ? deshabilitar() : volverCard();
    }
  };

  const deshabilitar = () => {
    setDeshabilitarCard([primeraImg.number, segundaImg.number]);
    resetCard();
  };

  const volverCard = () => {
    setVolverPosicion([primeraImg.number, segundaImg.number]);
    resetCard();
  };

  const resetCard = () => {
    setSegundaImg({});
    setPrimeraImg({});
  };

  return (
    <div className="card-container">
      {imgs.map((img, i) => (
        <Card
          img={img.name}
          number={img.number}
          key={i}
          name={img.name}
          validarClickMismaCarta={validarClickMismaCarta}
          deshabilitarCard={deshabilitarCard}
          volverPosicion={volverPosicion}
        />
      ))}
    </div>
  );
};

export default Cards;
