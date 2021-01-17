import React from 'react';
import '../styles/Dashboard.css';

function Dashboard() {
    return (
        <div className="dashboard-wrapper">
            <h1 className="dashboard-title">Canadian Blood Services, Victoria</h1>
            <iframe className="dash-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.7814830295915!2d-123.9868424843499!3d49.185732985556186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5488a22d999e5dfd%3A0x9792342cbf2290bd!2s1925%20Bowen%20Rd%2C%20Nanaimo%2C%20BC%20V9S%201H1!5e0!3m2!1sen!2sca!4v1610897646295!5m2!1sen!2sca" width="600" height="450" />
            <div className="dash-container">
                <label className="blood-type-label">Blood Type: <span className="dash-span">A</span></label>
                <div className="dashboard-progress">
                    <div className="dashboard-bar-1"></div>
                </div>
                <p>Current Amount (Live): 1 unit(s) <br/> Target Amount: 10</p>
            </div>
            <div className="dash-container">
                <label className="blood-type-label">Blood Type: <span className="dash-span">B</span></label>
                <div className="dashboard-progress">
                    <div className="dashboard-bar-2"></div>
                </div>
                <p>Current Amount (Live): 3 unit(s) <br/> Target Amount: 8</p>
            </div>
            <div className="dash-container">
                <label className="blood-type-label">Blood Type: <span className="dash-span">AB</span></label>
                <div className="dashboard-progress">
                    <div className="dashboard-bar-3"></div>
                </div>
                <p>Current Amount (Live): 2 unit(s) <br/> Target Amount: 10</p>
            </div>            
            <div className="dash-container">
                <label className="blood-type-label">Blood Type: <span className="dash-span">O</span></label>
                <div className="dashboard-progress">
                    <div className="dashboard-bar-4"></div>
                </div>
                <p>Current Amount (Live): 9 unit(s) <br/> Target Amount: 10</p>
            </div>
        </div>
    )
}

export default Dashboard;