import React, { Component } from 'react';
import SidebarComponent from "../Layout/SidebarComponent"
class Profile extends Component {
    state = {}
    render() {
        return (<>
            <SidebarComponent user="student" />
            <div className="main">
                <div className="container main-content">
                    hello
                    </div>
            </div>
        </>);
    }
}

export default Profile;