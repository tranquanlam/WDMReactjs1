import React, { Component } from 'react';

class dmMocApi extends Component {
    constructor() {
        super();

        this.state = {
            'item': []
        }
    }

    componentDidMount() {
        this.getItems();
    }

    getItems() {
        fetch('http://5c317daad18a50001463d41d.mockapi.io/api/Users')
            .then(results => results.json())
            .then(results => this.setState({ 'item': results }));
    }
    render() {
        return (
            <ul>
                {this.state.item.map(function(i,index){
                    return (
                        <div>
                            <h1>{i.name}</h1>
                            </div>
                    )
                })}
            </ul>
        );
    }
}

export default dmMocApi;