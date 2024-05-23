import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cardimages } from "../GlobalUtils";
import { BiArrowBack, BiBed } from "react-icons/bi";
import { GiPoolDive } from "react-icons/gi";
import { GrRestaurant, GrShieldSecurity } from "react-icons/gr";
import { LuParkingCircle } from "react-icons/lu";
import { MdCasino } from "react-icons/md";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { slides } from "./Slides";
import { Avatar } from "@nextui-org/react";
import { FaLocationArrow } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

function HomeView() {
  const [slideOpt, setSlideopt] = useState("bedroom");
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB0dy46oTvw9PivnuoTzy_aa5LDp_8FNIo",
    libraries: ["places"],
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  // 0.515496, 32.607490
  const [center, setCenter] = useState({
    lat: -0.279322,
    lng: 36.071804,
  });

  const styles = [
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#eeeeee",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
  ];

  var options = {
    className: "h-full",
    dots: true,
    fade: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    adaptiveHeight: true,
  };

  return (
    <div className="home__view__main">
      <div className="view__top">
        <div className="view__top__details py-4 px-2">
          <h4 className="text-[24px] font-semibold flex items-center gap-2">
            <a href="/">
              <BiArrowBack />{" "}
            </a>
            Apparment Name
          </h4>
          <h6 className="text-[18px] text-stone-600 flex items-center gap-4">
            <FaLocationPin /> Location
          </h6>
        </div>
        <div className="view__image__grid grid grid-flow-row grid-cols-12 gap-2">
          <div className="grid__slider col-span-9">
            <Slider {...options}>
              {slides[slideOpt]?.length > 0
                ? slides[slideOpt].map((slide) => {
                    return (
                      <div className="slide__content overflow-hidden">
                        {slide}
                      </div>
                    );
                  })
                : ""}
            </Slider>
          </div>
          <div className="change__slides col-span-3">
            <div
              data-text="Bedroom"
              className="slide__cards"
              onClick={() => setSlideopt("bedroom")}
            >
              {slides["bedroom"][0]}
            </div>
            <div
              data-text="Bathtoom"
              className="slide__cards"
              onClick={() => setSlideopt("bathroom")}
            >
              {slides["bathroom"][0]}
            </div>
            <div
              data-text="Kitchen"
              className="slide__cards"
              onClick={() => setSlideopt("kitchen")}
            >
              {slides["kitchen"][0]}
            </div>
            <div
              data-text="Compound"
              className="slide__cards"
              onClick={() => setSlideopt("compound")}
            >
              {slides["compound"][0]}
            </div>
            <div
              data-text="Living Room"
              className="slide__cards"
              onClick={() => setSlideopt("living")}
            >
              {slides["living"][0]}
            </div>
            <div
              data-text="Dining"
              className="slide__cards"
              onClick={() => setSlideopt("dining")}
            >
              {slides["dining"][0]}
            </div>
          </div>
        </div>
      </div>
      <div className="view__bottom grid grid-flow-row grid-cols-12">
        <div className="col-span-9 pr-12">
          <div className="amenities flex gap-2 my-2">
            <span className="flex flex-col justify-center items-center">
              <BiBed size={22} />
            </span>
            <span className="flex flex-col justify-center items-center">
              <GiPoolDive size={22} />
            </span>

            <span className="flex flex-col justify-center items-center">
              <GrRestaurant size={22} />
            </span>

            <span className="flex flex-col justify-center items-center">
              <LuParkingCircle size={22} />
            </span>

            <span className="flex flex-col justify-center items-center">
              <MdCasino size={22} />
            </span>

            <span className="flex flex-col justify-center items-center">
              <GrShieldSecurity size={22} />
            </span>
          </div>

          <div className="description flex flex-col gap-4 py-2">
            <h4 className="text-[20px] font-semibold">Property Description</h4>
            <p>
              Vestibulum nunc massa, gravida quis porta nec, feugiat id metus.
              Nunc ac arcu dolor, quis vestibulum leo. Cras viverra mollis
              ipsum, non rhoncus lectus aliquam et. Morbi faucibus purus sit
              amet lacus aliquet elementum. Donec sit amet posuere enim. Cras in
              eros id tortor fringilla ultricies. Mauris faucibus ullamcorper
              velit, pulvinar varius odio
            </p>

            <p>
              Vestibulum nunc massa, gravida quis porta nec, feugiat id metus.
              Nunc ac arcu dolor, quis vestibulum leo. Cras viverra mollis
              ipsum, non rhoncus lectus aliquam et. Morbi faucibus purus sit
              amet lacus aliquet elementum. Donec sit amet posuere enim. Cras in
              eros id tortor fringilla ultricies. Mauris faucibus ullamcorper
              velit, pulvinar varius odio
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 gap-2 map__right h-[500px]">
            {isLoaded ? (
              <GoogleMap
                zoom={12}
                center={center}
                mapContainerStyle={{
                  width: "100%",
                  height: "100%",
                }}
                options={styles}
                onLoad={(map) => setMap(map)}
                clickableIcons={true}
                // onClick={onmapclick}
                // onRightClick={onmapclick}
              >
                <Marker cursor="pointer" position={center} draggable={false} />
                <Marker cursor="pointer" position={center} draggable={false} />
                <Marker cursor="pointer" position={center} draggable={false} />
                <Marker cursor="pointer" position={center} draggable={false} />
                <Marker cursor="pointer" position={center} draggable={false} />
              </GoogleMap>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="col-span-3">
          <div className="owner__details mt-16 shadow-md h-1/2 pt-4">
            <div className="border-b-[1px] pl-5 py-3">
              <h4 className="text-[18px] font-semibold ">Owner details</h4>
            </div>

            <div className="grid grid-cols-12 items-center gap-2 mt-4 pl-5">
              <div className="col-span-3">
                <Avatar size="lg" src={cardimages["bg-02.webp"]} />
              </div>
              <div className="col-span-8">
                <h4>Owner name</h4>
                <span>+25687723890</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeView;
