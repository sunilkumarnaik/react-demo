import "../../css/body.css";
import { restaurantData } from "../../utils/consants";
function Body() {
  let resData = restaurantData[0]?.data?.data?.cards;
  return (
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
      ;
    </div>
  );
}

const Card = (resData) => {
  let img =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
    resData.data.cloudinaryImageId;
  return (
    <div className="restaurant-card-container">
      <div className="card-container">
        <div className="restaurant-detl">
          <img src={img} />
        </div>
        <div className="restaurant-name margin-1rem">{resData.data.name}</div>
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
            *{resData.data.avgRating}
          </div>
          <div className="time">{resData.data.slaString}</div>
          <div className="cost">{resData.data.costForTwoString}</div>
        </div>
      </div>
    </div>
  );
};

export { Body };
