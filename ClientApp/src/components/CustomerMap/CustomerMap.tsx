import "./leaflet.css";
import "./customermap.styles.css";
import * as React from "react";
import { CircleMarker, Map, Popup, TileLayer } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import { MarketList, Market, GeoLocation } from "../../types/Market";
import openStreeMapsConfig from "./openStreeMapsConfig";

export interface CustomerMapProps {
  className?: string;
  MarketList: MarketList;
  MapCenter: GeoLocation;
}

export interface MapSector {
  GeoLocation: GeoLocation;
  Zoom: number;
  MaxHeight?: number;
  MaxWidth?: number;
}

export const MAX_MARKETS = 200;
export const INITIAL_ZOOM = 15;

export function CustomerMap(props: CustomerMapProps) {
  const [filteredMarketList, setFilteredMarketList] = React.useState(
    props.MarketList
  );
  const position: LatLngTuple = [props.MapCenter.lat, props.MapCenter.long];
  const onViewportChange = (viewport: {
    center: [number, number] | null | undefined;
    zoom: number | null | undefined;
  }) => {
    let filteredMarkets = filterMarketsInView(
      props.MarketList,
      {
        GeoLocation: {
          lat: viewport!.center![1],
          long: viewport!.center![0]
        },
        Zoom: viewport.zoom!
      },
      MAX_MARKETS
    );
    setFilteredMarketList(filteredMarkets);
  };

  return (
    <div className={[props.className, "customerMap"].join(" ")}>
      <Map
        className='customerMap__map'
        center={position}
        zoom={INITIAL_ZOOM}
        onViewportChange={viewport => {
          onViewportChange(viewport);
        }}
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {filteredMarketList.Markets.map((market: Market) => {
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
                <strong>Hierbei handelt es sich nur um Testdaten</strong>
                <br />
                Name: {market.Name}
                <br />
                Firma: {market.Company}
                <br />
                Adresse: {market.Adresse}
                <br />
                Letztes Update: {market.TimeStamp}
              </Popup>
            </CircleMarker>
          );
        })}
        <CircleMarker
          key='Home'
          center={position}
          color='blue'
          radius={3}
        ></CircleMarker>
      </Map>
    </div>
  );
}

export const filterMarketsInView = (
  marketList: MarketList,
  mapSector: MapSector,
  maxMarkets: number
) => {
  mapSector.MaxHeight = mapSector.MaxHeight || window.outerHeight;
  mapSector.MaxWidth = mapSector.MaxWidth || window.outerWidth;

  const maxHeightDegree =
    mapSector.MaxHeight * openStreeMapsConfig.ZoomLevels[mapSector.Zoom];
  const maxWidthDegree =
    mapSector.MaxHeight * openStreeMapsConfig.ZoomLevels[mapSector.Zoom];

  const mapRectangle = new MapViewport(
    mapSector.GeoLocation.lat - maxHeightDegree / 2,
    mapSector.GeoLocation.long - maxWidthDegree / 2,
    maxWidthDegree,
    maxHeightDegree
  );

  const filteredMarketList: MarketList = {
    ...marketList,
    Markets: marketList.Markets.filter(market =>
      mapRectangle.contains(market.GPSLocation.long, market.GPSLocation.lat)
    ).slice(0, MAX_MARKETS)
  };
  return filteredMarketList;
};

class MapViewport {
  x: number;
  y: number;
  width: number;
  height: number;
  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  contains(x: number, y: number) {
    // console.log(x, y);
    return (
      this.x <= x &&
      x <= this.x + this.width &&
      this.y <= y &&
      y <= this.y + this.height
    );
  }
}

export default CustomerMap;
