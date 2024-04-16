import React from "react";
import "./Popup.css";
import Card from "./Cards";
import dateRange from "./DateFilter";
import DateFilter from "./DateFilter";
import { useState } from "react";
import handleDateChange from "./DateFilter";
function Popup({ onClose, data }) {

return (
    <div className="popup-overlay" style={{ zIndex: 20 }}>
        <Card className="popup-content">
            <h2>Change Duration</h2>
            <div className="button-row">
            <DateFilter
                  onDateChange={handleDateChange}
                  dateRange={dateRange}
                />
            </div>
            <div className="button-row">
                <button onClick={onClose}>Close</button>
            </div>
        </Card>
    </div>
);
}

export default Popup;
