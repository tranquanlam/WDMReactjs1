import React, { Component } from 'react';
import {  Route } from "react-router-dom";
import Login from '../account/login';
import commons from '../main/commons';
import Detail from '.././main/detail';
import adminuser from '../admin/user';
import AppAdmin from '../admin/Admintable';
import dmMocApi from '../dmMocApi';
import feedback from '../feedback';


class DieuHuong extends Component {
    render() {
        return (
            <div>
                <Route path="/feedback" exact component={feedback}/>1
                <Route path="/mocapi" exact component={dmMocApi} />
                <Route path="/admin" exact component={AppAdmin} />
                <Route path="/login" exact component={Login} />
                <Route path="/" exact component={commons} />
                <Route path="/chi-tiet/:id" exact component={Detail}/>
                <Route path={"/useradmin"} exact component={adminuser}/>
            </div>
        );
    }
}

export default DieuHuong;