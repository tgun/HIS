import React, {Component} from 'react';

export default class CenterContentBox extends Component {
    render() {
        return this.props.items.map(item => {
            const items = item.content.map((b, i) => {
                return <p key={i}>{b}</p>
            });

            return (
                <div className="grid-x">
                    <div className="cell large-offset-2 large-8 master-container">
                        <h4>{item.title}</h4>
                        {items}
                    </div>
                </div>
            );
        });
    }
}