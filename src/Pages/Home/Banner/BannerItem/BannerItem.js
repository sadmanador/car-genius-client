import React from "react";

const BannerItem = ({slide}) => {
    const {id, image, prev, next} = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full text-white">
      <div className="carousel-img rounded-xl">
        <img src={image} className="w-full rounded-xl" />
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-15 right-5 bottom-5">
        <a href={`#slide${prev}`} className="btn btn-circle bg-orange-500">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle ml-10  bg-orange-500">
          ❯
        </a>
      </div>

      <div className="absolute flex justify-between mt-20 ml-20">
        <h1 className="text-6xl font-bold text-white">
          Affordable <br />
          Price for Car <br />
          Servicing
        </h1>
      </div>
      <div className="flex justify-between absolute top-80 ml-20">
        <p className="">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>
      <div className="absolute flex justify-start left-24 top-3/4">
        <button className="btn btn-error mr-5">Discover More</button>
        <button className="btn btn-outline btn-error">Latest Product</button>
      </div>
    </div>
  );
};

export default BannerItem;
