import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./index.css"
import { logout } from "../../redux/actions/authActions"
import { connect } from "react-redux";
const SidebarComponent = (props) => {
    let location = useLocation()
    let path = location.pathname
    let user = props.user ? props.user : "student"
    if (user === "student") {
        return (
            <div className="sidenav">
                <span className="sidenav-logo"><i className="fa fa-book" aria-hidden="true"></i>  Allotify</span>
                <Link to="/schedule" style={{ textDecoration: "none" }}><span className={path === "/schedule" ? "selected-nav" : ""}><i className="fa fa-calendar" aria-hidden="true"></i>  Schedule</span></Link>
                <Link to="/jobs" style={{ textDecoration: "none" }}><span className={path === "/jobs" ? "selected-nav" : ""}><i className="fa fa-briefcase" aria-hidden="true"></i>  Job Listing</span></Link>
                <Link to="/userprofile" style={{ textDecoration: "none" }}><span className={path === "/userprofile" ? "selected-nav" : ""}><i className="fa fa fa-user-o" aria-hidden="true"></i>  Profile</span></Link>
                <Link to="/leaderboard" style={{ textDecoration: "none" }}><span className={path === "/leaderboard" ? "selected-nav" : ""}><i className="fa fa-calendar-o" aria-hidden="true"></i>  Leaderboard</span></Link>
                <Link to="/" style={{ textDecoration: "none" }}><span onClick={e => props.logout(e)}><i className="fa fa-sign-out" aria-hidden="true"></i>  Log out</span></Link>
            </div >
        );
    }
    if (user === "teacher") {
        return (
            <div className="sidenav">
                <span className="sidenav-logo"><i className="fa fa-book" aria-hidden="true"></i>  Allotify</span>
                <Link to="/teacherschedule" style={{ textDecoration: "none" }}><span className={path === "/teacherschedule" ? "selected-nav" : ""}><i className="fa fa-calendar" aria-hidden="true"></i>  Schedule</span></Link>
                <Link to="/teacherprofile" style={{ textDecoration: "none" }}><span className={path === "/teacherprofile" ? "selected-nav" : ""}><i className="fa fa fa-user-o" aria-hidden="true"></i>  TeacherProfile</span></Link>
                <Link to="/" style={{ textDecoration: "none" }}><span><i className="fa fa-sign-out" aria-hidden="true"></i>  Log out</span></Link>
            </div >
        )
    }
    if (user === "admin") {
        return (
            <div className="sidenav">
                <span className="sidenav-logo"><i className="fa fa-book" aria-hidden="true"></i>  Allotify</span>
                <Link to="/admin-dashboard" style={{ textDecoration: "none" }}><span className={path === "/admin-dashboard" ? "selected-nav" : ""}><i className="fa fa-hashtag" aria-hidden="true"></i>  Dashboard</span></Link>
                <Link to="/addjob" style={{ textDecoration: "none" }}><span className={path === "/addjob" ? "selected-nav" : ""}><i className="fa fa-calendar" aria-hidden="true"></i>  Add Job</span></Link>
                <Link to="/joblists" style={{ textDecoration: "none" }}><span className={path === "/joblists" ? "selected-nav" : ""}><i className="fa fa fa-user-o" aria-hidden="true"></i>  Notifications</span></Link>
                <Link to="/notifications" style={{ textDecoration: "none" }}><span className={path === "/notifications" ? "selected-nav" : ""}><i className="fa fa fa-user-o" aria-hidden="true"></i>  Notifications</span></Link>
                <Link to="/" style={{ textDecoration: "none" }}><span><i className="fa fa-sign-out" aria-hidden="true"></i>  Log out</span></Link>
            </div >
        )
    }
}

export default connect(null, { logout })(SidebarComponent);
