import React, { Component } from 'react';
import '../../css/log-in.css';
import Redirect from 'react-router-dom/Redirect';
import listUser from '../json/listUser.json'


class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUser : false,
      isRedirect: false,
      fPassword: "",
      fEmail: "",
      
    }
  }
  onChange = (event) => {
    const ten = event.target.name;
    const giatri = event.target.value;
    this.setState({
      [ten]: giatri
    });

  }

  summitForm = (event) => {
    //ham khoa khong cho chuyen trang ngan chan chuyen trang mac dinh cua summit form
    event.preventDefault();
    listUser.map((value, index) => {
      console.log(value.passwork);
      console.log(this.state.fPassword);
      if (value.password === this.state.fPassword) {
        this.setState({
          isUser: true
        });
      }
      return true;
    })
  }



  render() {
    if (this.state.isRedirect) {
      console.log(this.state.fEmail);
     console.log(this.state.isUser);
    }
    if (this.state.isUser) {
      //dung Redirect react router dom de chuyen huong
      return <Redirect to={"/"}/>
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
                <form className="form-signin">
                  <div className="form-label-group">
                    <input onChange={(event) => this.onChange(event)} name="fEmail" id="inputEmail" className="form-control" placeholder="email" />
                    <label htmlFor="inputEmail">Email</label>
                  </div>
                  <div className="form-label-group">
                    <input onChange={(event) => this.onChange(event)} name="fPassword" type="password" id="inputPassword" className="form-control" placeholder="" />
                    <label htmlFor="inputPassword">Password</label>
                  </div>
                  <div className="custom-control custom-checkbox mb-3">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                  </div>
                  <button onClick={(event) => this.summitForm(event)} className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                  <hr className="my-4" />
                  <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit">
                    <i className="fab fa-google mr-2" /> Sign in with Google</button>
                  <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit">
                    <i className="fab fa-facebook-f mr-2" /> Sign in with Facebook</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default login;