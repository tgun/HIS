import React from 'react';
import TopBarComp from '../Components/TopBar';
import BannerImage from '../Components/BannerImage';
import ContentBox from '../Components/ContentBox';
import {Link} from 'react-router-dom';

import mainImage from '../Content/outside.png'; // -- outside.png

const CONTACT_TEXT = [
    "Have a question?  Please review our FAQ section for answers to some excellent questions.",
    <span>Still have a question?  Please contact us through email at <a
        href="mailto:Info@HISInspectionsTX.com">Info@HISInspectionsTX.com</a> and we will answer your question as soon as possible or call you directly (don’t forget to leave your number).</span>,
];

const CONTACT_2 = [
    "The fastest way to get in on a great inspection experience is to book on line.  Please use the link below and in a few short minutes you’ll be on your way and guarantee your inspection appointment.",
    <Link className="expanded large button" to="/booking">Schedule Now</Link>
];

const CONTACT_3 = [
    <span>Email your information to <a href="mailto:Booking@HISInspectionsTX.com">Booking@HISInspectionsTX.com</a> and we will take your basic information and get you started by checking availability, then call you to give you a quote and confirm your appointment.</span>,
    "Include in your email:",
    <span>Customer name and phone number<br/>
               Agent name and phone number <br/>
               Complete address that is to be inspected<br/>
               MLS#<br/>
               Requested inspections date (be sure to include an alternate in case your primary date is already taken)<br/>
               Requested inspection time (9:00 A.M. or 1:00 P.M.) <br/>
               Preferred contact method (phone or email)  </span>,
    "We look forward to meeting you soon!"
];

const ContactPage = () => {
    const myTemp = {
        'flex-shrink': 0
    };

    return (
        <div className="App" style={myTemp}>
            <TopBarComp/>
            <BannerImage image={mainImage}/>

            <div className="grid-x grid-padding-x">
                <ContentBox
                    title='Contact Us'
                    content={CONTACT_TEXT}
                />

            </div>
            <div className="grid-x">
                <ContentBox title='Ready to book an inspection or get a quote?' content={CONTACT_2}/>
            </div>
            <div className="grid-x">
                <ContentBox title='Unable to book on line?' content={CONTACT_3}/>
            </div>


        </div>
    );
};

export default ContactPage;