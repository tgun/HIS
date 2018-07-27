import React, {Component} from 'react';

export default class ContentBox extends Component {

    renderContent() {
        return this.props.content.map((a, i) => {
            return <p key={i}>{a}</p>
        });
    }

    render() {
        return (
            <div className="cell medium-6 large-6 large-offset-2 master-container">
                <h4>{this.props.title}</h4>
                {this.renderContent()}
            </div>
        );
    }
}