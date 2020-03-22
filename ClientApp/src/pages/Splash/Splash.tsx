import * as React from "react";
import "./Splash.styles.css";
import { Redirect } from "react-router-dom";

export const Splash = () => {
  let [showSplash, setShowSplash] = React.useState(true);

  setTimeout(() => {
    setShowSplash(false);
  }, 2000);

  if (showSplash) {
    return (
      <div className='splash'>
        <img
          className={["splash__logoimage"].join(" ")}
          src={"/assets/Save_Buy_Logo_1.svg"}
        ></img>
        <img
          className={["splash__logotext"].join(" ")}
          src={"/assets/schrift_wir_vs_virus1.svg"}
        ></img>
      </div>
    );
  } else {
    return <Redirect to={{ pathname: "/home" }} />;
  }
};

export default Splash;
