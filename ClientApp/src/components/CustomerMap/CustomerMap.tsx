import "./leaflet.css";
import "./customermap.styles.css";
import * as React from "react";
import { CircleMarker, Map, Popup, TileLayer } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import { MarketList, GeoLocation } from "../../types/Market";

export interface CustomerMapProps {
  className?: string;
  MarketList: MarketList;
  MapCenter: GeoLocation;
}

export function CustomerMap(props: CustomerMapProps) {
  const position: LatLngTuple = [props.MapCenter.lat, props.MapCenter.long];

  return (
    <div className={[props.className, "customerMap"].join(" ")}>
      <Map className="customerMap__map" center={position} zoom={15}>
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a>'
        />
        {props.MarketList.Markets.map(market => {
          var CircleColor: string;
          switch (market.Status) {
            case null:
              CircleColor = "grey";
              break;
            case 1:
              CircleColor = "green";
              break;
            case 2:
              CircleColor = "orange";
              break;
            case 3:
              CircleColor = "red";
              break;
            default:
              CircleColor = "grey";
              break;
          }
          return (
            <CircleMarker
              key={market.Id}
              center={[market.GPSLocation.lat, market.GPSLocation.long]}
              color={CircleColor}
              radius={5}
            >
              <Popup>
                {market.Name}
                <br></br>
                {market.Company}
                <br></br>
                {market.Adresse}
                <br></br>
                {market.TimeStamp}
              </Popup>
            </CircleMarker>
          );
        })}
        <CircleMarker
          key="Home"
          center={position}
          color="blue"
          radius={3}
        ></CircleMarker>
      </Map>
    </div>
  );
}

export default CustomerMap;
