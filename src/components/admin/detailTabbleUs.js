import React, { Component } from 'react';

class detailTabbleUs extends Component {
    constructor(props){
        super();
    }
    render() {
        return (
            <div>
                <tr>
                    <td>
                        <label className="au-checkbox">
                            <input type="checkbox" />
                            <span className="au-checkmark" />
                        </label>
                    </td>
                    <td>
                        <div className="table-data__info">
                            <h6>{this.props.ten}</h6>
                            <span>
                                <a href="#">{this.props.email}</a>
                            </span>
                        </div>
                    </td>
                    <td>
                        <span className={"role " + this.props.role}>{this.props.role}</span>
                    </td>
                    <td>
                        <div className="rs-select2--trans rs-select2--sm">
                            <select className="js-select2" name="property">
                                <option selected="selected">Full Control</option>
                                <option value>Post</option>
                                <option value>Watch</option>
                            </select>
                            <div className="dropDownSelect2" />
                        </div>
                    </td>
                    <td>
                        <span className="more">
                            <i className="zmdi zmdi-more" />
                        </span>
                    </td>
                </tr>
            </div>
        );
    }
}

export default detailTabbleUs;