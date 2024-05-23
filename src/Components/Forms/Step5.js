import React, { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

function Step5({ nextStep, prevStep }) {
  const [markers, setMarkers] = useState([]);

  const onMapClick = (e) => {
    console.log(e);
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      },
    ]);
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB0dy46oTvw9PivnuoTzy_aa5LDp_8FNIo",
    libraries: ["places"],
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  // 0.515496, 32.607490
  const [center, setCenter] = useState({
    lat: 0.3152,
    lng: 32.58153,
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
    <>
      {/* <!-- * Step 5 start --> */}
      <div className="stp step-4 gap-4">
        <div className="header">
          <h1 className="title">Finishing up</h1>
          <p className="exp">Enter Your listing's Location.</p>
        </div>
        <form>
          <div className="label">
            <label for="location">Property Location</label>
            <p className="error">This Field Is Required</p>
          </div>
          <input
            required
            type="text"
            id="location"
            placeholder="e.g. Kampala"
          />
          <div className="label">
            <label for="distance">Distance From main Road</label>
            <p className="error">This Field Is Required</p>
          </div>
          <input
            required
            type="text"
            id="distance"
            placeholder="Distance in metres"
          />
        </form>
        <div className="btns">
          <button className="prev-stp" type="button" onClick={prevStep}>
            Go Back
          </button>
          <button className="next-stp" type="submit" onClick={nextStep}>
            Next Step
          </button>
        </div>
      </div>
      {/* <!-- Step 5 end --> */}
    </>
  );
}

export default Step5;
