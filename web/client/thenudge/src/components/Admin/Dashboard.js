//  Admin Dashboard
//
//  Dashboard component for displaying the student information
//  along with the list of alloted teachers
//

import React, { Component } from 'react';
import SidebarComponent from "../Layout/SidebarComponent";
import ChartComponent from '../Common/ChartComponent';
import { getStudents } from '../../redux/actions/studentActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Axios from 'axios';

class AdminDashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            students: null,
            teachers: null
        }
    }

    componentDidMount() {
        this.props.getStudents();

        Axios.get('http://localhost:5000/allocateBatch')
            .then(res => {
                this.setState({
                    teachers: res.data.data
                });
                console.log(this.state);
            });
    }

    render() {

        let teachers = '';

        const timeslots = {
            1: "9 - 10 A.M.",
            2: "10 - 11 A.M.",
            3: "11 - 12 Noon",
            4: "12 - 1 P.M.",
            5: "2 - 3 P.M.",
            6: "3 - 4 P.M.",
            7: "5 - 6 P.M.",
            8: "6 - 7 P.M."
        }

        if (this.state.teachers) {
            let teachers_list = { ...this.state.teachers };
            let teacher_names = Object.keys(teachers_list);
            let slots = Object.values(teachers_list);
            slots = slots.map(slots => {
                return slots.map(slot => timeslots[slot]);
            })
            teachers = (
                <div className="row">
                    <div className="col-8">
                        <h1 className="display-4">Teachers Slots</h1>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Slots Alloted</th>
                                </tr>
                            </thead>
                            <tbody>

                                {teacher_names.map((name, index) => {
                                    return (
                                        <tr>
                                            <td scope="row">{name}</td>
                                            <td>
                                                {slots[index].reduce((final, sub) => `${final},${sub}`)}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }

        return (
            <>
                <SidebarComponent user="admin" />
                <div className="main">
                    <div className="container main-content">
                        <div className="row">
                            <div className="col-8">
                                <h1 className="display-4">Student Insights</h1>
                                <hr />
                                <ChartComponent
                                    labels={[
                                        "9-10 A.M.",
                                        "10-11 A.M.",
                                        "11-12 Noon",
                                        "12-1 P.M.",
                                        "2-3 P.M.",
                                        "3-4 P.M.",
                                        "5-6 P.M.",
                                        "6-7 P.M.",
                                    ]}
                                    dataset={[
                                        {
                                            title: "Time Slot Preference",
                                            values: [
                                                "12",
                                                "10",
                                                "35",
                                                "45",
                                                "32",
                                                "49",
                                                "23",
                                                "19",
                                            ],
                                            color: "#1f4068",
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                        {teachers}
                    </div>
                </div>
            </>
        );
    }
}

AdminDashboard.propTypes = {
    students: PropTypes.object.isRequired,
    getStudents: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    students: state.students
})

export default connect(mapStateToProps, { getStudents })(AdminDashboard);