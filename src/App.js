import React, { useState } from "react"; // IMPORT useState
import "./styles.css";
import imagesArr from "./imageData"; // IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr

export default function App() {
  // USE useState TO CREATE  [bigImage, setBigImage], AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY

  const [bigImage, setBigImage] = useState(imagesArr[0].img);

  const userClick = (imgUrl) => {
    setBigImage(imgUrl);
  }; // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL, THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL

  const images = imagesArr.map((image, index) => {
    // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
    return (
      // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL
      <img
        className="thumb"
        src={image.img}
        alt={image.city}
        key={index}
        onClick={() => userClick(image.img)}
      />
    );
  });

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">{images}</div>
        <img src={bigImage} id="bigimage" alt="bigImage" />
      </div>
    </div>
  );
}
