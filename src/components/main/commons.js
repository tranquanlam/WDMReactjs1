import React, { Component } from 'react';
import Muc from './mucCommons';
import Dl from './../json/listproducts.json';
import Nav from '../nav';
import Header from '../header';
import Footer from '../footer';

class commons extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "property": [],
      "propertys": "",
      number: 0,
      type: '',
      timkiem:''
    }
  }
  // componentDidMount() {
  //   fetch('./../json/listproducts.json')
  //     .then(results => results.json())
  //     .then(results => { this.setState({ 'property': results }) });

  // }


  nextProperty = () => {
    const newIndex = this.state.number + 1;
    this.setState({
      number: newIndex
    })
    // this.setState({
    //   propertys: property[newIndex]
    // })
  }
  prevProperty = () => {
    const newIndex = this.state.number - 1;

    this.setState({
      number: newIndex
    })
    // this.setState({
    //   propertys: property[newIndex]
    // })
  }
  getTextSearch = (dl) => {
   
    this.setState({
      timkiem: dl
    })
  }
  changeTypeFood = () => {
    this.setState({
      type: 'food'
    })
  }
  changeTypeDrink = () => {
    this.setState({
      type: 'drink'
    })
  }
  changeTypeSnack = () => {
    this.setState({
      type: 'snack'
    })
  }
  render() {

    let searchFilter = Dl.filter(
      (contact) => {
        return contact.type.toLowerCase().indexOf(this.state.type.toLowerCase()) !== -1;
      }
    )
    if (this.state.timkiem !== '') {
       searchFilter = Dl.filter(
        (contact) => {
          return contact.tenmonan.toLowerCase().indexOf(this.state.timkiem.toLowerCase()) !== -1;
        }
      )
    }
    return (
      <div>
        <Nav />
        <Header getTextSearch={(dl) => this.getTextSearch(dl)} />
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h1 className="my-4">Shop Name</h1>
              <div className="list-group">
                <button onClick={() => this.changeTypeFood()} className="list-group-item">Food</button>
                <button onClick={() => this.changeTypeDrink()} href="/" className="list-group-item">Drink</button>
                <button href="/" className="list-group-item">Snack</button>
              </div>
            </div>
            {/* /.col-lg-3 */}
            <div className="col-lg-9">
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                  <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                  <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                </ol>
                <div className="w3-content w3-display-container" >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="imgCommons" src={searchFilter[this.state.number].hinhanh} alt="img" />
                    </div>
                  </div>
                  <div className="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle slide" >
                    <div className="w3-right w3-hover-text-khaki" onClick={() => this.nextProperty()} >&#10095;</div>
                    <div className="w3-left w3-hover-text-khaki" onClick={() => this.prevProperty()} >&#10094;</div>
                    <span className="w3-badge demo w3-border w3-transparent w3-hover-white" />
                    <span className="w3-badge demo w3-border w3-transparent w3-hover-white" />
                    <span className="w3-badge demo w3-border w3-transparent w3-hover-white" />
                  </div>

                </div>

              </div>




              <div className="row">
                {
                  searchFilter.map((value, index) => {
                    return (
                      <Muc key={index} hinhanh={value.hinhanh} tenmonan={value.tenmonan} id={value.id} giatien={value.giatien} mota={value.mota} ></Muc>
                    );
                  })
                }
              </div>
              {/* /.row */}
            </div>
            {/* /.col-lg-9 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
        <Footer />
      </div >
    );
  }
}

export default commons;