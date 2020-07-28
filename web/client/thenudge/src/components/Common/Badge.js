import React from 'react';

const Badge = (props) => {
    return (
        <span style={{
            width: "100px", height: "30px", fontSize: "18px",
            backgroundColor: "#022c5e", cursor: "pointer", color: "white"
        }}
            className="badge " onClick={e => this.handleEvent(e, "All")}>{props.title}</span>
    )
}
export default Badge