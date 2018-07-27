import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class SideBox extends Component {
    renderContent() {
        return this.props.content.map((a, i) => {
            return <p key={i}>{a}</p>
        });
    }

    render() {
        let linkJsx = '';
        if (this.props.extLink) {
            linkJsx = <a href={this.props.extLink} target="_blank" className="button">{this.props.button}</a>
        } else {
            linkJsx = <Link to={this.props.link} className="button">{this.props.button}</Link>
        }

        return (
            <div className="card master-card">
                <div className="card-section">
                    <h4>{this.props.title}</h4>
                    {this.renderContent()}
                    {linkJsx}
                </div>
            </div>
        );
    }
}