import React, { Component } from 'react';
class ChildCountry extends Component {
    constructor() {
        super();
        this.state = {
            country: ""
        }
        this.HandleChange = this.HandleChange.bind(this);
        this.HandleSelect = this.HandleSelect.bind(this);
    }
    HandleChange(event) {
        this.setState({ country: event.target.value })
    }
    HandleSelect(event) {
        const { country } = this.state;
        event.preventDefault();
        fetch(`http://13.57.235.126:5000//addcountry?name=${country}`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ name: country })
            })
            .then(function (res) { console.log(res) })
            .catch(function (res) { console.log(res) })
    }
    render() {
        const { privilege, Noitems } = this.props;
        return (
            <div>

                <input type="text" placeholder="Enter Country" value={this.state.country} onChange={this.HandleChange}></input>
                {privilege && <button onClick={this.HandleSelect}>Add and Select</button>}
            </div>
        )
    }
}
export default ChildCountry;
