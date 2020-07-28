import React, { Component } from 'react';
import SidebarComponent from "../Layout/SidebarComponent"
import Axios from 'axios';
class JobSort extends Component {
    state = {
        teachers: ""
    }
    componentDidMount() {
        Axios.get('http://localhost:5000/getCandidates')
            .then(res => {
                this.setState({
                    jobs: res.data.data,
                    particular_job: res.data.data
                });
                console.log(this.state);
            });
    }
    handleEvent = (e, company) => {
        if (company == "all") {
            this.setState({ particular_job: this.state.jobs })
        }
        else {
            const new_jobs = this.state.jobs.filter(job => job.company == company)
            this.setState({
                particular_job: new_jobs
            })
        }
    }
    render() {
        console.log(this.state)
        return (
            <>
                <SidebarComponent user="admin" />
                <div className="main">
                    <div className="container main-content">
                        <h1 className="display-4">Jobs</h1>
                        <hr />
                        <div className="row no-gutters card-responsive ">
                            <span style={{
                                width: "100px", height: "30px", fontSize: "18px", marginLeft: "10px",
                                backgroundColor: "#022c5e", cursor: "pointer", color: "white"
                            }}
                                className="badge " onClick={e => this.handleEvent(e, "all")}>All</span>
                            <span style={{
                                width: "100px", height: "30px", fontSize: "18px", marginLeft: "10px",
                                backgroundColor: "#022c5e", cursor: "pointer", color: "white"
                            }}
                                className="badge " onClick={e => this.handleEvent(e, "jpmc")}>JPMC</span>
                            <span style={{
                                width: "100px", height: "30px", fontSize: "18px", marginLeft: "10px",
                                backgroundColor: "#022c5e", cursor: "pointer", color: "white"
                            }}
                                className="badge " onClick={e => this.handleEvent(e, "abc")}>ABC</span>
                            <span style={{
                                width: "100px", height: "30px", fontSize: "18px", marginLeft: "10px",
                                backgroundColor: "#022c5e", cursor: "pointer", color: "white"
                            }}
                                className="badge " onClick={e => this.handleEvent(e, "xyz")}>XYZ</span>
                        </div>
                        <div className="row">
                            <div className="col-6" style={{ fontWeight: "bold", fontSize: "24px" }}>Name</div>
                            <div className="col-6" style={{ fontWeight: "bold", fontSize: "24px" }}>Skills</div>
                        </div>
                        <div className="row">
                            {this.state.particular_job && this.state.particular_job.map((job, index) => (
                                <>
                                    <div className="col-6"><i className="fa fa-user-o" aria-hidden="true"></i> {job.name}</div>
                                    <div className="col-6">{job.skill && (job.skill[0] + "," + job.skill[1])}</div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default JobSort;