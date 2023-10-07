"use client"
import React, { useState, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import {
  useLoadScript,
  Marker,
  StandaloneSearchBox,
  StreetViewService,
  GoogleMap
} from "@react-google-maps/api";

const loaderId = "ownersTownGoogleMapApiId";
const config = {
  googleMapsApiKey: "AIzaSyDJ8uTFj6943jB6JmStfHma3--E0eqTk5w",
  language: "en",
  region: "IN",
  version: "weekly",
  libraries: ["places"],
  preventGoogleFontsLoading: true,
  id: loaderId
};

function App({ searchEnabled }) {
  const { isLoaded, loadError } = useLoadScript(config);
  const Loading = <div>Loader</div>;
  const center = { lat: 12.972442, lng: 77.580643 };
  const [location, setLocation] = useState(center);
  const markerRef = useRef(null);
  const mapRef = useRef(null);

  function onClick(...args) {
    console.log("onClick args: ", args);
  }

  function setNewLocation() {
    console.log(mapRef.current.getPlaces());
  }

  function onPlacesChanged(...args) {
    console.log("onPlacesChanged args: ", args);
    setNewLocation();
  }

  function onDragEnd(...args) {
    console.log("onDragEnd args: ", args);
    console.log(
      markerRef.current.position.lat(),
      markerRef.current.position.lng()
    );
    setLocation({
      lat: markerRef.current.position.lat(),
      lng: markerRef.current.position.lng()
    });
    // setNewLocation();
  }

  const onLoad = useCallback(
    map => {
      mapRef.current = map;
    },
    [onPlacesChanged]
  );

  const onMarkerLoad = useCallback(
    marker => {
      markerRef.current = marker;
      // const path = marker.getPath();
      console.log(marker);
    },
    [onDragEnd]
  );

  const renderMap = (
    <GoogleMap
      id="searchbox-example"
      mapContainerStyle={{
        height: "400px",
        width: "100%"
      }}
      zoom={15}
      center={center}
      onClick={onClick}
    >
      {searchEnabled ? (
        <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
          <input
            type="text"
            placeholder="Find your place"
            style={{
              boxSizing: "border-box",
              border: "1px solid transparent",
              width: "240px",
              backgroundColor: "#fff",
              height: "32px",
              padding: "0 12px",
              borderRadius: "3px",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
              fontSize: "14px",
              outline: "none",
              textOverflow: "ellipses",
              position: "absolute",
              left: 0,
              right: 0,
              margin: "0 auto"
            }}
          />
        </StandaloneSearchBox>
      ) : (
        <StreetViewService />
      )}
      <Marker
        position={location}
        draggable
        onDragEnd={onDragEnd}
        onLoad={onMarkerLoad}
      />
    </GoogleMap>
  );

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? renderMap : Loading;
}

export default App