import { GoogleMap, Marker } from "@react-google-maps/api";
import Link from "next/link";
import { useState } from "react";

const containerStyle = {
  width: "900px",
  height: "600px",
};

const center = {
  lat: 29.749907,
  lng: -95.358421,
};

const position = {
  lat: 29.731542,
  lng: -95.466664,
};

const position_2 = {
  lat: 29.725296,
  lng: -95.433327,
};

const Map = ({ coordsList }) => {
  console.log(coordsList, "coords");

  return (
    <div className="w-full">
      <GoogleMap zoom={11} center={center} mapContainerStyle={containerStyle}>
        {coordsList.length &&
          coordsList.map((coords, i) => {
            return (
              <Marker
                position={{ lat: coords.lat, lng: coords.long }}
                key={i}
              />
            );
          })}
      </GoogleMap>
    </div>
  );
};

export default Map;
