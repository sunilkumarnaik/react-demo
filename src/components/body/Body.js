import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../../css/body.css";
import { restaurantData } from "../../utils/consants";
function Body() {
  let [resData, setResData] = useState(restaurantData[0]?.data?.data?.cards);
  let [restaurantsData] = useState(restaurantData[0]?.data?.data?.cards);

  let [searchText, setSearchText] = useState("");

  let filterTopRatedRestaurant = () => {
    let topRatedRestaurant = restaurantsData.filter(
      (restaurant) => restaurant.data.avgRating >= 4
    );
    setResData(topRatedRestaurant);
  };

  let changeSearchText = (event) => {
    let val = event.currentTarget.value;

    setSearchText(val);

    let filteredData = restaurantsData.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(val.toLowerCase())
    );
    setResData(filteredData);

    console.log(resData);
  };

  return (
    <>
      <div className="filter-container">
        <div className="search-container">
          <input
            className="search-box"
            placeholder="Search for Restaurants..."
            type="text"
            value={searchText}
            onChange={changeSearchText}
          />
        </div>
        <div className="filters-section">
          <button onClick={filterTopRatedRestaurant}>Top Rated</button>
        </div>
      </div>

      <div className="all-restaurant-container">
        {/* <Card {...resData[0]} />
      <Card {...resData[1]} />
      <Card {...resData[2]} />
      <Card {...resData[3]} />
      <Card {...resData[4]} />
      <Card {...resData[5]} />
      <Card {...resData[6]} />
      <Card {...resData[7]} />
      <Card {...resData[8]} /> */}
        {resData.map((restaurant) => {
          return <Card {...restaurant} />;
        })}
      </div>
    </>
  );
}

const Card = (resData) => {
  let [showQuickText, setShowQuickText] = useState(false);

  let cardMouseEnter = () => {
    setShowQuickText(true);
  };

  let cardMouseOut = () => {
    setShowQuickText(false);
  };

  let img =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
    resData.data.cloudinaryImageId;
  return (
    <div
      className="restaurant-card-container"
      onMouseEnter={cardMouseEnter}
      onMouseLeave={cardMouseOut}
    >
      <div className="card-container">
        <div className="restaurant-detl">
          <img src={img} />
        </div>
        <div className="restaurant-name margin-1rem" title={resData.data.name}>
          {resData.data.name}
        </div>
        <div className="cuisines margin-1rem">
          {resData.data.cuisines.join(", ")}
        </div>
        <div className="restaurant-rating-section margin-1rem">
          <div
            className={`rating ${
              resData.data.avgRating >= 4
                ? "rating-green"
                : resData.data.avgRating >= 3
                ? "rating-orange"
                : resData.data.avgRating >= 2
                ? "rating-yellow"
                : ""
            }`}
          >
            <div className="star-icon">
              <FontAwesomeIcon icon={faStar} size="sm" />
            </div>
            {resData.data.avgRating}
          </div>
          <div className="time">{resData.data.slaString}</div>
          <div className="cost">{resData.data.costForTwoString}</div>
        </div>
        <div className="quick-view">{showQuickText ? <QuickView /> : ""}</div>
      </div>
    </div>
  );
};

function QuickView() {
  return <div>QuickView</div>;
}

export { Body };
