import React from 'react';
import './Card.css';
class Card extends React.Component {
    render() {
        return (
            <div className="cardd">
                <div className="cardd-body-1">
                    <h2>{this.props.title}</h2>
                    <h5>{this.props.value}</h5>
                </div>
            </div>
        );
    }
}

export default Card;