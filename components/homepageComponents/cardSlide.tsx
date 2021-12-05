/* eslint-disable no-invalid-this */
import React from "react";
import classes from "./cardSlide.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AlbumCard from "../Cards/AlbumCard";

const Cardslider = (props: any) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
  };

  return (
    <div className={classes.main}>
      <label className={classes.label}>{props.label}</label>
      <br />
      <br />
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        autoPlay={props.deviceType !== "mobile" ? true : false}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        deviceType={props.deviceType}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-0-px"
      >
        {props.data.map((item: any) => {
          return (
            <AlbumCard
              {...item}
              styles={{
                width: "80% ",
                flex:"1 1 auto",
                height: "20vmax",
                margin: "0 auto",
              }}
              key={item.id}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default Cardslider;
