import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';

export default function SignUp() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName === '' || password === '' || emailAddress === '';

    const handleSignup = (event) => {
        event.preventDefault();

        return firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) =>
                result.user
                    .updateProfile({
                        displayName: firstName,
                        photoURL: Math.floor(Math.random() * 5) + 1,
                    })
                    .then(() => {
                        history.push(ROUTES.BROWSE);
                    })
            )
            .catch((error) => {
                setFirstName('');
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            });
    };

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Registreren</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input
                            placeholder="Voornaam"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                        />
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
                        <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-up">
                            Registreren
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        Al een gebruiker? <Form.Link to="/signin">Nu inloggen.</Form.Link>
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