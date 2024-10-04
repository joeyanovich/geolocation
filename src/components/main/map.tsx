import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export function Map() {
  return (
    <div className="relative">
      <MapContainer
        className="w-screen h-screen z-0 relative"
        center={[51.505, -0.09]}
        zoom={15}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[51.505, -0.09]}
          eventHandlers={{ click: () => alert("clicou") }}
        ></Marker>
      </MapContainer>
    </div>
  );
}
