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
import "./authentication.styles.css";

export const Authentication = () => {
  let [username, setUsername] = React.useState("");
  let [password, setPassword] = React.useState("");
  const currentUser = useSelector(
    (state: RootStateType) => state.user.currentUser
  );
  const dispatch = useDispatch();
  const populateLoginData = async function() {
    Api.Login(username, password).then(data => {
      let typedData = data as { Token: string };
      let currentUser: User = {
        Name: username,
        Token: typedData.Token,
        AssociatedMarketId: null
      };
      dispatch(loginUser(currentUser));
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
      <Button
        Type={ButtonTypes.Confirm}
        onClick={() => {
          populateLoginData();
        }}
      >
        Login
      </Button>
      <Button
        className={"button--register"}
        Type={ButtonTypes.Link}
        href="/register"
      >
        Registrieren
      </Button>
    </div>
  );
};

export default Authentication;
