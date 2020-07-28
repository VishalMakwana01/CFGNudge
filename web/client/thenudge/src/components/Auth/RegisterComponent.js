import React, { Component } from 'react';
import TextFieldGroup from '../Common/TextFieldGroupComponent';
import SelectFieldGroupComponent from '../Common/SelectFieldGroupComponent';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerStudent } from '../../redux/actions/authActions';

class RegisterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: "",
      dob: '',
      preference: '1',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // Handling change event in form values
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // Handling submit event of the form
  onSubmit(event) {
    event.preventDefault();

    const newStudent = {
      Name: this.state.name,
      Email: this.state.email,
      Password: this.state.password,
      dob: this.state.dob,
      preference: this.state.preference,
      student_starting_score: Math.floor(Math.random() * 100) 
    }

    this.props.registerStudent(newStudent,this.props.history);
  }

  render() {
    let errors = this.state.errors;
    const options = [
      { label: "9 - 10 A.M.", value: "1" },
      { label: "10 - 11 A.M.", value: "2" },
      { label: "11 - 12 Noon", value: "3" },
      { label: "12 - 1 P.M.", value: "4" },
      { label: "2 - 3 P.M.", value: "5" },
      { label: "3 - 4 P.M.", value: "6" },
      { label: "5 - 6 P.M.", value: "7" },
      { label: "6 - 7 P.M.", value: "8" },
    ];
    return (
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 col-10 mt-3 pb-4 bg-light rounded-border box-shadow-around-black">
            <h1 className="display-4 text-center">Register</h1>
            <form className="form-container" onSubmit={this.onSubmit}>
              <TextFieldGroup
                name="name"
                type="text"
                error={errors.name}
                onChange={this.onChange}
                placeholder="Name"
                value={this.state.name}
              />
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
              <TextFieldGroup
                name="password2"
                type="password"
                error={errors.password2}
                onChange={this.onChange}
                placeholder="Confirm Password"
                value={this.state.password2}
              />
              <TextFieldGroup
                name="dob"
                type="date"
                error={errors.dob}
                onChange={this.onChange}
                placeholder="Password"
                value={this.state.dob}
                info="Enter your Date of Birth"
              />
              <SelectFieldGroupComponent
                name="pref1"
                value={this.state.preference}
                onChange={this.onChange}
                info="Enter Your Preference for Time Slot"
                options={options}
              />
              <button
                type="submit"
                className="p-1 btn btn-lg btn-primary btn-block"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// Proptype confirmation
RegisterComponent.propTypes = {
  registerStudent: PropTypes.func.isRequired
}

// Connecting with redux and router history for redirect from actions
export default connect(null,{registerStudent})(withRouter(RegisterComponent));
