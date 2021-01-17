import React, { Component } from 'react';
import axios from 'axios';
import '../styles/Login.css';

export default class CreateDonor extends Component {
    constructor(props){
        super(props);

        this.onChangeCode = this.onChangeCode.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            phone_number: "",
            code: ""
        }
    }

    onChangeCode(e){
        this.setState({
            code: e.target.value 
        });
    }
    onChangePhoneNumber(e){
        this.setState({
            phone_number: e.target.value 
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const donorUser = {
            phone_number: this.state.phone_number,
            code: this.state.code,
        }

        axios.post('http://localhost:3000/auth/init', donorUser)
        .then(res => console.log(res.data));

        this.setState({
            phone_number: '',
            code: '',
        })
    }

    render () {
        return (
            <div className="donor-wrapper">
                <h3 className="donor-title">Donor Login</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Phone Number: </label>
                        <input 
                        type="text"
                        className="form-control"
                        value={this.state.phone_number}
                        onChange={this.onChangePhoneNumber}
                        />
                    </div>
                    <div className="form-group">
                        <label>Verification Code: </label>
                        <input 
                        type="text"
                        className="form-control"
                        value={this.state.code}
                        onChange={this.onChangeCode}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Login" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}