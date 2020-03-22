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
  let [marktId, setMarktId] = React.useState("");
  let [username, setUsername] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [passwordValidation, setPasswordValidation] = React.useState("");
  let [errorMessage, setErrorMessage] = React.useState("");
  const currentUser = useSelector(
    (state: RootStateType) => state.user.currentUser
  );
  const dispatch = useDispatch();
  const populateRegisterData = async function() {
    if (password === "" || username === "" || marktId === "") {
      setErrorMessage("Bitte füllen sie alle Felder aus");
      return;
    }
    if (password != passwordValidation) {
      setErrorMessage("Die Passwörter stimmen nicht überein");
      return;
    }
    if (password.length < 8) {
      setErrorMessage("Ihr Passwort ist zu kurz (mind. 8 Zeichen)");
      return;
    }
    Api.Login(username, password).then(data => {
      console.log("TODO: go to auth");
    });
  };

  return (
    <div className='register_page'>
      <InputField
        placeholder='Markt Id'
        Type={InputFieldTypes.Text}
        onChange={value => {
          setMarktId(value);
        }}
      />
      <InputField
        placeholder='Username'
        Type={InputFieldTypes.Text}
        onChange={value => {
          setUsername(value);
        }}
      />
      <InputField
        placeholder='Passwort'
        Type={InputFieldTypes.Password}
        onChange={value => {
          setPassword(value);
        }}
      />
      <InputField
        placeholder='Passwort wiederholen'
        Type={InputFieldTypes.Password}
        onChange={value => {
          setPasswordValidation(value);
        }}
      />
      <div className='error_message'>{errorMessage}</div>
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
