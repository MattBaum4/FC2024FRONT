import "./servicearea.css"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css"

const ServiceAreaSection = () => {
   
    return (
      <>
        <div className="map-container">
          <MapContainer className="leaflet-map" center={[35.925, -86.868]} zoom={11} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
          </MapContainer>
        </div>
        <p className="serv-txt">we proudly serve williamson county, mainly in close proximity to downtown franklin</p>
      </>
    );
  }
 
export default ServiceAreaSection; 

