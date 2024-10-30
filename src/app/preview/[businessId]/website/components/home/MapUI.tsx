import React from 'react';

interface MapUIProps {
  latitude: number;
  longitude: number;
}

const MapUI: React.FC<MapUIProps> = ({ latitude, longitude }) => {
  const mapSrc = `https://www.google.com/maps/embed/v1/view?key=YOUR_GOOGLE_MAPS_API_KEY&center=${latitude},${longitude}&zoom=14`;

  return (
    <div className='max-w-[1200px] mx-auto' style={{ width: '100%',  height: '400px', border: '1px solid #ccc' }}>
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src={mapSrc}
        allowFullScreen
        aria-hidden="false"
        tabIndex={0}
        className='mt-[-90px]'
        title="Map Location"
      ></iframe>
    </div>
  );
};

export default MapUI;
