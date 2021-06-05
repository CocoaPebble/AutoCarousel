import React, { useState, useEffect } from "react";
import { images } from "./ImagesData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./Carousel.css";

export default function AutoCarousel() {
  const [image, setImage] = useState(0);

  const lastPic = () => {
    image === 0 ? setImage(5) : setImage(image - 1);
  };

  const nextPic = () => {
    image === 5 ? setImage(0) : setImage(image + 1);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      nextPic();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div
      className="Carousel"
      style={{ backgroundImage: `url(${images[image].img})` }}
    >
      <div className="Inner">
        <div className="left" onClick={lastPic}>
          <ArrowBackIosIcon />
        </div>
        <div className="center">
          <h1>{images[image].title}</h1>
        </div>
        <div className="right" onClick={nextPic}>
          <ArrowForwardIosIcon />
        </div>
      </div>

      <div className="bottom">
        {images.map((pic) => (
          <div key={pic.id}>
            <img
              src={pic.img}
              alt=""
              style={image === pic.id ? { opacity: 1 } : { opacity: 0.33 }}
              onClick={() => {
                setImage(pic.id);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
