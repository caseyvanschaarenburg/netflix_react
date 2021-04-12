import React from "react";
import {JumbotronContainer} from "../containers/jumbotron";
import {FaqsContainer} from "../containers/faqs";
import {FooterContainer} from "../containers/footer";
import {BrowserRouter as Router} from "react-router-dom";

export default function Home() {
    return <>
        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer/>
    </>
}