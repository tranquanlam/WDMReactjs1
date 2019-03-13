import React, { Component } from 'react';


class mucCommons extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (

            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <a href={'/chi-tiet/'+ this.props.id}><img className="card-img-top" src={this.props.hinhanh} alt="link" /></a>
                    <div className="card-body">
                        <h4 className="card-title">
                            <a href="/chi-tiet">{this.props.tenmonan}</a>
                        </h4>
                        <h5>{this.props.giatien} vnd</h5>
                        <p className="card-text">{this.props.mota}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">★ ★ ★ ★ ☆</small>
                    </div>
                </div>
            </div>

        );
    }
}

export default mucCommons;