import React, { Component, useState } from 'react';
import axios from 'axios';
import '../styles/Login.css';

export default class CreateDonor extends Component {
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeIsUrgentDonor = this.onChangeIsUrgentDonor.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeBloodType = this.onChangeBloodType.bind(this);
        this.onChangeGovID = this.onChangeGovID.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: "",
            phoneNumber: "",
            address: "",
            IsUrgentDonor: false,
            govtId: "",
            bloodType: "",
        }
    }

    onChangeName(e){
        this.setState({
            name: e.target.value 
        });
    }
    onChangeIsUrgentDonor(e){
        this.setState({
            IsUrgentDonor: e.target.value 
        });
    }
    onChangeGovID(e){
        this.setState({
            govtId: e.target.value 
        });
    }
    onChangePhoneNumber(e){
        this.setState({
            phoneNumber: e.target.value 
        });
    }
    onChangeAddress(e){
        this.setState({
            address: e.target.value 
        });
    }
    onChangeBloodType(e){
        this.setState({
            bloodType: e.target.value 
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const donorUser = {
            name: this.state.name,
            phoneNumber: this.state.phoneNumber,
            IsUrgentDonor: this.state.IsUrgentDonor,
            address: this.state.address,
            bloodType: this.state.bloodType,
            govtId: this.state.govtId
        }

        axios.post('http://localhost:3000/updateDonorProfile', donorUser) // auth.init
        .then(res => {
            console.log(res.data)
            window.location.assign('/search');
        });

        this.setState({
            name: '',
            phoneNumber: '',
            IsUrgentDonor: false,
            address: '',
            bloodType: '',
            govtId: '',
        })
    }

    render () {
        return (
            <div className="donor-wrapper">
                <h3 className="donor-title">Create New Donor</h3>
                <form className="form-wrapper" onSubmit={this.onSubmit}>
                    <div className="form-group-1 first">
                        <label>Name: </label>
                        <input 
                        type="text"
                        className="form-control-1"
                        value={this.state.name}
                        onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group-1">
                        <label>Phone Number: </label>
                        <input 
                        type="text"
                        className="form-control-1"
                        value={this.state.phoneNumber}
                        onChange={this.onChangePhoneNumber}
                        />
                    </div>
                    <div className="form-group-1">
                        <label>Is Urgent Donor: </label>
                        <input 
                        type="checkbox"
                        className="form-control-1"
                        value={this.state.IsUrgentDonor}
                        onChange={this.onChangeIsUrgentDonor}
                        />
                    </div>
                    <div className="form-group-1">
                        <label>Address: </label>
                        <input 
                        type="text"
                        className="form-control-1"
                        value={this.state.address}
                        onChange={this.onChangeAddress}
                        />
                    </div>
                    <div className="form-group-1">
                        <label>Government ID Number: </label>
                        <input 
                        type="text"
                        className="form-control-1"
                        value={this.state.govtId}
                        onChange={this.onChangeGovID}
                        />
                    </div>
                    <div className="form-group-1">
                        <label>Blood Type: </label>
                        <input 
                        type="text"
                        className="form-control-1"
                        value={this.state.bloodType}
                        onChange={this.onChangeBloodType}
                        />
                    </div>
                    <div className="form-group-1 button">
                        <input type="submit" value="Sign up" className="btn-1 btn-primary-1"/>
                    </div>
                </form>
            </div>
        )
    }
}