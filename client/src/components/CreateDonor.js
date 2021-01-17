import React, { Component } from 'react';
import axios from 'axios';
import '../styles/Login.css';

export default class CreateDonor extends Component {
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeBloodGroup = this.onChangeBloodGroup.bind(this);
        this.onChangeGovID = this.onChangeGovID.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: "",
            email: "",
            phone_number: "",
            gender: "",
            gov_id: "",
            address: "",
            blood_group: "",
        }
    }

    onChangeName(e){
        this.setState({
            name: e.target.value 
        });
    }
    onChangeEmail(e){
        this.setState({
            email: e.target.value 
        });
    }
    onChangeGender(e){
        this.setState({
            gender: e.target.value 
        });
    }
    onChangeGovID(e){
        this.setState({
            gov_id: e.target.value 
        });
    }
    onChangePhoneNumber(e){
        this.setState({
            phone_number: e.target.value 
        });
    }
    onChangeAddress(e){
        this.setState({
            address: e.target.value 
        });
    }
    onChangeBloodGroup(e){
        this.setState({
            blood_group: e.target.value 
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const donorUser = {
            name: this.state.username,
            email: this.state.email,
            phone_number: this.state.phone_number,
            gender: this.state.gender,
            address: this.state.address,
            blood_group: this.state.blood_group,
            gov_id: this.state.gov_id
        }

        axios.post('http://localhost:3000/newuser', donorUser)
        .then(res => console.log(res.data));

        this.setState({
            name: '',
            email: '',
            phone_number: '',
            gender: '',
            address: '',
            blood_group: '',
            gov_id: '',
        })
    }

    render () {
        return (
            <div className="donor-wrapper">
                <h3 className="donor-title">Create New Donor</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input 
                        type="text"
                        className="form-control"
                        value={this.state.name}
                        onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input 
                        type="text"
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        />
                    </div>
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
                        <label>Gender: </label>
                        <input 
                        type="text"
                        className="form-control"
                        value={this.state.gender}
                        onChange={this.onChangeGender}
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
                        value={this.state.gov_id}
                        onChange={this.onChangeGovID}
                        />
                    </div>
                    <div className="form-group">
                        <label>Blood Group: </label>
                        <input 
                        type="text"
                        className="form-control"
                        value={this.state.blood_group}
                        onChange={this.onChangeBloodGroup}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Sign up" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}