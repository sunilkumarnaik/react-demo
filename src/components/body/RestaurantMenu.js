import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../../utils/consants";
import "../../css/restaurantmenu.css";
import { faClock, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import KartContext from "../../context/KartContext";

export const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantURL = MENU_URL + resId;
  const [resturantMenu, setRestaurantMenu] = useState([]);
  useEffect(() => {
    axios.get(restaurantURL).then((response) => {
      let cards = response?.data?.data?.cards;
      //   console.log(cards?.card?.card?.info.name);
      console.log(cards?.groupedCard?.cardGroupMap?.REGULAR?.cards);
      console.log(cards);
      setRestaurantMenu(cards);
    });
  }, []);

  return (
    <div className="menu-items-container">
      <div className="restaurant-details-container">
        <div className="resturant-details">
          <div className="restaurant-name">
            {resturantMenu[0]?.card?.card?.info?.name}
          </div>
          <div className="restaurant-cuisines">
            {resturantMenu[0]?.card?.card?.info?.cuisines?.join(",")}
          </div>
          <div className="restaurant-lastmiles-details">
            {resturantMenu[0]?.card?.card?.info?.areaName}
            {"   "}
            {resturantMenu[0]?.card?.card?.info?.sla?.lastMileTravelString}
          </div>
        </div>
        <div className="restaurant-ratings-container">
          <div className="ratings-details">
            <div
              className={`${
                resturantMenu[0]?.card?.card?.info?.avgRating >= 4
                  ? "restaurant-rating-green"
                  : resturantMenu[0]?.card?.card?.info?.avgRating >= 3
                  ? "restaurant-rating-orange"
                  : resturantMenu[0]?.card?.card?.info?.avgRating >= 2
                  ? "restaurant-rating-yellow"
                  : ""
              }`}
            >
              <div className="restaurnat-star-icon">
                <FontAwesomeIcon icon={faStar} size="sm" />
                <div className="restaurant-rating-string">
                  {resturantMenu[0]?.card?.card?.info?.avgRatingString}
                </div>
              </div>
            </div>
          </div>
          <div className="total-ratings">
            {resturantMenu[0]?.card?.card?.info?.totalRatingsString}
          </div>
        </div>
      </div>
      <div className="time-distance-details">
        <div className="time-details">
          <FontAwesomeIcon icon={faClock} />
          {"  "}
          {resturantMenu[0]?.card?.card?.info?.sla?.slaString}
        </div>
        <div className="distance-details">
          <div className="ruppe-icon-menu">&nbsp;₹</div>
          <div className="cost-for-two">
            {resturantMenu[0]?.card?.card?.info?.costForTwoMessage}
          </div>
        </div>
      </div>
      {resturantMenu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
        (menu) => {
          return (
            <>
              <div className="menu-details-container">
                <div className="category-container">
                  <div>
                    <div className="category-name">
                      {menu?.card?.card?.title}
                      {menu?.card?.card?.itemCards?.length && (
                        <span>({menu?.card?.card?.itemCards?.length})</span>
                      )}
                    </div>
                    <div className="accordian-button"></div>
                  </div>
                  <div className="item-cards-container">
                    {menu?.card?.card?.itemCards?.map((crd) => {
                      return <MenuItem {...crd} />;
                    })}
                  </div>
                </div>
              </div>
            </>
          );
        }
      )}
    </div>
  );
};

const MenuItem = (crd) => {
  const { kart, setKart } = useContext(KartContext);
  const addItemToKart = (restauratnMenu) => {
    let name = restauratnMenu?.card?.info?.name;
    let price = restauratnMenu?.card?.info?.price;
    let obj = {};
    obj.name = name;
    obj.price = price;
    kart.push(obj);
    setKart(kart);
  };
  return (
    <div className="menu-items">
      <div className="menu-times-left">
        <div
          className={`veg-or-nonveg ${
            crd?.card?.info?.isVeg == 1 ? "" : "veg-non-veg-border-red"
          }`}
        >
          <div
            className={`veg-or-nonveg-round ${
              crd?.card?.info?.isVeg == 1 ? "" : "veg-or-nonveg-round-red"
            }`}
          ></div>
        </div>
        <div className="item-name item-dtls">{crd?.card?.info?.name}</div>
        <div className="item-dtls">₹{crd?.card?.info?.price / 100}</div>
        <div className="item-dtls item-desc">
          {crd?.card?.info?.description}
        </div>
      </div>
      <div className="menu-items-right">
        <img
          width={"140px"}
          alt=""
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
            crd?.card?.info?.imageId
          }
        />
        <div className="add-button">
          <button
            onClick={() => {
              addItemToKart(crd);
            }}
          >
            Add+
          </button>
        </div>
      </div>
    </div>
  );
};
