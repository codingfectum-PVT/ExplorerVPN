import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { Box, Grid } from '@mui/material';
import LockerMenu from '../../../Components/LockerMenu';
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from "@react-google-maps/api";
import mappin from '../../../../assets/mappin.svg';

const Wrapper = styled(Box)`
  position: relative;
  width: 100%;
  height: 400px; 
`;

const MapContainer = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; 
`;

const OverlayContainer = styled(Box)`
  position: relative;
  width: 100%;
  z-index: 10; 
`;

const Header = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [map, setMap] = useState(null); 

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDdcPa9dACodW8asrjAb3V6zv9MPgvdDfM', 
  });

  const locations = [
    { lat: 48.8566, lng: 2.3522, title: 'Paris' },
    { lat: 52.5200, lng: 13.4050, title: 'Berlin' },
    { lat: 39.9042, lng: 116.4074, title: 'Beijing' },
    { lat: 31.2304, lng: 121.4737, title: 'Shanghai' },
    { lat: 40.7128, lng: -74.0060, title: 'New York' },
    { lat: 34.0522, lng: -118.2437, title: 'Los Angeles' },
  ];

  const handleMarkerClick = (location) => {
    setSelectedLocation(location);
  };

  const handleInfoWindowClose = () => {
    setSelectedLocation(null);
  };

  const fitBounds = (mapInstance) => {
    const bounds = new window.google.maps.LatLngBounds();
    locations.forEach((location) => {
      bounds.extend(location);
    });
    mapInstance.fitBounds(bounds);

 
    const listener = window.google.maps.event.addListener(mapInstance, 'idle', () => {
      if (mapInstance.getZoom() > 3) {
        mapInstance.setZoom(5); 
      }
      window.google.maps.event.removeListener(listener);
    });
  };

  useEffect(() => {
    if (map) {
      fitBounds(map); 
    }
  }, [map]);

  const mapStyles = [
    {
      "elementType": "geometry",
      "stylers": [
        { "color": "#212121" }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        { "visibility": "on" }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        { "color": "#757575" }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        { "color": "#FFFFFF" }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        { "color": "#e4e2e2" }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
        { "color": "#e4e2e2" }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        { "color": "#eeeeee" }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        { "color": "#ffffff" }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        { "color": "#95d3f0" }
      ]
    }
  ];

  const customIcon = isLoaded && {
    url: mappin,
    scaledSize: new window.google.maps.Size(40, 40),
    anchor: new window.google.maps.Point(20, 40),
  };

  return (
    <Wrapper>
      {isLoaded ? (
        <MapContainer>
          <GoogleMap
            onLoad={(mapInstance) => setMap(mapInstance)} // Set the map instance
            mapContainerStyle={{ width: '100%', height: '100%' }}
            options={{
              styles: mapStyles, // Retaining custom map styles
            }}
          >
            {locations.map((location) => (
              <MarkerF
                key={location.title}
                position={location}
                onClick={() => handleMarkerClick(location)}
                icon={customIcon}
              />
            ))}
            {selectedLocation && (
              <InfoWindowF
                position={selectedLocation}
                onCloseClick={handleInfoWindowClose}
              >
                <div>
                  <h2>{selectedLocation.title}</h2>
                </div>
              </InfoWindowF>
            )}
          </GoogleMap>
        </MapContainer>
      ) : (
        <div>Loading Map...</div>
      )}
      <OverlayContainer>
        <Grid container justifyContent="center">
          <LockerMenu />
        </Grid>
      </OverlayContainer>
    </Wrapper>
  );
};

export default Header;
