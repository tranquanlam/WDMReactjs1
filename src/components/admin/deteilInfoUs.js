import React, { Component } from 'react';

class deteilInfoUs extends Component {
   
    render() {
        return (
            <tr className="tr-shadow">
                <td>
                    <label className="au-checkbox">
                        <input type="checkbox" />
                        <span className="au-checkmark" />
                    </label>
                </td>
                <td>{this.props.name}</td>
                <td>
                    <span className="block-email">{this.props.email}</span>
                </td>
                <td className="desc">{this.props.city}</td>
                <td>2018-09-27 02:12</td>
                <td>
                    <span className="status--process">Processed</span>
                </td>
                <td>$679.00</td>
                <td>
                    <div className="table-data-feature">
                        <button className="item" data-toggle="tooltip" data-placement="top" title="Send">
                            <i className="zmdi zmdi-mail-send" />
                        </button>
                        <button className="item" data-toggle="tooltip" data-placement="top" title="Edit">
                            <i className="zmdi zmdi-edit" />
                        </button>
                        <button className="item" data-toggle="tooltip" data-placement="top" title="Delete">
                            <i className="zmdi zmdi-delete" />
                        </button>
                        <button className="item" data-toggle="tooltip" data-placement="top" title="More">
                            <i className="zmdi zmdi-more" />
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default deteilInfoUs;