import React, { Component } from 'react';
import SidebarComponent from "../Layout/SidebarComponent"
import "./index.css"


class StudentDashboard extends Component {
  state = {
    user: "student"
  }
  render() {
    return (
      <>
        <SidebarComponent user={this.state.user} />

      </>
    );
  }
}

export default StudentDashboard;