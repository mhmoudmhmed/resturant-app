import React, { useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { fetchAllResturant, filter } from "../../redux/resturantAction";
import Button from "../common/tagBtn";
import "./index.css";

const Tags = ({ click, items }: any) => {
  // const { brands } = items;

  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchAllResturant());
  // }, [dispatch]);

  // return unique tags
  const uniqueArray = items?.brands?.map((item: any) => item?.tags);
  const merged = [].concat.apply([], uniqueArray);
  const newTags = Object.values(
    merged?.reduce(
      (acc: any, cur: any) => Object.assign(acc, { [cur.name]: cur }),
      {}
    )
  );

  return (
    <div className="tags">
      {newTags?.map((tag: any, index: number) => (
        <Button
          value={tag.name}
          key={index}
          className="tag-wrapper"
          onClick={click}
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
