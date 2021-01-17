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
            phoneNumber: "",
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
            phoneNumber: e.target.value 
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const donorUser = {
            phoneNumber: this.state.phoneNumber,
            code: this.state.code,
        }

        axios.post('http://localhost:3000/auth/init', donorUser)
        .then(res => console.log(res.data));

        this.setState({
            phoneNumber: '',
            code: '',
        })
    }

    render () {
        return (
            <div className="donor-wrapper">
                <h3 className="donor-title">Donor Login</h3>
                <form className="form-wrapper" onSubmit={this.onSubmit}>
                    <div className="form-group first">
                        <label>Phone Number: </label>
                        <input 
                        type="text"
                        className="form-control"
                        value={this.state.phoneNumber}
                        onChange={this.onChangePhoneNumber}
                        />
                    </div>
                    <div className="form-group last">
                        <label>Verification Code: </label>
                        <input 
                        type="text"
                        className="form-control"
                        value={this.state.code}
                        onChange={this.onChangeCode}
                        />
                    </div>
                    <div className="form-group button">
                        <input type="submit" value="Login" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}