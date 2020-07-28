import React, { Component } from "react";
import SidebarComponent from "../Layout/SidebarComponent";
import "./index.css";
import CardComponent from "../Common/CardComponent"
class Schedule extends Component {
  state = {
    slots: [
      {
        title: "English", timing: "10-11"
      }, {
        title: "English", timing: "9-10"
      }, {
        title: "English", timing: "7pm -8pm"
      },
    ]
  };
  render() {
    return (
      <>
        <SidebarComponent user="teacher" />
        <div className="main">
          <div className="container main-content">
            <h2 className="display-4">Schedule</h2>
            <hr />
            <div className="row no-gutters justify-content-between card-responsive" >
              {this.state.slots.map((slot, index) => (
                <CardComponent
                  teacher={true}
                  info={slot} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Schedule;
