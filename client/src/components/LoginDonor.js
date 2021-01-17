import React, { Component } from 'react';
import axios from 'axios';
import '../styles/Login.css';
import { Redirect } from 'react-router';

export default class CreateDonor extends Component {
    constructor(props){
        super(props);

        this.onChangeCode = this.onChangeCode.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            phoneNumber: "",
            code: "", // verification code
            codeSent: false, // unlocks verification code input
            request_id: null
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

        if (this.state.codeSent){ // do auth.establish
            console.log('codeSent = true')
            axios.post('http://localhost:3000/auth/establish', {
                request_id: this.state.request_id,
                otp: this.state.code,
                phoneNumber: this.state.phoneNumber,
                type: "donor"
            })
            .then(res => {
                console.log(res.data);
                if (res.exists){ // if user exists already
                    window.location.assign('/search')
                } else {
                    window.location.assign('/donor-signup')
                }
                
            }).catch(err => console.log(err));
        } else { // do auth.init
            axios.post('http://localhost:3000/auth/init', {phoneNumber: this.state.phoneNumber})
            .then(res => {
                this.setState({
                    request_id: res.data.request_id,
                    codeSent: true
                })
                console.log(this.state.request_id)
            })
            .catch(err => {
                console.log(err);
            })
        }
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
                        <input disabled={this.state.codeSent ? "" : "disabled"}
                        type="text"
                        className="form-control"
                        value={this.state.code}
                        onChange={this.onChangeCode}
                        />
                    </div>
                    <div className="form-group button">
                        <input type="submit" value="Submit" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}