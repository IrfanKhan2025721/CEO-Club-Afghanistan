import React, { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

/* Fix Leaflet marker icon */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function Map() {
  const mapRef = useRef(null);

  // Updated coordinates for Kart-e-Char, Sun Tower Plaza, Kabul
  const position = [34.50725, 69.1406];

  const venue = {
    name: "Kart-e-Char",
    address: "Kart-e-Char, 3rd District, Sun Tower Plaza, Kabul, Afghanistan",
    email: "hi@company.com",
    phone: "+10100200340",
  };

  const focusMap = () => {
    if (mapRef.current) {
      mapRef.current.setView(position, 16);
    }
  };

  return (
    <div className="w-full py-8 px-4 sm:px-6">
      {" "}
      {/* Added bg-gray-900 for text-white visibility */}
      <div className="max-w-7xl mx-auto mb-4">
        <h1 className="text-3xl font-bold text-white text-left mb-10">
          Here you go <span className="text-yellow-500">Venue</span>
        </h1>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2 h-64 sm:h-72 rounded-lg overflow-hidden shadow-md">
          <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom={true}
            className="h-full w-full"
            ref={mapRef} // Standard way to attach ref in React Leaflet v4+
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                {venue.name} <br /> Sun Tower Plaza
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        <div className="w-full lg:w-1/2 h-auto lg:h-72 bg-white rounded-t-2xl shadow-md overflow-hidden">
          <div className="bg-[#CC8821] p-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {venue.name}
            </h2>
          </div>

          <ul className="p-6 space-y-4 text-gray-700">
            <li
              onClick={() => {
                focusMap();
                window.open(
                  `https://www.google.com/maps?q=${position[0]},${position[1]}`,
                  "_blank",
                );
              }}
              className="flex text-lg font-semibold items-start gap-3 cursor-pointer hover:text-yellow-600 transition-colors"
            >
              <FaMapMarkerAlt className="mt-1 text-[#CC8821] flex-shrink-0" />
              <div>{venue.address}</div>
            </li>

            <li
              onClick={() => (window.location.href = `mailto:${venue.email}`)}
              className="flex text-lg font-semibold items-center gap-3 cursor-pointer hover:text-yellow-600 transition-colors"
            >
              <FaEnvelope className="text-[#CC8821] flex-shrink-0" />
              {venue.email}
            </li>

            <li
              onClick={() =>
                window.open(
                  `https://wa.me/${venue.phone.replace(/\D/g, "")}`,
                  "_blank",
                )
              }
              className="flex text-lg font-semibold items-center gap-3 cursor-pointer hover:text-yellow-600 transition-colors"
            >
              <FaPhoneAlt className="text-[#CC8821] flex-shrink-0" />
              {venue.phone}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
