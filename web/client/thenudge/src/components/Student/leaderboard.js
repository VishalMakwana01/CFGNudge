import React, { Component } from 'react';
import SidebarComponent from "../Layout/SidebarComponent"
import { connect } from "react-redux"
import { getLeader } from "../../redux/actions/studentActions"
class Leaderboard extends Component {
    state = {
        users: [
            { name: "Vishal", score: "400" },
            { name: "Vishal", score: "400" },
            { name: "Vishal", score: "400" },
            { name: "Vishal", score: "400" },
            { name: "Vishal", score: "400" },
            { name: "Vishal", score: "400" },
            { name: "Vishal", score: "400" },
            { name: "Vishal", score: "400" },
            { name: "Vishal", score: "400" },
        ]
    }
    componentDidMount() {
        this.props.getLeader()
    }
    render() {
        console.log(this.props)
        return (this.props.leader &&
            <>
                <SidebarComponent user="student" />
                <div className="main">
                    <div className="container main-content">
                        <h2 className="display-4">Leaderboard</h2>
                        <br />
                        <div id="container">
                            <div className="row-leaderboard">
                                <div className="name" style={{ fontWeight: "bold" }}> Name</div><div className="score"
                                    style={{ fontWeight: "bold" }}>Score</div>
                            </div>
                            {Object.keys(this.props.leader).map((key, index) => (
                                <div className="row-leaderboard" key={index}>
                                    <div className="name"><i className="fa fa-user-o" aria-hidden="true"></i> {this.props.leader[key][0]}</div><div className="score">{this.props.leader[key][1]}</div>
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
    leader: state.students.leader
})
export default connect(mapStatetoProps, { getLeader })(Leaderboard);