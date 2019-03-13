import React, { Component } from 'react';
import Dl from './../json/listproducts.json';

class detail extends Component {
  render() {
    let searchFilter = Dl.filter(
      (contact) => {
        return contact.id == this.props.match.params.id;
      }
    )
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="my-4">Shop Name</h1>
            <div className="list-group">
              <a href="/" className="list-group-item ">Thêm vào giỏ hàng</a>
              <a href="/" className="list-group-item">Xóa khỏi giỏ hàng</a>
              <a href="/feedback" className="list-group-item">Phản hồi</a>
            </div>
          </div>
          {/* /.col-lg-3 */}
          {
            searchFilter.map((value, index) => {
              console.log(value.tenmonan)
              return (
                <div className="col-lg-9">
                  <div className="card mt-4">
                    <img className="card-img-top img-fluid" src={value.hinhanh} alt="img" />
                    <div className="card-body">
                      <h3 className="card-title">{value.tenmonan}</h3>
                      <h4>$24.99</h4>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure, ducimus!</p>
                      <span className="text-warning">★ ★ ★ ★ ☆</span>
                      4.0 stars
                        </div>
                  </div>
                  {/* /.card */}
                  <div className="card card-outline-secondary my-4">
                    <div className="card-header">
                      Product Reviews
                        </div>
                    <div className="card-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                      <small className="text-muted">Posted by Anonymous on 3/1/17</small>
                      <hr />
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                      <small className="text-muted">Posted by Anonymous on 3/1/17</small>
                      <hr />
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                      <small className="text-muted">Posted by Anonymous on 3/1/17</small>
                      <hr />
                      <a href="/" className="btn btn-success">Leave a Review</a>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default detail;