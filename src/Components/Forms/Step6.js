import React, { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import {
  setKey,
  setDefaults,
  setLanguage,
  setRegion,
  fromAddress,
  fromLatLng,
  fromPlaceId,
  setLocationType,
  geocode,
} from "react-geocode";

function Step6({ nextStep, prevStep }) {
  setKey("AIzaSyB0dy46oTvw9PivnuoTzy_aa5LDp_8FNIo");

  const [markers, setMarkers] = useState([]);
  const [facilities, setFacilities] = useState([]);

  const onMapClick = (e) => {
    console.log(e);
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      },
    ]);

    fromLatLng(e.latLng.lat(), e.latLng.lng())
      .then(({ results }) => {
        const { lat, lng } = results[0].geometry.location;
        let address = results[0].formatted_address;
        facilities.push(address);
        setFacilities([...facilities]);
        console.log("latlng", e, facilities);
      })
      .catch(console.error);

    // fromPlaceId(e.placeId)
    // .then(({ results }) => {
    //   const { lat, lng } = results[0].geometry.location;
    //   console.log("placeid", e, results);
    // })
    // .catch(console.error);
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
          <p className="exp">
            Select facilities nearest to you such as medical facilities, shoping
            areas, markets and fuel stations.
          </p>
        </div>
        <div className=" map__right h-[400px] w-[500px]">
          {isLoaded ? (
            <GoogleMap
              zoom={12}
              center={center}
              mapContainerStyle={{
                width: "600px",
                height: "100%",
              }}
              options={styles}
              onLoad={(map) => setMap(map)}
              clickableIcons={true}
              onClick={onMapClick}
              //   onClick={onmapclick}
              // onRightClick={onmapclick}
            >
              {markers.map((marker) => (
                <Marker
                  position={{
                    lat: marker.lat,
                    lng: marker.lng,
                  }}
                />
              ))}
            </GoogleMap>
          ) : (
            ""
          )}
        </div>
        <form>
          <div className="label">
            <label for="name">Selected</label>
          </div>
          <div>
            <ul>
              {facilities?.length > 0
                ? facilities.map((facility, findx) => {
                    return (
                      <li key={`${facility}-${findx}`}>
                        {facility}
                        <br />
                        <input
                          required
                          type="text"
                          id="facility"
                          placeholder="Name Facility"
                        />
                      </li>
                    );
                  })
                : ""}
            </ul>
          </div>
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

export default Step6;
