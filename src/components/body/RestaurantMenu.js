import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../../utils/consants";
import "../../css/restaurantmenu.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      {resturantMenu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
        (menu) => {
          return (
            <>
              <div className="menu-details-container">
                <div className="category-container">
                  <div className="category-name">
                    {menu?.card?.card?.title}
                    {menu?.card?.card?.itemCards?.length && (
                      <span>({menu?.card?.card?.itemCards?.length})</span>
                    )}
                  </div>
                  {menu?.card?.card?.itemCards?.map((crd) => {
                    return (
                      <div className="menu-items">
                        <div className="menu-times-left">
                          <div
                            className={`veg-or-nonveg ${
                              crd?.card?.info?.isVeg == 1
                                ? ""
                                : "veg-non-veg-border-red"
                            }`}
                          >
                            <div
                              className={`veg-or-nonveg-round ${
                                crd?.card?.info?.isVeg == 1
                                  ? ""
                                  : "veg-or-nonveg-round-red"
                              }`}
                            ></div>
                          </div>
                          <div className="item-name item-dtls">
                            {crd?.card?.info?.name}
                          </div>
                          <div className="item-dtls">
                            ₹{crd?.card?.info?.price / 100}
                          </div>
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
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          );
        }
      )}
    </div>
  );
};
