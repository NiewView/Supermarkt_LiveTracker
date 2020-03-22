import * as React from "react";
import { Button, ButtonTypes, StatusSlider } from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, setUserInfo } from "../../store/userActions";
import {
  setMarketStatus,
  setMarketStatusData
} from "../../store/marketActions";
import { RootStateType } from "../../store/index";
import { AuthorizedPage } from "../index";
import { useEffect } from "react";
import Api from "../../Utils/FakeApi";
import { User } from "../../types/User";
import "./UpdateStatus.styles.css";

export const statusTexts = [
  "Der Nutzer ist keinem verfügbaren Markt zugeordnet",
  "Hier ist gerade fast nichts los",
  "Es sind ein paar Leute da",
  "Es ist voll, bitte kommen Sie zu einem späteren Zeitpunkt"
];

export const UpdateStatus = () => {
  const currentUser = useSelector(
    (state: RootStateType) => state.user.currentUser
  );
  const selectedMarket = useSelector(
    (state: RootStateType) =>
      state.market.markets.filter(
        item => item.Id === currentUser?.AssociatedMarketId
      )[0]
  );

  useEffect(() => {
    if (currentUser != null && currentUser.AssociatedMarketId == null) {
      populateUserData(currentUser.Token);
    }
  }, [currentUser]);

  const populateUserData = async function(token: string) {
    Api.GetUserProfil(token).then(data => {
      dispatch(setUserInfo(data as User));
    });
  };

  const dispatch = useDispatch();
  const MarketStatusTemplate: setMarketStatusData = {
    Token: currentUser ? currentUser.Token : "",
    MarketId:
      currentUser && currentUser.AssociatedMarketId
        ? currentUser.AssociatedMarketId
        : -1,
    Status: null
  };

  let setStatus = (status: number) => {
    const previousStatus =
      selectedMarket == null || selectedMarket.Status == undefined
        ? null
        : selectedMarket.Status;
    dispatch(setMarketStatus({ ...MarketStatusTemplate, Status: status }));
    if (currentUser != null && currentUser.AssociatedMarketId != null) {
      Api.SetMarket(
        currentUser.Token,
        currentUser.AssociatedMarketId,
        status
      ).then(data => {
        if (!data) {
          dispatch(
            setMarketStatus({ ...MarketStatusTemplate, Status: previousStatus })
          );
        }
      });
    }
  };

  const renderSlider = () => {
    if (selectedMarket != null && selectedMarket.Status != null) {
      return (
        <div className='updatestatus'>
          <img
            className={[
              "status_image",
              "status_image--" + selectedMarket.Status
            ].join(" ")}
            src={"/assets/person_" + selectedMarket.Status + ".svg"}
          ></img>
          <StatusSlider
            step={1}
            min={1}
            max={3}
            onChange={value => setStatus(value)}
            value={
              selectedMarket && selectedMarket.Status
                ? selectedMarket.Status
                : 0
            }
          />
          <div className='status_description'>
            {statusTexts[selectedMarket.Status]}
          </div>
        </div>
      );
    } else {
      return (
        <div className='updatestatus'>
          <img
            className={["status_image", "status_image--null"].join(" ")}
            src={"/assets/person_null.svg"}
          ></img>
          <div className='status_description'>{statusTexts[0]}</div>
        </div>
      );
    }
  };

  return (
    <AuthorizedPage>
      <header className='updatestatus_header'>
        <h1 className='updatestatus_header__title'>
          {selectedMarket?.Adresse}
        </h1>
        <Button
          Type={ButtonTypes.Confirm}
          onClick={() => {
            dispatch(logoutUser());
          }}
        >
          LogOut
        </Button>
      </header>

      <section className='updatestatus_sliderwrapper'>{renderSlider()}</section>
    </AuthorizedPage>
  );
};

export default UpdateStatus;
