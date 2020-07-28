import React, { Component } from 'react';

class CardComponent extends Component {
    state = {
        title: "hey this is the title",
        timing: "11:20-12:20",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry/. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        teacher: "Miss Braganza",
        batch: "J1",
        no_of_students: "10"
    }
    render() {
        if (this.props.slot) {
            return (
                <div>
                    <div className="card box-shadow-around-black" style={{ width: 'auto', maxWidth: "400px", minWidth: "200px" }}>
                        <img className="card-img-top" src="https://images.indianexpress.com/2015/04/students-l1.jpg" />
                        <div className="card-body">
                            <h4 className="card-title">{this.props.info.title}</h4>
                            <p>{this.props.info.time}</p>
                            <p className="card-text">{this.props.info.description}</p>
                            <p className="card-text">Teacher: {this.props.info.teacher}</p>
                        </div>
                    </div>
                </div>
            );
        }
        if (this.props.teacher) {
            return (
                <div style={{ margin: "20px 0px" }}>
                    <div className="card" style={{ width: 'auto', maxWidth: "400px", minWidth: "200px" }}>
                        <img className="card-img-top" src="https://images.indianexpress.com/2015/04/students-l1.jpg" />
                        <div className="card-body">
                            <h4 className="card-title">{this.props.info.title}</h4>
                            <p>{this.props.info.timing}</p>
                            <a className="btn" style={{ backgroundColor: "#022c5e", color: "white" }}>Not Available</a>
                        </div>
                    </div>
                </div>
            );
        }
        if (this.props.info) {
            return (
                <div style={{ margin: "20px 0px" }}>
                    <div className="card" style={{ width: 'auto', maxWidth: "400px", minWidth: "200px" }}>
                        <img className="card-img-top" src="https://130e178e8f8ba617604b-8aedd782b7d22cfe0d1146da69a52436.ssl.cf1.rackcdn.com/jp-morgan-using-ai-to-detect-banking-trojans-showcase_image-10-a-12855.jpg" />
                        <div className="card-body">
                            <h4 className="card-title">Role: {this.props.info.title}</h4>
                            <p>Company: {this.props.info.company}</p>
                            <p className="card-text">Required Skills: {this.props.info.skills}</p>
                            <a className="btn" style={{ backgroundColor: "#022c5e", color: "white" }}>Apply</a>
                        </div>
                    </div>
                </div>
            )
        }

    }
}

export default CardComponent;