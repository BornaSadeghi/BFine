import React, { Component } from 'react';
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

        axios.post('http://localhost:3000/auth/init', donorUser) // auth.init
        .then(res => {
            console.log(res.data)
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
                    <div className="form-group first">
                        <label>Name: </label>
                        <input 
                        type="text"
                        className="form-control"
                        value={this.state.name}
                        onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone Number: </label>
                        <input 
                        type="text"
                        className="form-control"
                        value={this.state.phoneNumber}
                        onChange={this.onChangePhoneNumber}
                        />
                    </div>
                    <div className="form-group">
                        <label>Is Urgent Donor: </label>
                        <input 
                        type="text"
                        className="form-control"
                        value={this.state.IsUrgentDonor}
                        onChange={this.onChangeIsUrgentDonor}
                        />
                    </div>
                    <div className="form-group">
                        <label>Address: </label>
                        <input 
                        type="text"
                        className="form-control"
                        value={this.state.address}
                        onChange={this.onChangeAddress}
                        />
                    </div>
                    <div className="form-group">
                        <label>Government ID Number: </label>
                        <input 
                        type="text"
                        className="form-control"
                        value={this.state.govtId}
                        onChange={this.onChangeGovID}
                        />
                    </div>
                    <div className="form-group">
                        <label>Blood Type: </label>
                        <input 
                        type="text"
                        className="form-control"
                        value={this.state.bloodType}
                        onChange={this.onChangeBloodType}
                        />
                    </div>
                    <div className="form-group button">
                        <input type="submit" value="Sign up" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}