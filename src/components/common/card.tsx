import React from "react";
import { Link, NavLink } from "react-router-dom";

const Card = ({ cardItem }: any) => {
  return (
    <div className="card">
      <Link to={`/resturant/${cardItem.name}`} className="navigate">
        <div className="image">
          <img
            width={100}
            height={100}
            alt={cardItem.name}
            src={cardItem.logo}
          />
        </div>
        <div className="text">
          <p className="resturant-name"> {cardItem.name} </p>
          <ul>
            {cardItem.tags.map((tag: any, index: number) => (
              <li key={index}> {tag.name}, </li>
            ))}
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default Card;
