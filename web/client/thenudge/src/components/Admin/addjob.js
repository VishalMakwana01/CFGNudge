import React, { Component } from 'react';
import SidebarComponent from "../Layout/SidebarComponent"
import TextFieldGroup from "../Common/TextFieldGroupComponent"
class AddJob extends Component {
    state = {
        title: "",
        description: "",
        role: "",
        company: "",
        errors: ""
    }
    render() {
        let errors = this.state.errors
        return (
            <>
                <SidebarComponent user="admin" />
                <div className="main">
                    <div className="container main-content">
                        <h1 className="display-4">Add a Job</h1>
                        <hr />
                        <div className="row justify-content-center image-container">
                            <img src="https://image.flaticon.com/icons/svg/2154/2154651.svg" height="100px" width="100px" />
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-4 col-lg-4 mt-5">
                                <form
                                    className="form-container"
                                    onSubmit={this.onSubmit}
                                    noValidate
                                >
                                    <TextFieldGroup
                                        name="title"
                                        type="text"
                                        error={errors.title}
                                        onChange={this.onChange}
                                        placeholder="Title"
                                        value={this.state.title}
                                    />
                                    <TextFieldGroup
                                        name="role"
                                        type="text"
                                        error={errors.role}
                                        onChange={this.onChange}
                                        placeholder="Role"
                                        value={this.state.role}
                                    />
                                    <TextFieldGroup
                                        name="description"
                                        type="text"
                                        error={errors.description}
                                        onChange={this.onChange}
                                        placeholder="Description"
                                        value={this.state.description}
                                    />
                                    <button
                                        type="submit"
                                        className="btn-primary  p-1 btn btn-lg btn-block mb-5"
                                    >
                                        Add
                  </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AddJob;