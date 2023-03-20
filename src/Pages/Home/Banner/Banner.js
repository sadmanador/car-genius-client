import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full text-white">
        <img src="assets/images/banner/1.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-15 right-5 bottom-5">
          <a href="#slide4" className="btn btn-circle bg-orange-500">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle ml-10  bg-orange-500">
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
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="/images/stock/photo-1414694762283-acccc27bca85.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
