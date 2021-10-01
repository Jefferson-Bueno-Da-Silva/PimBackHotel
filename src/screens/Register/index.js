import React, { useEffect, useState } from "react";
import LargeButton from "../../components/LargeButton";
import InputLabel from "../../components/InputLabel";
import { useAuth } from "../../contexts";

const Register = () => {
  const auth = useAuth();

  const [full_name, setFull_name] = useState("");
  const [email, setEmailText] = useState("");
  const [password, setPassword] = useState("");

  const _onChangeTextFull_name = text => {
    setFull_name(text);
  };
  const _onChangeTextEmail = text => {
    setEmailText(text);
  };
  const _onChangeTextPassword = text => {
    setPassword(text);
  };

  const handleLogin = () => {
    const data = auth.register({ full_name, email, password });
    console.log(data);
    // auth.setSessionFromLogin(data);
  };

  return (
    <>
      <InputLabel
        label="Nome Completo"
        placeholder="Nome Completo"
        value={full_name}
        onChangeText={_onChangeTextFull_name}
      />
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
        secondary={!(!!full_name && !!email && !!password)}
        buttonText="Criar conta"
        onPress={handleLogin}
      />
    </>
  );
};

export default Register;
