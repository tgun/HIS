import React, {Component} from 'react';
import TopBarComp from '../Components/TopBar';
import BannerImage from '../Components/BannerImage';
import ContentBox from '../Components/ContentBox';
import SideBox from '../Components/SideBox';

import mainImage from '../Content/outside.png';
import {PHONE_NUMBER} from '../constants';

export default class ServicesPage extends Component {
    render() {
        return (
            <div className="App">
                <TopBarComp/>
                <BannerImage image={mainImage}/>

                <div className="grid-x grid-padding-x">
                    <ContentBox
                        title='Our Services'
                        content={[
                            "Home Inspection Specialists provides a range of home inspection services to meet your needs.",
                            <h4>Pre-Listing Consultation</h4>,
                            "Thinking of selling your home?  Let us help you be prepared.  " +
                            "We offer an informal pre listing consultation to educate you on the things that a " +
                            "home inspector will be checking when you accept an offer.  These consultation generally take around two hours " +
                            "during which time we walk you through your home and show you the things that may be called out as deficient during a home inspection.",
                            <h5>Pre-Warranty Expiration</h5>,
                            "Did you buy a new home and the 12 month builder's warranty is about to expire? We can do an inspection for you to discover and report any issues prior to warranty expiration.",
                            <h5>Before Purchase Home Inspection</h5>,
                            "Get the peace of mind you need to make a secure purchase by having your future home inspected. Don't judge a book by the cover! Many faults can go unnoticed, which could mean unexpected home repairs for you." +
                            "Let our licensed professional inspectors give you a full evaluation of the current condition of your dream home.",
                            <h5>Pool Inspection</h5>,
                            "The summer heat in Texas is no joke. It's no wonder pools are a popular option when looking to buy a home. Make sure your pool equipment won't fail you this summer with a pool inspection.",
                            <h5>Sprinkler System Inspection</h5>,
                            "Sprinkler systems are large investments. If your future home is being advertised has having a sprinkler system, make sure it works!",
                            <h5>WDI (Wood Destroying Insects) Inspection</h5>,
                            "These insects are more than just mere pests, and can cause serious damage to your home. Have a licensed pest control expert inspect your home to ive you confidence that you won't have any unexpected guests."
                        ]}
                    />

                    <div className="cell medium-6 large-3">
                        <SideBox
                            title='Schedule your inspection now'
                            content={[`Call us at ${PHONE_NUMBER} to setup your inspection, or click below to schedule online!`]}
                            link="/booking"
                            button="Schedule Now!"
                        />
                    </div>
                </div>

            </div>
        );
    }
}