import React from "react";
import "./Card.css";
class Card extends React.Component {
  render() {
    return (
      <div className={this.props.className + " cardd"}>
        <div className="cardd-body-1">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Card;
