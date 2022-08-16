import React from "react";

const DarazMallCard = ({ mainImg, catImg, Category, description }) => {
  return (
    <div className="text-center">
      <img src={catImg} alt="" srcset="" />
      <h1>{Category}</h1>
      <p>{description}</p>
    </div>
  );
};

export default DarazMallCard;
