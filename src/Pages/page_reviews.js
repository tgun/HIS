import React from 'react';
import TopBarComp from '../Components/TopBar';
import CenterContentBox from '../Components/CenterContentBox';

import mainImage from '../Content/reviews.png';
import {REVIEWS} from '../constants';

const ReviewsPage = () => {
    return (
        <div className="App">
            <TopBarComp/>

            <div className="grid-x">
                <div className='cell large-offset-4 large-8'>
                    <img id="main-img" src={mainImage} className="review-pad" alt=""/>
                </div>
            </div>

            <div className="grid-x">
                <div className="cell large-offset-2 large-8 master-container">
                    <p><strong>Your opinion counts! We take reviews very seriously and use them as a tool to continually
                        improve our service to provide you with the best possible experience.</strong></p>
                    <p>What previous clients have to say about our inspections</p>

                </div>
            </div>

            <CenterContentBox
                items={REVIEWS}
            />

        </div>
    );
};

export default ReviewsPage;