import React from 'react';
import '../styles/Search.css';
import icon from '../assets/logo192.png'

const Profile = (props) => {
    const { name, address, bloodType, phoneNumber } = props;
    return (
        <div className="profile-flexbox-wrapper container">
            <h4 className="search-title font-weight-bold">Hey <span className="search-span">{name}</span></h4>
            <div className="row text-">
                <div className="col-9">
                    <p><i class="fas fa-map-marker-alt"></i> {address.location}</p>
                    <p className="mt-2"> <img src={icon} alt="" height="20px" /> Blood Group: <span className="font-weight-bold"> {bloodType}</span> </p>
                    <p className="mt-2"> +{phoneNumber} </p>
                </div>
                    <div className="col-3">

                    <a className="map-link" href="/">
                        Donate Blood
                                </a>

                    </div>
                 </div>
        </div>
    )
}
export default Profile;