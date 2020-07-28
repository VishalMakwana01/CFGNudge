import React, { Component } from 'react';
import SidebarComponent from "../Layout/SidebarComponent"
import CardComponent from "../Common/CardComponent"
import Badge from "../Common/Badge"
import { connect } from "react-redux"
import { getJobDetails } from "../../redux/actions/jobAction"
class JobListing extends Component {
    componentDidMount() {
        this.props.getJobDetails()
    }
    state = {
        jobs: [
            { company: "JP morgan", role: "Analyst", posted: "Today", description: "Hey there" },
            { company: "JP morgan", role: "Analyst", posted: "Today", description: "Hey there" },
            { company: "JP morgan", role: "Analyst", posted: "Today", description: "Hey there" },
            { company: "JP morgan", role: "Analyst", posted: "Today", description: "Hey there" },
            { company: "JP morgan", role: "Analyst", posted: "Today", description: "Hey there" },
        ]
    }
    render() {
        let jobs = this.props.jobs.data.data
        return (<>
            <SidebarComponent user="student" />
            <div className="main">
                <div className="container main-content">
                    <h2 className="display-4">Job Lists</h2>
                    <br />
                    <div className="row no-gutters card-responsive ">
                        <Badge title="All" />
                        <div className="col-1"></div>
                        <Badge title="JPMC" />
                    </div>
                    <div className="row no-gutters justify-content-between card-responsive" >
                        {jobs.map((job, index) => (
                            <div className="hover-magnify" key={index}>
                                <CardComponent
                                    info={job} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>);
    }
}

const mapStatetoProps = (state) => ({
    jobs: state.students.jobs
})
export default connect(mapStatetoProps, { getJobDetails })(JobListing);