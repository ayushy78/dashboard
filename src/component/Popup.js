function Popup({ onClose, data, onDataChange }) {
    const handleDataChange = (event) => {
        onDataChange(event.target.value);
    };

    const handleDateChange = (newDate) => {
        onDataChange(newDate);
    };

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2>Change Duration</h2>
                <input type="text" value={data} onChange={handleDataChange} />
                <button onClick={() => handleDateChange("Today")}>Today</button>
                <button onClick={() => handleDateChange("Tomorrow")}>Tomorrow</button>
                <button onClick={() => handleDateChange("Next Week")}>Next Week</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Popup;