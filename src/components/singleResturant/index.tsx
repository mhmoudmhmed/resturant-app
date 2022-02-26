import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchAllResturant } from "../../redux/resturantAction";

import "./index.css";

const SingleResturant = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { loading, items } = useAppSelector((state) => state.resturants);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllResturant());
  }, [dispatch]);

  const singleResturantItems = items?.brands?.filter(
    (val: any) => val.name == params.id
  );

  if (loading) return <p className="loading">loading...</p>;

  return (
    <div className="row-container">
      <div className="single-card">
        {singleResturantItems?.map((data: any, index: number) => (
          <div className="card-wrapper" key={index}>
            <div className="card-info">
              <p className="desc"> {data?.description} </p>
              <p className="head"> Our Dishes </p>
              <ul>
                {data?.items?.map((item: any, index: number) => (
                  <li key={index}> {item.name} </li>
                ))}
              </ul>
              <p className="head"> Our Branches </p>
              <ul>
                {data?.branches?.map((branch: any, index: number) => (
                  <li key={index}> {branch.name} </li>
                ))}
              </ul>
            </div>
            <div className="resturant-image">
              <img src={data?.logo} width={250} height={250} alt={data?.name} />
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => navigate("/")} className="back">
        {" "}
        Back Home{" "}
      </button>
    </div>
  );
};

export default SingleResturant;
