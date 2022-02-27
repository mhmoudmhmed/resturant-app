import React from "react";
import Card from "../common/card";
import "./index.css";

const ResturantsList = ({ loading, items, value }: any) => {
  // const { brands } = items;

  if (loading) return <p>loading..</p>;
  return (
    <>
      <h1 className="header"> Resturants </h1>
      <div className="resurant-wrapper">
        {items?.brands
          ?.filter((searchedItems: any) => {
            if (value === "") {
              return searchedItems;
            } else if (
              searchedItems?.name.toLowerCase().includes(value.toLowerCase())
            ) {
              return searchedItems;
            }
          })
          .map((item: any, index: number) => {
            return <Card key={index} cardItem={item} />;
          })}
      </div>
    </>
  );
};

export default ResturantsList;
