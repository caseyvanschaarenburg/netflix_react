import React from "react";
import {JumbotronContainer} from "../containers/jumbotron";
import {FaqsContainer} from "../containers/faqs";
import {FooterContainer} from "../containers/footer";
import {BrowserRouter as Router} from "react-router-dom";
import {HeaderContainer} from "../containers/header";
import { Feature, OptForm } from '../components';

export default function Home() {
    return <>
        <HeaderContainer>
            <Feature>
                <Feature.Title><b>Onbeperkt series, films en meer kijken.</b></Feature.Title>
                <Feature.SubTitle>Kijk waar je wilt. Altijd opzegbaar.</Feature.SubTitle>
                <OptForm.Text>Klaar om te kijken? Voer je e-mailadres in om je lidmaatschap te starten of te hernieuwen.</OptForm.Text>
                <OptForm>
                    <OptForm.Input placeholder="E-mailadres" />
                    <OptForm.Button>Aan de slag</OptForm.Button>
                    <OptForm.Break />
                </OptForm>
            </Feature>
        </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer/>
    </>
}