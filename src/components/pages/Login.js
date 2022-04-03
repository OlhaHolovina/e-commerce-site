import React, {useState} from 'react';
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import MainContext from "../../contexts/main.context";

const Login = () => {
  const { updateUser } = React.useContext(MainContext);
  const [userData, setUserData] = useState({firstName: '', lastName: ''});

  return (
    <section style={{margin: 'auto'}}>
      <h3>Please, Log in</h3>
      <TextField
        label="First Name"
        onChange={(e) => setUserData((oldState => {
          return {...oldState, firstName: e.target.value}
        }))}
        variant="outlined" />
      <TextField
        label="Last Name"
        onChange={(e) => setUserData((oldState => {
          return {...oldState, lastName: e.target.value}
        }))}
        variant="outlined" />
      <Button
        disabled={!userData.firstName || !userData.lastName}
        style={{display: 'block', marginTop: 20, marginBottom: 20}}
        variant="contained"
        onClick={() => updateUser(userData)}
      >
        Log in
      </Button>
    </section>
  );
};

export default Login;

