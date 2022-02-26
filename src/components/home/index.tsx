import React, { useEffect } from "react";
import { fetchAllResturant, search } from "../../redux/resturantAction";
import { useAppDispatch } from "../../redux/hooks";
import ResturantsList from "./resturantsList";
import Tags from "../tags/tags";

import "./index.css";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllResturant());
  }, [dispatch]);

  const handleChange = (e: any) => {
    dispatch(search(e.target.value));
  };

  return (
    <div className="resturants">
      <div className="row-container">
        <div className="searchBox">
          <input
            className="searchInput"
            placeholder="What would you like to buy ?"
            onChange={handleChange}
            type="text"
          />
        </div>
        <Tags />
        <ResturantsList />
      </div>
    </div>
  );
};

export default Home;
