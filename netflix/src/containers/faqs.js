import React from 'react';
import { Accordion } from '../components';
import faqsData from '../fixtures/faqs.json';
import OptForm from "../components/opt-form";


export function FaqsContainer(){
    return (
        <Accordion>
            <Accordion.Title>Veelgestelde vragen</Accordion.Title>
            {faqsData.map((item) => (
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
            <Accordion.Item>

            </Accordion.Item>

            <OptForm>
                <OptForm.Text>Klaar om te kijken? Voer je e-mailadres in om je lidmaatschap te starten of te hernieuwen.</OptForm.Text>
                <OptForm.Break />
                <OptForm.Input placeholder="E-mailadres" />
                <OptForm.Button>Aan de slag</OptForm.Button>
            </OptForm>
        </Accordion>
    );
}