import React, { useEffect } from "react";
import { fetchAllResturant, search } from "../../redux/resturantAction";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ResturantsList from "./resturantsList";
import Tags from "../tags/tags";

import "./index.css";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllResturant());
  }, [dispatch]);

  const { loading, items, value } = useAppSelector((state) => state.resturants);
  console.log(items);

  const handleChange = (e: any) => {
    dispatch(search(e.target.value));
  };

  const handleClick = (value: any) => {
    const filterItems = items?.brands?.filter((val: any) => {
      val?.tags.filter((v: any) => {
        if (v?.name.toLowerCase().includes(value.toLowerCase())) {
          console.log("val", val);
          return val;
        }
      });
    });
    console.log("filterItems", filterItems);
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
        <Tags click={handleClick} items={items} />
        <ResturantsList loading={loading} items={items} value={value} />
      </div>
    </div>
  );
};

export default Home;
