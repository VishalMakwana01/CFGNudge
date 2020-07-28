import React, { Component } from 'react';
import SidebarComponent from "../Layout/SidebarComponent"
import "./index.css"
import { connect } from "react-redux"
import CardComponent from "../Common/CardComponent"
class Schedule extends Component {
    state = {
        slots: [
            { title: "Title", description: "Description", time: "12-1", teacher: "Miss Braganza" },
        ]
    }
    render() {
        return (
            <>
                <SidebarComponent />
                <div className="main">
                    <div className="container main-content">
                        <h2 className="display-4">Schedule</h2>
                        <br />
                        <div className="row no-gutters justify-content-between card-responsive" >
                            {this.state.slots.map((job, index) => (
                                <div className="hover-magnify" key={index}>
                                    <CardComponent
                                        slot={true}
                                        info={job} />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </>
        );
    }
}
const mapStatetoProps = (state) => ({
    auth: state.auth
})
export default connect(mapStatetoProps, null)(Schedule);