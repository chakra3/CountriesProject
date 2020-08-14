import React, { Component } from 'react';
import ChildCountry from './ChildCountry';
class ParentComponent extends Component {

    constructor() {
        super();
        this.state = {
            countries: [],
            privilege: true,
            noOfItems: 5,
            selectedCountry: ""

        }
    }

    render() {
        return (
            <div className="container">
                <h1>Parent Country</h1>
                <br></br>
                <div className="formgroup">
                    <span>Countries</span><select className="formControl">
                        {this.state.countries.map((country, index) => <option key={index} value={country}>{country}</option>
                        )}
                    </select>
                    <ChildCountry privilege={this.state.privilege} Noitems={this.state.noOfItems} />
                </div>

            </div>
        )

    }

    componentDidMount() {
        const url = "http://13.57.235.126:5000/countries";
        const { countries } = this.state;
        fetch(`${url}`).then((response) => response.json()).then((data) => { this.setState({ countries: data.countries }) });

    }
}
export default ParentComponent;
