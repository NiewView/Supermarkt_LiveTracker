import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomerMap } from "../../components/index";
import { RootStateType } from "../../store/index";
import { MarketList } from "../../types/Market";
import "./Home.styles.css";

export const Home = () => {
  const markets = useSelector((state: RootStateType) => state.market.markets);

  const MarketList: MarketList = {
    Markets: markets
  };

  return (
    <div className='Home'>
      <CustomerMap
        MarketList={MarketList}
        MapCenter={{ lat: 52.520008, long: 13.404954 }}
      />
    </div>
  );
};

export default Home;
