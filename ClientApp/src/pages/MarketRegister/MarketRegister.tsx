import * as React from "react";
import {
  InputField,
  InputFieldTypes,
  Button,
  ButtonTypes
} from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../types/User";
import { loginUser } from "../../store/userActions";
import { RootStateType } from "../../store/index";
import { Redirect } from "react-router-dom";
import Api from "../../Utils/FakeApi";
import "./MarketRegister.styles.css";

export const MarketRegister = () => {
  let [username, setUsername] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [passwordValidation, setPasswordValidation] = React.useState("");
  const currentUser = useSelector(
    (state: RootStateType) => state.user.currentUser
  );
  const dispatch = useDispatch();
  const populateRegisterData = async function() {
    Api.Login(username, password).then(data => {
      console.log("TODO: go to auth");
    });
  };

  if (currentUser != null) {
    console.log("login successful:", "redirect to /updatestatus");
    return <Redirect to={{ pathname: "/updatestatus" }} />;
  }

  return (
    <div className="login_page">
      <InputField
        placeholder="Username"
        Type={InputFieldTypes.Text}
        onChange={value => {
          setUsername(value);
        }}
      />
      <InputField
        placeholder="Password"
        Type={InputFieldTypes.Password}
        onChange={value => {
          setPassword(value);
        }}
      />
      <InputField
        placeholder="Password"
        Type={InputFieldTypes.Password}
        onChange={value => {
          setPasswordValidation(value);
        }}
      />
      <Button
        Type={ButtonTypes.Confirm}
        onClick={() => {
          populateRegisterData();
        }}
      >
        Registrieren
      </Button>
    </div>
  );
};

export default MarketRegister;
