import React from "react";
import './WinMessage.css';


class WinMessage extends React.Component {
    render() {
        return (
            <div className="win-message">
                <span className="neon">You</span>
                <span className="flux">Won</span>
            </div>
        );
    }
}

export default WinMessage;