import React, {Component} from 'react';
import TopBarComp from '../Components/TopBar';
import BannerImage from '../Components/BannerImage';
import ContentBox from '../Components/ContentBox';
import SideBox from '../Components/SideBox';

import mainImage from '../Content/interior.png';
import {PHONE_NUMBER} from '../constants';
import CenterContentBox from "../Components/CenterContentBox";

const SATISFACTION_TEXT = [
    "At Home Inspection Specialists, your satisfaction is at the center of what we do.",
    "First, we designed our website to be simple yet informative, and we offer the ease of online ordering and payment.",
    "Next, from the time our inspector arrives on site and throughout the inspection process, we strive to ensure you " +
    "are informed about the inspection process and will provide you with a verbal review of the inspection once completed as well to answer any questions you may have.",
    "Lastly, your report will be simple to understand. We make sure to use pictures throughout so you can understand and visualize any potential issues.",
    "",
    "Now, all you have to do is have a look around, check out the F.A.Q., read the reviews (we look forward to adding your's soon), and hit the schedule now button!"
];

export default class IndexPage extends Component {
    render() {
        return (
            <div className="App">
                <TopBarComp/>

                <BannerImage
                    image={mainImage}
                />

                <div style={{'text-align': 'center'}}>

                    <CenterContentBox
                        items={[{
                            title: '', content: [
                                "Looking for an informative, quality home inspection? Looking for a company that cares?",
                                <h3>Welcome!</h3>
                            ]
                        }]}
                    />
                </div>
                <div className="grid-x grid-padding-x">
                    <ContentBox title='Your Satisfaction at the core' content={SATISFACTION_TEXT}/>

                    <div className="cell medium-6 large-3">
                        <SideBox
                            title='Schedule your inspection now'
                            content={[`Call us at ${PHONE_NUMBER} to setup your inspection, or click below to schedule online!`]}
                            link="/booking"
                            button="Schedule Now!"
                        />
                        <SideBox
                            title='Be Safe!'
                            content={["Your rights are protected under the TREC (Texas Real Estate Commission). You can find more information at the link below."]}
                            extLink="https://www.trec.texas.gov/forms/consumer-protection-notice"
                            button="Texas Real Estate Commission Consumer Protection Notice"
                        />
                    </div>
                </div>

            </div>
        );
    }
}