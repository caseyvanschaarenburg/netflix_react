import React from 'react';
import { Footer } from "../components";


export function FooterContainer(){
    return (
        <Footer>
            <Footer.Title>Vragen? Bel 0800-022-9647</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="https://help.netflix.com/nl/node/412">Veelgestelde vragen</Footer.Link>
                    <Footer.Link href="https://ir.netflix.net/ir-overview/profile/default.aspx">Relaties met investeerders</Footer.Link>
                    <Footer.Link href="https://devices.netflix.com/en/">Hoe kun je Netflix kijken?</Footer.Link>
                    <Footer.Link href="https://help.netflix.com/legal/corpinfo">Bedrijfsgegevens</Footer.Link>
                    <Footer.Link href="https://www.netflix.com/nl/browse/genre/839338">Netflix Originals</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href="https://help.netflix.com/nl/">Helpcentrum</Footer.Link>
                    <Footer.Link href="https://jobs.netflix.com/">Vacatures</Footer.Link>
                    <Footer.Link href="https://help.netflix.com/legal/termsofuse">Gebruiksvoorwaarden</Footer.Link>
                    <Footer.Link href="https://help.netflix.com/nl/contactus">Contact opnemen</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href="http://localhost:3000/browse">Account</Footer.Link>
                    <Footer.Link href="https://www.netflix.com/nl/redeem">Cadeaubonnen gebruiken</Footer.Link>
                    <Footer.Link href="https://help.netflix.com/legal/privacy">Privacy</Footer.Link>
                    <Footer.Link href="https://fast.com/">Snelheidstest</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href="https://media.netflix.com/nl/">Mediacenter</Footer.Link>
                    <Footer.Link href="https://www.netflix.com/gift-cards">Cadeaubonnen kopen</Footer.Link>
                    <Footer.Link href="http://localhost:3000/">Cookievoorkeuren</Footer.Link>
                    <Footer.Link href="https://help.netflix.com/legal/notices">Wettelijke bepalingen</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break />
            <Footer.Text>Netflix Nederland</Footer.Text>
        </Footer>
    )
}