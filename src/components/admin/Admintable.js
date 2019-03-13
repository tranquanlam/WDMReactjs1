import React, { Component } from 'react';

import './css/font-face.css';
import './vendor/font-awesome-4.7/css/font-awesome.min.css';
import './vendor/font-awesome-5/css/fontawesome-all.min.css';
import './vendor/mdi-font/css/material-design-iconic-font.min.css';
import './vendor/animsition/animsition.min.css';
import './vendor/bootstrap-progressbar/bootstrap-progressbar-3.3.4.min.css';
import './vendor/wow/animate.css';
import './vendor/css-hamburgers/hamburgers.min.css';
import './vendor/slick/slick.css';
import './vendor/select2/select2.min.css';
import './vendor/perfect-scrollbar/perfect-scrollbar.css';
import './css/theme.css';
import DetailTabbleUs from './detailTabbleUs';
import DetailinfoUser from './deteilInfoUs'
import DetailDish from './detailDish'

class Admintable extends Component {
    constructor() {
        super();

        this.state = {
            'item': [],
            'arrayDish': [],
            timkiem: ''
        }
    }
    componentDidMount() {
        this.getItems();
        this.getarrayDish();
    }

    getItems() {
        fetch('http://5c317daad18a50001463d41d.mockapi.io/api/Users')
            .then(results => results.json())
            .then(results => this.setState({ 'item': results }));
    }
    getarrayDish() {
        fetch('http://5c317daad18a50001463d41d.mockapi.io/dish')
            .then(results => results.json())
            .then(results => this.setState({ 'arrayDish': results }));
    }

    updateSearch = (event) => {
        this.setState({
            timkiem: event.target.value
        })

    }
    render() {
        let searchFilter = this.state.arrayDish.filter(
            (contact) => {
                return contact.name.toLowerCase().indexOf(this.state.timkiem.toLowerCase()) !== -1;
            }
        )
        return (
            <div className="page-wrapper">
                {/* HEADER MOBILE*/}
                <header className="header-mobile d-block d-lg-none">
                    <div className="header-mobile__bar">
                        <div className="container-fluid">
                            <div className="header-mobile-inner">
                                <a className="logo" href="index.html">
                                    <img src="images/icon/logo.png" alt="CoolAdmin" />
                                </a>
                                <button className="hamburger hamburger--slider" type="button">
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <nav className="navbar-mobile">
                        <div className="container-fluid">
                            <ul className="navbar-mobile__list list-unstyled">
                                <li className="has-sub">
                                    <a className="js-arrow" href="#">
                                        <i className="fas fa-tachometer-alt" />Dashboard</a>
                                    <ul className="navbar-mobile-sub__list list-unstyled js-sub-list">
                                        <li>
                                            <a href="index.html">Dashboard 1</a>
                                        </li>
                                        <li>
                                            <a href="index2.html">Dashboard 2</a>
                                        </li>
                                        <li>
                                            <a href="index3.html">Dashboard 3</a>
                                        </li>
                                        <li>
                                            <a href="index4.html">Dashboard 4</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="chart.html">
                                        <i className="fas fa-chart-bar" />Charts</a>
                                </li>
                                <li>
                                    <a href="table.html">
                                        <i className="fas fa-table" />Tables</a>
                                </li>
                                <li>
                                    <a href="form.html">
                                        <i className="far fa-check-square" />Forms</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fas fa-calendar-alt" />Calendar</a>
                                </li>
                                <li>
                                    <a href="map.html">
                                        <i className="fas fa-map-marker-alt" />Maps</a>
                                </li>
                                <li className="has-sub">
                                    <a className="js-arrow" href="#">
                                        <i className="fas fa-copy" />Pages</a>
                                    <ul className="navbar-mobile-sub__list list-unstyled js-sub-list">
                                        <li>
                                            <a href="login.html">Login</a>
                                        </li>
                                        <li>
                                            <a href="register.html">Register</a>
                                        </li>
                                        <li>
                                            <a href="forget-pass.html">Forget Password</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="has-sub">
                                    <a className="js-arrow" href="#">
                                        <i className="fas fa-desktop" />UI Elements</a>
                                    <ul className="navbar-mobile-sub__list list-unstyled js-sub-list">
                                        <li>
                                            <a href="button.html">Button</a>
                                        </li>
                                        <li>
                                            <a href="badge.html">Badges</a>
                                        </li>
                                        <li>
                                            <a href="tab.html">Tabs</a>
                                        </li>
                                        <li>
                                            <a href="card.html">Cards</a>
                                        </li>
                                        <li>
                                            <a href="alert.html">Alerts</a>
                                        </li>
                                        <li>
                                            <a href="progress-bar.html">Progress Bars</a>
                                        </li>
                                        <li>
                                            <a href="modal.html">Modals</a>
                                        </li>
                                        <li>
                                            <a href="switch.html">Switchs</a>
                                        </li>
                                        <li>
                                            <a href="grid.html">Grids</a>
                                        </li>
                                        <li>
                                            <a href="fontawesome.html">Fontawesome Icon</a>
                                        </li>
                                        <li>
                                            <a href="typo.html">Typography</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                {/* END HEADER MOBILE*/}
                {/* MENU SIDEBAR*/}
                <aside className="menu-sidebar d-none d-lg-block">
                    <div className="logo">
                        <a href="#">
                            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIREA8REA8NFQ4RERYZGA8WDg8NDw8TIBUZGSAWFx4kKCggJB4xJxgYITEtMSorLi4vFx8zODMsNygvLi0BCgoKDg0NFRAQFSsfHRkrLS0rNy0vLTMtLS03NzctKy0tLS03LSstKzcrNy0tLS0rKysrKysrKystKysrKysrK//AABEIADIAlgMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQUGBAMHAv/EADUQAAEEAQIDBQUGBwAAAAAAAAEAAgMEEQUSBiFBExQxUWEVIlOBsSMyM0JSkQdDYnShsvD/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAgH/xAAcEQEBAQEAAgMAAAAAAAAAAAAAARECITESIlH/2gAMAwEAAhEDEQA/APuCKFWadcmfNOySHZEw+4/9Y/7mtzU3qSyfq1REWKEREBERBClU2o6q6O5SrhrNlgS7nHO5u1uRhXKAiIgIiFBCKr0q5PJJO2WHYxjsMdn74yef0/dWi2zE89SzUoiLFIUoUQQsxw/Ym7/qMMk75I4+zcwFoGzcC7A+nyWnWS08POpauIi0SmKDa5wLmh2w4JWxla5ZCzZnv2JYK8roacDtsk7cdrLJ1Yw9MdSrLSYNQbJmzPUfDtPusiex+7pzK4v4eOArSxn8WO1MJB137s5Pywgh3BEYGYrV+OYeEveXvOfUHkVyaVqtoX4qdo/aRtee0b7rLLMe6/HmMLarI6rMw61QaMdo2Cbd5gEcvoVXNT3zs8Jt2Z71iWvWldDVru2y2G4MsknWNh6Y6lft3BEQGYrV9k3SXvL3nPqDyKn+HxAgsRn8aO3MHjruLsgn5fRapTbisfOYLVn2rRr2wDLAJiJ2ja2eN0fJ2Oh5HK6at65bns1IZXRxxTO7S1yc9rc4EcfkeRXbrcrDrOmsGO0bHMT5hpacfQr24DaMXz1N+bJ8+YV74R8ftPIeB4sZbZ1ATfG708uz548FVvfqBss06a01jS1zxcazbPYjH5R0DvNb5Zbirld0hw+93h4z6FnMKJV2IPBEQGY7WoMm+N3l7nZ9R4L14f1OZs76NwtdOxu+OcDaLEWcZx+odVpVl+IBjUtJcPEmcE+Y7PwT2enhw/anf7UkfO9zY55Y2R4aBGG88g+PX/Cr9DNrU42l08sNNg2lzDtntPHid3Rq6+HT9hrP91Z/0VrwI0DTqeB/KB+ZJKq3IjN61xv4Lawbqtu7FMPB5ndKxx/qafFdnDGryS9tBZaG3K7gHgfde0+EjfQq/WWYMa27H5qAJ9cS8lPtbUlEKLGipNO0p8d27YcW9nO2INAJLhtbg5V2iAszquiTxzut0HsbM8ASwPyIbGPA+jvVaZEGUdqmqPGxmnwxv+K+y18bfXA5leGmcJSxXILb5hLNiQzSElu5xbhoYP0hbFFusxm9W0OZk5t0HsbO4ASQPz2NgDwJ8neq8Xapqjhsbp0LH/Ffaa+IeuBzK1ahNMY3T+EZY7la3JMJZgZDM85bnLNrWxjyCueGtLfXFkPLT2tqSQYJPuuxjPryV0iaYKk1zSnzT0ZGFobXmL3ZJBILccldosaKl1bS3y26MzS3ZXMpcCTuO5mBhXSIM7pWiSRRagxxZmzNM9uCcAPbgZXfw3QdXqV4X7S+OMNJBJbn0VmiazBUvst/tHvWWdl3Xs8ZO/dv3fsrpEaFEKIIREQEREBERAREQEREBERAREQEREBERAREQf/Z" alt="Cool Admin" />
                        </a>
                    </div>
                    <div className="menu-sidebar__content js-scrollbar1">
                        <nav className="navbar-sidebar">
                            <ul className="list-unstyled navbar__list">
                                <li className="has-sub">
                                    <a className="js-arrow" href="#">
                                        <i className="fas fa-tachometer-alt" />Dashboard</a>
                                    <ul className="list-unstyled navbar__sub-list js-sub-list">
                                        <li>
                                            <a href="index.html">Dashboard 1</a>
                                        </li>
                                        <li>
                                            <a href="index2.html">Dashboard 2</a>
                                        </li>
                                        <li>
                                            <a href="index3.html">Dashboard 3</a>
                                        </li>
                                        <li>
                                            <a href="index4.html">Dashboard 4</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="chart.html">
                                        <i className="fas fa-chart-bar" />Charts</a>
                                </li>
                                <li className="active">
                                    <a href="table.html">
                                        <i className="fas fa-table" />Tables</a>
                                </li>
                                <li>
                                    <a href="form.html">
                                        <i className="far fa-check-square" />Forms</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fas fa-calendar-alt" />Calendar</a>
                                </li>
                                <li>
                                    <a href="map.html">
                                        <i className="fas fa-map-marker-alt" />Maps</a>
                                </li>
                                <li className="has-sub">
                                    <a className="js-arrow" href="#">
                                        <i className="fas fa-copy" />Pages</a>
                                    <ul className="list-unstyled navbar__sub-list js-sub-list">
                                        <li>
                                            <a href="login.html">Login</a>
                                        </li>
                                        <li>
                                            <a href="register.html">Register</a>
                                        </li>
                                        <li>
                                            <a href="forget-pass.html">Forget Password</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="has-sub">
                                    <a className="js-arrow" href="#">
                                        <i className="fas fa-desktop" />UI Elements</a>
                                    <ul className="list-unstyled navbar__sub-list js-sub-list">
                                        <li>
                                            <a href="button.html">Button</a>
                                        </li>
                                        <li>
                                            <a href="badge.html">Badges</a>
                                        </li>
                                        <li>
                                            <a href="tab.html">Tabs</a>
                                        </li>
                                        <li>
                                            <a href="card.html">Cards</a>
                                        </li>
                                        <li>
                                            <a href="alert.html">Alerts</a>
                                        </li>
                                        <li>
                                            <a href="progress-bar.html">Progress Bars</a>
                                        </li>
                                        <li>
                                            <a href="modal.html">Modals</a>
                                        </li>
                                        <li>
                                            <a href="switch.html">Switchs</a>
                                        </li>
                                        <li>
                                            <a href="grid.html">Grids</a>
                                        </li>
                                        <li>
                                            <a href="fontawesome.html">Fontawesome Icon</a>
                                        </li>
                                        <li>
                                            <a href="typo.html">Typography</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>
                {/* END MENU SIDEBAR*/}
                {/* PAGE CONTAINER*/}
                <div className="page-container">
                    {/* HEADER DESKTOP*/}
                    <header className="header-desktop">
                        <div className="section__content section__content--p30">
                            <div className="container-fluid">
                                <div className="header-wrap">
                                    <form className="form-header" action method="POST">
                                        <input onChange={(event) => this.updateSearch(event)} className="au-input au-input--xl" type="text" name="search" placeholder="Search for datas & reports..." />
                                        <button onClick className="au-btn--submit" type="submit">
                                            <i className="zmdi zmdi-search" />
                                        </button>
                                    </form>
                                    <div className="header-button">
                                        <div className="noti-wrap">
                                            <div className="noti__item js-item-menu">
                                                <i className="zmdi zmdi-comment-more" />
                                                <span className="quantity">1</span>
                                                <div className="mess-dropdown js-dropdown">
                                                    <div className="mess__title">
                                                        <p>You have 2 news message</p>
                                                    </div>
                                                    <div className="mess__item">
                                                        <div className="image img-cir img-40">
                                                            <img src="images/icon/avatar-06.jpg" alt="Michelle Moreno" />
                                                        </div>
                                                        <div className="content">
                                                            <h6>Michelle Moreno</h6>
                                                            <p>Have sent a photo</p>
                                                            <span className="time">3 min ago</span>
                                                        </div>
                                                    </div>
                                                    <div className="mess__item">
                                                        <div className="image img-cir img-40">
                                                            <img src="images/icon/avatar-04.jpg" alt="Diane Myers" />
                                                        </div>
                                                        <div className="content">
                                                            <h6>Diane Myers</h6>
                                                            <p>You are now connected on message</p>
                                                            <span className="time">Yesterday</span>
                                                        </div>
                                                    </div>
                                                    <div className="mess__footer">
                                                        <a href="#">View all messages</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="noti__item js-item-menu">
                                                <i className="zmdi zmdi-email" />
                                                <span className="quantity">1</span>
                                                <div className="email-dropdown js-dropdown">
                                                    <div className="email__title">
                                                        <p>You have 3 New Emails</p>
                                                    </div>
                                                    <div className="email__item">
                                                        <div className="image img-cir img-40">
                                                            <img src="images/icon/avatar-06.jpg" alt="Cynthia Harvey" />
                                                        </div>
                                                        <div className="content">
                                                            <p>Meeting about new dashboard...</p>
                                                            <span>Cynthia Harvey, 3 min ago</span>
                                                        </div>
                                                    </div>
                                                    <div className="email__item">
                                                        <div className="image img-cir img-40">
                                                            <img src="images/icon/avatar-05.jpg" alt="Cynthia Harvey" />
                                                        </div>
                                                        <div className="content">
                                                            <p>Meeting about new dashboard...</p>
                                                            <span>Cynthia Harvey, Yesterday</span>
                                                        </div>
                                                    </div>
                                                    <div className="email__item">
                                                        <div className="image img-cir img-40">
                                                            <img src="images/icon/avatar-04.jpg" alt="Cynthia Harvey" />
                                                        </div>
                                                        <div className="content">
                                                            <p>Meeting about new dashboard...</p>
                                                            <span>Cynthia Harvey, April 12,,2018</span>
                                                        </div>
                                                    </div>
                                                    <div className="email__footer">
                                                        <a href="#">See all emails</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="noti__item js-item-menu">
                                                <i className="zmdi zmdi-notifications" />
                                                <span className="quantity">3</span>
                                                <div className="notifi-dropdown js-dropdown">
                                                    <div className="notifi__title">
                                                        <p>You have 3 Notifications</p>
                                                    </div>
                                                    <div className="notifi__item">
                                                        <div className="bg-c1 img-cir img-40">
                                                            <i className="zmdi zmdi-email-open" />
                                                        </div>
                                                        <div className="content">
                                                            <p>You got a email notification</p>
                                                            <span className="date">April 12, 2018 06:50</span>
                                                        </div>
                                                    </div>
                                                    <div className="notifi__item">
                                                        <div className="bg-c2 img-cir img-40">
                                                            <i className="zmdi zmdi-account-box" />
                                                        </div>
                                                        <div className="content">
                                                            <p>Your account has been blocked</p>
                                                            <span className="date">April 12, 2018 06:50</span>
                                                        </div>
                                                    </div>
                                                    <div className="notifi__item">
                                                        <div className="bg-c3 img-cir img-40">
                                                            <i className="zmdi zmdi-file-text" />
                                                        </div>
                                                        <div className="content">
                                                            <p>You got a new file</p>
                                                            <span className="date">April 12, 2018 06:50</span>
                                                        </div>
                                                    </div>
                                                    <div className="notifi__footer">
                                                        <a href="#">All notifications</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="account-wrap">
                                            <div className="account-item clearfix js-item-menu">
                                                <div className="image">
                                                    <img src="images/icon/avatar-01.jpg" alt="John Doe" />
                                                </div>
                                                <div className="content">
                                                    <a className="js-acc-btn" href="#">john doe</a>
                                                </div>
                                                <div className="account-dropdown js-dropdown">
                                                    <div className="info clearfix">
                                                        <div className="image">
                                                            <a href="#">
                                                                <img src="images/icon/avatar-01.jpg" alt="John Doe" />
                                                            </a>
                                                        </div>
                                                        <div className="content">
                                                            <h5 className="name">
                                                                <a href="#">john doe</a>
                                                            </h5>
                                                            <span className="email">johndoe@example.com</span>
                                                        </div>
                                                    </div>
                                                    <div className="account-dropdown__body">
                                                        <div className="account-dropdown__item">
                                                            <a href="#">
                                                                <i className="zmdi zmdi-account" />Account</a>
                                                        </div>
                                                        <div className="account-dropdown__item">
                                                            <a href="#">
                                                                <i className="zmdi zmdi-settings" />Setting</a>
                                                        </div>
                                                        <div className="account-dropdown__item">
                                                            <a href="#">
                                                                <i className="zmdi zmdi-money-box" />Billing</a>
                                                        </div>
                                                    </div>
                                                    <div className="account-dropdown__footer">
                                                        <a href="#">
                                                            <i className="zmdi zmdi-power" />Logout</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* END HEADER DESKTOP*/}
                    {/* MAIN CONTENT*/}
                    <div className="main-content">
                        <div className="section__content section__content--p30">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="table-responsive table--no-card m-b-30">
                                            <table className="table table-borderless table-striped table-earning">
                                                <thead>
                                                    <tr>
                                                        <th>date</th>
                                                        <th>order ID</th>
                                                        <th>name</th>
                                                        <th className="text-right">price</th>
                                                        <th className="text-right">evaluate</th>
                                                        <th className="text-right">branh</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        searchFilter.map((value, index) => {
                                                            return (
                                                                <DetailDish chef={value.chef} id={value.id} name={value.name} price={value.price} evaluate={value.evaluate} branh={value.branh} />
                                                            );
                                                        })
                                                    }

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-3">
                                        <div className="au-card au-card--bg-blue au-card-top-countries m-b-30">
                                            <div className="au-card-inner">
                                                <div className="table-responsive">
                                                    <table className="table table-top-countries">
                                                        <tbody>
                                                            <tr>
                                                                <td>United States</td>
                                                                <td className="text-right">$119,366.96</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Australia</td>
                                                                <td className="text-right">$70,261.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td>United Kingdom</td>
                                                                <td className="text-right">$46,399.22</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Turkey</td>
                                                                <td className="text-right">$35,364.90</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Germany</td>
                                                                <td className="text-right">$20,366.96</td>
                                                            </tr>
                                                            <tr>
                                                                <td>France</td>
                                                                <td className="text-right">$10,366.96</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Australia</td>
                                                                <td className="text-right">$5,366.96</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Italy</td>
                                                                <td className="text-right">$1639.32</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        {/* USER DATA*/}
                                        <div className="user-data m-b-30">
                                            <h3 className="title-3 m-b-30">
                                                <i className="zmdi zmdi-account-calendar" />user data</h3>
                                            <div className="filters m-b-45">
                                                <div className="rs-select2--dark rs-select2--md m-r-10 rs-select2--border">
                                                    <select className="js-select2" name="property">
                                                        <option selected="selected">All Properties</option>
                                                        <option value>Products</option>
                                                        <option value>Services</option>
                                                    </select>
                                                    <div className="dropDownSelect2" />
                                                </div>
                                                <div className="rs-select2--dark rs-select2--sm rs-select2--border">
                                                    <select className="js-select2 au-select-dark" name="time">
                                                        <option selected="selected">All Time</option>
                                                        <option value>By Month</option>
                                                        <option value>By Day</option>
                                                    </select>
                                                    <div className="dropDownSelect2" />
                                                </div>
                                            </div>
                                            <div className="table-responsive table-data">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <td>
                                                                <label className="au-checkbox">
                                                                    <input type="checkbox" />
                                                                    <span className="au-checkmark" />
                                                                </label>
                                                            </td>
                                                            <td>name</td>
                                                            <td>role</td>
                                                            <td>type</td>
                                                            <td />
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        <DetailTabbleUs ten="Tran Quan Lam" role="admin" email="quanlamtran@gmail.com" />
                                                        <DetailTabbleUs ten="Tran Thanh An" role="user" email="ThanhAn@gmail.com" />
                                                        <DetailTabbleUs ten="lori lynch" role="user" email="johndoe@gmail.com" />
                                                        <DetailTabbleUs ten="Tom" role="member" email="tomCute@gmail.com" />
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="user-data__footer">
                                                <button className="au-btn au-btn-load">load more</button>
                                            </div>
                                        </div>
                                        {/* END USER DATA*/}
                                    </div>
                                    {/* <div className="col-lg-6">
                                        
                                        <div className="top-campaign">
                                            <h3 className="title-3 m-b-30">top campaigns</h3>
                                            <div className="table-responsive">
                                                <table className="table table-top-campaign">
                                                    <tbody>
                                                        <tr>
                                                            <td>1. Australia</td>
                                                            <td>$70,261.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td>2. United Kingdom</td>
                                                            <td>$46,399.22</td>
                                                        </tr>
                                                        <tr>
                                                            <td>3. Turkey</td>
                                                            <td>$35,364.90</td>
                                                        </tr>
                                                        <tr>
                                                            <td>4. Germany</td>
                                                            <td>$20,366.96</td>
                                                        </tr>
                                                        <tr>
                                                            <td>5. France</td>
                                                            <td>$10,366.96</td>
                                                        </tr>
                                                        <tr>
                                                            <td>3. Turkey</td>
                                                            <td>$35,364.90</td>
                                                        </tr>
                                                        <tr>
                                                            <td>4. Germany</td>
                                                            <td>$20,366.96</td>
                                                        </tr>
                                                        <tr>
                                                            <td>5. France</td>
                                                            <td>$10,366.96</td>
                                                        </tr>
                                                        <tr>
                                                            <td>3. Turkey</td>
                                                            <td>$35,364.90</td>
                                                        </tr>
                                                        <tr>
                                                            <td>4. Germany</td>
                                                            <td>$20,366.96</td>
                                                        </tr>
                                                        <tr>
                                                            <td>5. France</td>
                                                            <td>$10,366.96</td>
                                                        </tr>
                                                        <tr>
                                                            <td>4. Germany</td>
                                                            <td>$20,366.96</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    
                                    </div> */}
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        {/* DATA TABLE */}
                                        <h3 className="title-5 m-b-35">data table</h3>
                                        <div className="table-data__tool">
                                            <div className="table-data__tool-left">
                                                <div className="rs-select2--light rs-select2--md">
                                                    <select className="js-select2" name="property">
                                                        <option selected="selected">All Properties</option>
                                                        <option value>Option 1</option>
                                                        <option value>Option 2</option>
                                                    </select>
                                                    <div className="dropDownSelect2" />
                                                </div>
                                                <div className="rs-select2--light rs-select2--sm">
                                                    <select className="js-select2" name="time">
                                                        <option selected="selected">Today</option>
                                                        <option value>3 Days</option>
                                                        <option value>1 Week</option>
                                                    </select>
                                                    <div className="dropDownSelect2" />
                                                </div>
                                                <button className="au-btn-filter">
                                                    <i className="zmdi zmdi-filter-list" />filters</button>
                                            </div>
                                            <div className="table-data__tool-right">
                                                <button className="au-btn au-btn-icon au-btn--green au-btn--small">
                                                    <i className="zmdi zmdi-plus" />add item</button>
                                                <div className="rs-select2--dark rs-select2--sm rs-select2--dark2">
                                                    <select className="js-select2" name="type">
                                                        <option selected="selected">Export</option>
                                                        <option value>Option 1</option>
                                                        <option value>Option 2</option>
                                                    </select>
                                                    <div className="dropDownSelect2" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="table-responsive table-responsive-data2">
                                            <table className="table table-data2">
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            <label className="au-checkbox">
                                                                <input type="checkbox" />
                                                                <span className="au-checkmark" />
                                                            </label>
                                                        </th>
                                                        <th>name</th>
                                                        <th>email</th>
                                                        <th>City</th>
                                                        <th>date</th>
                                                        <th>status</th>
                                                        <th>price</th>
                                                        <th />
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.item.map(function (i, index) {
                                                        return (
                                                            <div>
                                                                <DetailinfoUser name={i.name} email={i.email} city={i.description} />
                                                                <tr className="spacer" />
                                                            </div>
                                                        )
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                        {/* END DATA TABLE */}
                                    </div>
                                </div>
                                <div className="row m-t-30">
                                    <div className="col-md-12">
                                        {/* DATA TABLE*/}
                                        <div className="table-responsive m-b-40">
                                            <table className="table table-borderless table-data3">
                                                <thead>
                                                    <tr>
                                                        <th>date</th>
                                                        <th>type</th>
                                                        <th>description</th>
                                                        <th>status</th>
                                                        <th>price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>2018-09-29 05:57</td>
                                                        <td>Mobile</td>
                                                        <td>iPhone X 64Gb Grey</td>
                                                        <td className="process">Processed</td>
                                                        <td>$999.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2018-09-28 01:22</td>
                                                        <td>Mobile</td>
                                                        <td>Samsung S8 Black</td>
                                                        <td className="process">Processed</td>
                                                        <td>$756.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2018-09-27 02:12</td>
                                                        <td>Game</td>
                                                        <td>Game Console Controller</td>
                                                        <td className="denied">Denied</td>
                                                        <td>$22.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2018-09-26 23:06</td>
                                                        <td>Mobile</td>
                                                        <td>iPhone X 256Gb Black</td>
                                                        <td className="denied">Denied</td>
                                                        <td>$1199.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2018-09-25 19:03</td>
                                                        <td>Accessories</td>
                                                        <td>USB 3.0 Cable</td>
                                                        <td className="process">Processed</td>
                                                        <td>$10.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2018-09-29 05:57</td>
                                                        <td>Accesories</td>
                                                        <td>Smartwatch 4.0 LTE Wifi</td>
                                                        <td className="denied">Denied</td>
                                                        <td>$199.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2018-09-24 19:10</td>
                                                        <td>Camera</td>
                                                        <td>Camera C430W 4k</td>
                                                        <td className="process">Processed</td>
                                                        <td>$699.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2018-09-22 00:43</td>
                                                        <td>Computer</td>
                                                        <td>Macbook Pro Retina 2017</td>
                                                        <td className="process">Processed</td>
                                                        <td>$10.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        {/* END DATA TABLE*/}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="copyright">
                                            <p>Copyright © 2018 Colorlib. All rights reserved. Template by <a href="https://colorlib.com">Colorlib</a>.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Admintable;
