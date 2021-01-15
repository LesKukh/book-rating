import React from "react";
import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";
import guide from "./guide.jfif";
import CSS from "./CSS.jfif";
import TS from "./typescript.jfif";

export default function Color({ id, title, image, rating, onRate = (f) => f }) {
  return (
    <section>
      <h1>{title}</h1>
      <img src={id == 1 ? guide : id == 2 ? CSS : TS} />
      <div>
        <StarRating
          selectedStars={rating}
          onRate={(rating) => onRate(id, rating)}
        />
      </div>
    </section>
  );
}
