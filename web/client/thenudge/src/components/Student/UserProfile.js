import React, { Component } from "react";
import SidebarComponent from "../Layout/SidebarComponent"
class UserProfile extends Component {
  componentDidMount() { }

  render() {
    return (
      <>
        <SidebarComponent />
        <div className="main">
          <div className="main-content">
            <div className="row justify-content-center">
              <div className="settings">
                <div className="img-container">
                  <img
                    src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                    alt="user-dp"
                  />
                </div>

                <div className="field">
                  <div className="field-label">Name</div>
                  <div className="field-value">John Doe</div>
                </div>

                <div className="field">
                  <div className="field-label">Email</div>
                  <div className="field-value">johndoe@test.com</div>
                </div>

                <div className="field">
                  <div className="field-label">DOB</div>
                  <div className="field-value">12/10/1999</div>
                </div>
                <div className="field">
                  <div className="field-label">Aadhar</div>
                  <div className="field-value">875212341234</div>
                </div>

                {/* <div className="btn-grp">
          <button className="button save-btn">Add Friend</button>
        </div> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UserProfile;
