// types/react-google-maps-api.d.ts
declare module '@react-google-maps/api' {
    import * as React from 'react';
  
    export interface GoogleMapProps {
      id?: string;
      mapContainerStyle?: React.CSSProperties;
      mapContainerClassName?: string;
      options?: google.maps.MapOptions;
      onLoad?: (map: google.maps.Map) => void;
      onUnmount?: (map: google.maps.Map) => void;
    }
  
    export class GoogleMap extends React.Component<GoogleMapProps> {}
  
    export interface LoadScriptProps {
      id?: string;
      googleMapsApiKey: string;
      libraries?: string[];
      language?: string;
      region?: string;
      version?: string;
      onLoad?: () => void;
      onError?: (error: Error) => void;
      loadingElement?: React.ReactNode;
      children: React.ReactNode;
    }
  
    export class LoadScript extends React.Component<LoadScriptProps> {}
  
    export interface MarkerProps {
      position: google.maps.LatLngLiteral;
      map?: google.maps.Map;
      onLoad?: (marker: google.maps.Marker) => void;
      onUnmount?: (marker: google.maps.Marker) => void;
    }
  
    export class Marker extends React.Component<MarkerProps> {}
  }
  