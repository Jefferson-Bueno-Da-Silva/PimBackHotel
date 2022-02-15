import React, { useCallback, useState } from 'react';
import LargeButton from '../../components/LargeButton';
import InputLabel from '../../components/InputLabel';
import { useAuth } from '../../hooks';

const Register = () => {
    const auth = useAuth();

    const [full_name, setFull_name] = useState('');
    const [email, setEmailText] = useState('');
    const [password, setPassword] = useState('');

    const _onChangeTextFull_name = useCallback((text: string) => {
        setFull_name(text);
    }, []);

    const _onChangeTextEmail = useCallback((text: string) => {
        setEmailText(text);
    }, []);

    const _onChangeTextPassword = useCallback((text: string) => {
        setPassword(text);
    }, []);

    const handleLogin = async () => {
        const data = await auth.register({ name: full_name, email, password });
        auth.setSessionFromLogin(data);
    };

    return (
        <>
            <InputLabel
                label='Nome Completo'
                placeholder='Nome Completo'
                value={full_name}
                onChangeText={_onChangeTextFull_name}
            />
            <InputLabel label='Email' placeholder='Email' value={email} onChangeText={_onChangeTextEmail} />
            <InputLabel
                label='senha'
                placeholder='Senha'
                secureTextEntry
                value={password}
                onChangeText={_onChangeTextPassword}
            />
            <LargeButton
                secondary={!(!!full_name && !!email && !!password)}
                buttonText='Criar conta'
                onPress={handleLogin}
            />
        </>
    );
};

export default Register;
