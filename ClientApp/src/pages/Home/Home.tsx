import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomerMap } from "../../components/index";
import { RootStateType } from "../../store/index";
import { MarketList } from "../../types/Market";
import "./Home.styles.css";

export const Home = () => {
  const markets = useSelector((state: RootStateType) => state.market.markets);
  let [position, setPosition] = React.useState({
    lat: 52.520008,
    long: 13.404954
  });

  const MarketList: MarketList = {
    Markets: markets
  };

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setPosition({
          lat: position.coords.latitude,
          long: position.coords.longitude
        });
        console.log({
          lat: position.coords.latitude,
          long: position.coords.longitude
        });
      });
    }
  }, []);

  return (
    <div className='Home'>
      <CustomerMap MarketList={MarketList} MapCenter={position} />
    </div>
  );
};

export default Home;
