import React from 'react';
import '../styles/SignUp.css';
import CreateDonor from '../components/CreateDonor';
import LoginDonor from '../components/LoginDonor';

function DonorSignUp() {
    return (
        <div>
            <CreateDonor />
            <LoginDonor />
        </div>
    )
}

export default DonorSignUp;