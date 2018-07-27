import React, {Component} from 'react';
import TopBarComp from '../Components/TopBar';

export default class BookingPage extends Component {
    render() {
        const iframeStyle = {
            width: '775px',
            'min-height': '950px',
            height: '950px'
        };

        return (
            <div className="App">
                <TopBarComp/>

                <div className="grid-x">
                    <div className="cell large-9 large-offset-3">
                        <h4>Schedule an Inspection</h4>
                        <iframe title="ISN Booking"
                                src="https://4isn.com/hisinspectionstx/schedule-online/a60ac7a4-65c4-5205-99c4-52c3e5f37002"
                                style={iframeStyle} scrolling="yes">Please upgrade your browser....<a
                            href="http://google.com/chrome">http://google.com/chrome</a></iframe>
                    </div>
                </div>

            </div>
        );
    }
}