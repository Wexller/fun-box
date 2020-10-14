import React, { useState } from "react";
import photo from "./images/Photo.png";

const Product = ({ product }) => {
  const [selected, setSelected] = useState(false);
  const [state, setState] = useState("default");
  const [disabled, setDisabled] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);

  function productClickHandler(e) {
    if (disabled) return null;

    setSelected((selected) => {
      setState(!selected ? "selected" : "default");

      if (!selected) {
        setMouseOver(false);
      }

      return !selected;
    });

    if (e.target.dataset["type"] && e.target.dataset["type"] === "link") {
      setMouseOver(true);
    }
  }

  const productEvents = {
    onClick: productClickHandler,
    onMouseLeave: () => setMouseOver(true),
  };

  function activeClickHandler() {
    setDisabled((disabled) => {
      setState(!disabled ? "disabled" : selected ? "selected" : "default");
      return !disabled;
    });
  }

  return (
    <div className="product-block">
      <div
        className={`product ${selected && !disabled ? " selected" : ""}${
          mouseOver ? " mouse-over" : ""
        }${disabled ? " disabled" : ""}`}
        {...productEvents}
      >
        <div className="header">
          <div className="text-default">{product["default"]["header"]}</div>
          <div className="text-selected">{product["selected"]["header"]}</div>
        </div>
        <div className="body">
          <div className="product-title">{product["title"]}</div>
          <div className="product-subtitle">{product["subtitle"]}</div>

          <div className="additional-description">
            {product["additional"].map((item, idx) => (
              <div key={idx}>{item}</div>
            ))}
          </div>

          <div className="weight">
            <div className="amount">{product["weight"]["number"]}</div>
            <div className="measure">{product["weight"]["measure"]}</div>
          </div>

          <div className="picture">
            <img src={photo} alt={product["title"]} />
          </div>
        </div>
      </div>

      <div className={`description${disabled ? " disabled" : ""}`}>
        {product[state]["description"] ? (
          product[state]["description"]
        ) : (
          <>
            Чего сидишь? Порадуй котэ,&nbsp;
            <span>
              <a {...productEvents} data-type="link">
                купи
              </a>
              .
            </span>
          </>
        )}
      </div>

      <div className="control-block">
        <button onClick={activeClickHandler}>
          {disabled ? "Активировать" : "Деактивировать"}
        </button>
      </div>
    </div>
  );
};

export default Product;
