import React, { useEffect, useState } from "react";
import LargeButton from "../../components/LargeButton";
import InputLabel from "../../components/InputLabel";
import { useAuth } from "../../contexts";

const Login = () => {
  const auth = useAuth();
  const authDefaults = {
    email: __DEV__ ? "Teste@teste.com" : "",
    password: __DEV__ ? "123456789dez" : ""
  };
  const [email, setEmailText] = useState(authDefaults.email);
  const [password, setPassword] = useState(authDefaults.password);

  const _onChangeTextEmail = text => {
    setEmailText(text);
  };
  const _onChangeTextPassword = text => {
    setPassword(text);
  };

  const handleLogin = () => {
    const data = auth.signIn({ email, password });
    auth.setSessionFromLogin(data);
  };

  return (
    <>
      <InputLabel
        label="Email"
        placeholder="Email"
        value={email}
        onChangeText={_onChangeTextEmail}
      />
      <InputLabel
        label="senha"
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={_onChangeTextPassword}
      />
      <LargeButton
        secondary={!(!!email && !!password)}
        buttonText="Login"
        onPress={handleLogin}
      />
    </>
  );
};

export default Login;
