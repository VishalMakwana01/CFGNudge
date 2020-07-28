import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser } from '../../redux/actions/authActions';
import TextFieldGroup from '../Common/TextFieldGroupComponent';
import SelectFieldGroup from "../Common/SelectFieldGroupComponent";
import { withRouter } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {},
            designation: "student"
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }



    onChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }
    onSubmit(event) {
        event.preventDefault();

        const user = {
            Email: this.state.email,
            Password: this.state.password
        }

        this.props.loginUser(user,this.state.designation,this.props.history);
    } 

    render() {
        const { errors } = this.state;
        const options = [
          { label: "Student", value: "student" },
          {
            label: "Teacher",
            value: "teacher",
          },
          {
            label: "Admin",
            value: "admin",
          },
        ];

        return (
          <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4 col-10 mt-3 pb-4 bg-light box-shadow-around-black rounded-border">
                <h1 className="display-4 text-center">Login</h1>
                <form
                  className="form-container"
                  onSubmit={this.onSubmit}
                  noValidate
                >
                  <TextFieldGroup
                    name="email"
                    type="email"
                    error={errors.email}
                    onChange={this.onChange}
                    placeholder="Email"
                    value={this.state.email}
                  />
                  <TextFieldGroup
                    name="password"
                    type="password"
                    error={errors.password}
                    onChange={this.onChange}
                    placeholder="Password"
                    value={this.state.password}
                  />
                  <SelectFieldGroup
                    name="designation"
                    type="text"
                    error={errors.designation}
                    onChange={this.onChange}
                    placeholder="Designation"
                    value={this.state.designation}
                    options={options}
                  />
                  <button
                    type="submit"
                    className="btn-primary  p-1 btn btn-lg btn-block"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired
}

export default connect(null,{loginUser})((withRouter(Login)));
