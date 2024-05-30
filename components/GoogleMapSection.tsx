
'use client'
// components/GoogleMapSection.tsx
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Image from 'next/image';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 40.7128, // Replace with the latitude of your address
  lng: -74.0060, // Replace with the longitude of your address
};

const GoogleMapSection: React.FC = () => {
  return (
    <div className="relative w-full">
      {/* <h2 className="text-2xl font-bold mb-4">Our Location</h2> */}
      <div className="relative">
        <Image 
          src="/maps.webp"
          alt="Map"
          // className="absolute inset-0 w-full h-full object-cover "
          width={1920}
          height={1080}
/>
        {/* <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript> */}
        {/* <img
          src="/maps.webp"
          alt="Overlay"
          className="absolute inset-0 w-full h-full object-cover "
        /> */}
      </div>
    </div>
  );
};

export default GoogleMapSection;

