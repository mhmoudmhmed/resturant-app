import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchAllResturant, filter } from "../../redux/resturantAction";
import Button from "../common/tagBtn";
import "./index.css";

const Tags = () => {
  const { resturants } = useAppSelector((state) => state);
  const { items, filteredItems } = resturants;
  const { brands } = items;
  console.log("brands", resturants);

  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchAllResturant());
  // }, [dispatch]);

  // return unique tags
  const uniqueArray = brands?.map((item: any) => item?.tags);
  const merged = [].concat.apply([], uniqueArray);
  const newTags = Object.values(
    merged?.reduce(
      (acc: any, cur: any) => Object.assign(acc, { [cur.name]: cur }),
      {}
    )
  );

  const handleClick = (value: any) => {
    // if()
  };

  return (
    <div className="tags">
      {newTags?.map((tag: any, index: number) => (
        <Button
          value={tag.name}
          key={index}
          className="tag-wrapper"
          onClick={handleClick}
        >
          <img
            width={200}
            height={100}
            src={tag.image}
            alt={tag.name}
            className="tag-img"
          />
          <p className="tag-name"> {tag.name} </p>
        </Button>
      ))}
    </div>
  );
};

export default Tags;

// let newTags = [
//   ...new Map(merged.map((item, key) => [item[key], item])).values(),
// ];

// let newTags = Array.from(
//   new Set(
//     merged?.map((data: any) => {
//       return { ...data };
//     })
//   )
// );
// let newTags = [...new Set(merged)];
// const newTags = merged?.filter((val, id, array) => array.indexOf(val) == id);
// console.log("newTags", newTags);
