import React from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

const GigCard = ({ item }) => {
  // ✅ Fetch user by userId
  const fetchGigs = async () => {
    const res = await axiosInstance.get(`/users/${item.userId}`);
    return res.data.message; // Adjust if your backend response structure differs
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["user", item.userId],
    queryFn: fetchGigs,
    enabled: !!item.userId, // ✅ Only run if userId exists
  });

  return (
    <Link to={`/gig/${item._id}`} className="link">
      <div className="gigCard">
        <img
          src={item.cover || "./img/no-image.webp"}
          alt="Gig Cover"
          onError={(e) => {
            e.target.onerror = null; // prevent infinite loop
            e.target.src = "./img/no-image.webp"; // 👈 fallback image path
          }}
        />

        <div className="info">
          {isLoading ? (
            "Loading..."
          ) : error || !data ? (
            "Something Went Wrong!"
          ) : (
            <div className="user">
              <img src={data.img} alt="User" />
              <span>{data.username}</span>
            </div>
          )}
          <p>{item.desc}</p>
          <div className="star">
            <img src="img/star.png" alt="star" />
            <span>
              {!isNaN(item.totalStars / item.starNumber) &&
                Math.round(item.totalStars / item.starNumber)}
            </span>
          </div>
        </div>
        <div className="details">
          <img src="img/heart.png" alt="heart" />
          <div className="priceSection">
            <span>Starting at</span>
            <h2>${item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
