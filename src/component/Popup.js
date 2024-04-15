import React from "react";
import "./Popup.css";
import Card from "./Cards";

function Popup({ onClose, data, onDataChange }) {
  const handleDataChange = (event) => {
    onDataChange(event.target.value);
  };

  const handleDateChange = (newDate) => {
    onDataChange(newDate);
  };

return (
    <div className="popup-overlay" style={{ zIndex: 20 }}>
        <Card className="popup-content">
            <h2>Change Duration</h2>
            <input type="text" value={data} onChange={handleDataChange} />
            <div className="button-row">
                <button onClick={() => handleDateChange("Today")}>Today</button>
                <button onClick={() => handleDateChange("Tomorrow")}>Tomorrow</button>
                <button onClick={() => handleDateChange("Next Week")}>
                    Next Week
                </button>
            </div>
            <div className="button-row">
                <button onClick={onClose}>Close</button>
            </div>
        </Card>
    </div>
);
}

export default Popup;
