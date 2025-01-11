import { useState, useEffect } from "react";


function Slider({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(null);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 5000)
      );
    }
  }, [slideDone]);

  const slideNext = () => {
    setActiveIndex((val) => {
      if (val >= images.length - 1) {
        return 0;
      } else {
        return val + 1;
      }
    });
  };

  const slidePrev = () => {
    setActiveIndex((val) => {
      if (val <= 0) {
        return images.length - 1;
      } else {
        return val - 1;
      }
    });
  };

  const AutoPlayStop = () => {
    if (timeID > 0) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  const handleBurbujaClick = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div
      className="container__slider"
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`slider__item slider__item-active-${activeIndex + 1}`}
        >
          <img src={image.url} alt={image.alt} />
          {showDescription && (
            <div className="sliderDescription">
              <p>{image.description}</p>
            </div>
          )}   
        </div>
      ))}

      <div className="container__slider__links">
        {images.map((item, index) => {
          return (
            <button
              key={index}
              className={
                activeIndex === index
                  ? "container__slider__links-small container__slider__links-small-active"
                  : "container__slider__links-small"
              }
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
              }}
            ></button>
          );
        })}
      </div>

      <button
        className="slider__btn-next"
        onClick={(e) => {
          e.preventDefault();
          slideNext();
        }}
      >
        {"> "}
      </button>
      <button
        className="slider__btn-prev"
        onClick={(e) => {
          e.preventDefault();
          slidePrev();
        }}
      >
        {" <"}
      </button>
      <button
        className="slider__burbuja"
        onClick={handleBurbujaClick}
      >
        <img src="icons/burbuja.svg" alt="" />  
      </button>
    </div>
  );
}

export default Slider;