import React, {Component} from 'react';
import TopBarComp from '../Components/TopBar';
import CenterContentBox from '../Components/CenterContentBox';

import mainImage from '../Content/faq.png';
import {FAQ} from '../constants';

export default class FaqPage extends Component {
    render() {
        return (
            <div className="App">
                <TopBarComp/>

                <div className="grid-x">
                    <div className="cell large-offset-2 large-8">
                        <img src={mainImage} alt="" className="review-pad"/>
                    </div>
                </div>

                <CenterContentBox
                    items={FAQ}
                />
            </div>
        );
    }
}