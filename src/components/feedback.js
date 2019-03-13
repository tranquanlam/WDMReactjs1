import React, { Component } from 'react';
import style from '../css/form.css'

class feedback extends Component {
    render() {
        return (
            <div className="feedback">
                <div className="container">
                    <div className="imagebg" />
                    <div className="row " style={{ marginTop: '50px' }}>
                        <div className="col-md-6 col-md-offset-3 form-container">
                            <h2>Feedback</h2>
                            <p> Please provide your feedback below: </p>
                            <form role="form" method="post" id="reused_form">
                                <div className="row">
                                    <div className="col-sm-12 form-group">
                                        <label>How do you rate your overall experience?</label>
                                        <p>
                                            <label className="radio-inline">
                                                <input type="radio" name="experience" id="radio_experience" defaultValue="bad" />
                                                Bad
                        </label>
                                            <label className="radio-inline">
                                                <input type="radio" name="experience" id="radio_experience" defaultValue="average" />
                                                Average
                        </label>
                                            <label className="radio-inline">
                                                <input type="radio" name="experience" id="radio_experience" defaultValue="good" />
                                                Good
                        </label>
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 form-group">
                                        <label htmlFor="comments"> Comments:</label>
                                        <textarea className="form-control" type="textarea" name="comments" id="comments" placeholder="Your Comments" maxLength={6000} rows={7} defaultValue={""} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 form-group">
                                        <label htmlFor="name"> Your Name:</label>
                                        <input type="text" className="form-control" id="name" name="name" required />
                                    </div>
                                    <div className="col-sm-6 form-group">
                                        <label htmlFor="email"> Email:</label>
                                        <input type="email" className="form-control" id="email" name="email" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 form-group">
                                        <button type="submit" className="btn btn-lg btn-warning btn-block">Post </button>
                                    </div>
                                </div>
                            </form>
                            <div id="success_message" style={{ width: '100%', height: '100%', display: 'none' }}> <h3>Posted your feedback successfully!</h3> </div>
                            <div id="error_message" style={{ width: '100%', height: '100%', display: 'none' }}> <h3>Error</h3> Sorry there was an error sending your form. </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default feedback;