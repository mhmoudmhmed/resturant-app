import React from "react";
import { useAppSelector } from "../../redux/hooks";
import "./index.css";

const Tags = () => {
  const { brands } = useAppSelector((state) => state.resturants.items);

  const uniqueArray = brands?.map((item: any) => item?.tags);

  const merged = [].concat.apply([], uniqueArray);

  const newTags = Object.values(
    merged?.reduce(
      (acc: any, cur: any) => Object.assign(acc, { [cur.name]: cur }),
      {}
    )
  );

  const handleClick = (e: any) => {
    console.log(e.target.value);
  };

  return (
    <div className="tags">
      {newTags?.map((tag: any, index: number) => (
        <div key={index} className="tag-wrapper" onClick={handleClick}>
          <img
            width={200}
            height={100}
            src={tag.image}
            alt={tag.name}
            className="tag-img"
          />
          <p className="tag-name"> {tag.name} </p>
        </div>
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
