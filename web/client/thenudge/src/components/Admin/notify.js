import React, { Component } from 'react';
import SidebarComponent from "../Layout/SidebarComponent"
class Notify extends Component {
    state = {}
    render() {
        return (
            <>
                <SidebarComponent user="admin" />
                <div className="main">
                    <div className="container main-content">
                        <h1 className="display-4">Notifications</h1>
                        <hr />
                    </div>
                </div>
            </>
        );
    }
}

export default Notify;