// src/components/MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponent = () => {
  return (
    <MapContainer center={[28.58627, 81.61078]} zoom={6} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[28.58627, 81.61078]}>
        <Popup>
          Nepal Food Express. <br /> We are here
        </Popup>
      </Marker>
     
    </MapContainer>
  );
};

export default MapComponent;
