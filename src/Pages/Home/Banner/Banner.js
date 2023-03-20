import React from "react";
import "./Banner.css";
import BannerItem from "./BannerItem/BannerItem";

const bannerData = [
    {
        id: 1,
        image: "assets/images/banner/1.jpg",
        prev: 6,
        next: 2,
    },
    {
        id: 2,
        image: "assets/images/banner/2.jpg",
        prev: 1,
        next: 3,
    },
    {
        id: 3,
        image: "assets/images/banner/3.jpg",
        prev: 2,
        next: 4,
    },
    {
        id: 4,
        image: "assets/images/banner/4.jpg",
        prev: 3,
        next: 5,
    },
    {
        id: 5,
        image: "assets/images/banner/5.jpg",
        prev: 4,
        next: 6,
    },
    {
        id: 6,
        image: "assets/images/banner/6.jpg",
        prev: 5,
        next: 1,
    }
]

const Banner = () => {
  return (
    <div className="carousel w-full py-10">
      {
        bannerData.map(slide=> <BannerItem
        key={slide.id}
        slide={slide}
        ></BannerItem>)
      }
    </div>
  );
};

export default Banner;
