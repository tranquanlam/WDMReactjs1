import React, { Component } from 'react';

class detailDish extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.chef}</td>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td className="text-right">{this.props.price}</td>
                <td className="text-right">{this.props.evaluate}</td>
                <td className="text-right">{this.props.branh}</td>
            </tr>
        );
    }
}

export default detailDish;