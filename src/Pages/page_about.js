import React, {Component} from 'react';
import TopBarComp from '../Components/TopBar';
import BannerImage from '../Components/BannerImage';
import ContentBox from '../Components/ContentBox';
import SideBox from '../Components/SideBox';

import mainImage from '../Content/outside.png'; // -- needs to be 'outside' for this page.
import {PHONE_NUMBER} from '../constants';

export default class AboutPage extends Component {
    render() {
        return (
            <div className="App">
                <TopBarComp/>
                <BannerImage image={mainImage}/>

                <div className="grid-x grid-padding-x">
                    <ContentBox
                        title='Tom Roberts'
                        content={["Tom Roberts is the primary inspector for H.I.S. Inspections. He trained under the careful instruction of other master inspectors and has developed a reputation for being very detailed in his reports, and making sure his customers walk away with a smile every time."]}
                    />

                    <div className="cell medium-6 large-3">
                        <SideBox
                            title='Schedule your inspection now'
                            content={[`Call us at ${PHONE_NUMBER} to setup your inspection, or click below to schedule online!`]}
                            link="/booking"
                            button="Schedule Now!"
                        />
                    </div>

                    <ContentBox
                        title="Our Values"
                        content={[
                            "At H.I.S. Inspections, our faith is very important to us, and we plan to show it in the work we do.",
                            'As Colossians 3:23 says, "Whatever you do, work heartily, as for the Lord and not for men".',
                            "With this in mind, we make sure to work to the best of our ability, to glorify God and to make sure our customers get nothing short of the best home inspection possible. Every time."
                        ]}
                    />

                </div>
            </div>
        );
    }
}