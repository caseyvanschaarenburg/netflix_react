import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';

export default function SignIn() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = password === '' || emailAddress === '';

    const handleSignin = (event) => {
        event.preventDefault();

        return firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                history.push(ROUTES.BROWSE);
            })
            .catch((error) => {
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            });
    };

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Inloggen</Form.Title>
                    {error && <Form.Error data-testid="error">{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignin} method="POST">
                        <Form.Input
                            placeholder="E-mailadres"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            type="password"
                            value={password}
                            autoComplete="off"
                            placeholder="Wachtwoord"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-in">
                            Inloggen
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        Is Netflix nieuw voor jou? <Form.Link to="/signup">Registreer je nu.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href='#'>Lees meer informatie.</a>
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
}