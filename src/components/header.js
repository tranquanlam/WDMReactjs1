import React, { Component } from 'react';
import Dropdown from './dropdownMenu/Dropdown'

class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  updateSearch = (event) => {
    this.setState({
      timkiem: event.target.value
    })

  }
  render() {
    console.log(this.state.timkiem)
    return (
      <div>
        {/* Header */}
        <header className="masthead bg-primary text-white text-center">
          <div className="containerHd">
            <form>
              <div className="form-row">
                <div className="col-12 col-md-4 mb-2 mb-md-0">
                  <h1 className="text-uppercase mb-0">Oder food</h1>
                </div>
                <div className="col-12 col-md-4 mb-2 mb-md-0">
                  <input onChange={(event) => this.updateSearch(event)} type="text" className="form-control form-control-lg" placeholder="Search" />
                </div>
                <div className="col-12 col-md-2">
                  <div onClick={(dl) => this.props.getTextSearch(this.state.timkiem)} className="btn btn-block btn-lg ">Search</div>
                </div>
                <div className="col-12 col-md-2 dropdown"> 
                   <Dropdown/>
                </div>
              </div>
            </form>

          </div>
        </header>
      </div>
    );
  }
}

export default header;