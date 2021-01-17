import PropTypes from "prop-types"
import React from "react"
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGooglePlacesSuggest from "react-google-places-suggest"
import axios from 'axios';


class GoogleSuggest extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            search: "",
            value: "",
            lat: undefined,
            long: undefined,
        }
    }

    

    handleInputChange(e) {
        this.setState({ search: e.target.value, value: e.target.value })
    }

    handleSelectSuggest(suggest) {
        this.setState({ search: "", value: suggest.formatted_address, lat: suggest.geometry.location.lat(), long: suggest.geometry.location.lng() })
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
        const location = {
            lat: this.state.lat,
            long: this.state.long,
        }
        axios.post('http://localhost:3000/search', { location }) // auth.init
            .then(res => {
                console.log(res.data)
            });

    }

    render() {
        const { search, value } = this.state
        return (
            <ReactGoogleMapLoader
                className="form-control"
                params={{
                    key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
                    libraries: "places,geocode",
                }}
                render={googleMaps =>
                    googleMaps && (
                        <div>
                            <ReactGooglePlacesSuggest
                                autocompletionRequest={{ input: search }}
                                googleMaps={googleMaps}
                                onSelectSuggest={this.handleSelectSuggest.bind(this)}
                            >
                                <form className="form-inline" onSubmit={this.onSubmit}>
                                    <input
                                        className="form-control mb-2 mr-2"
                                        type="text"
                                        value={value}
                                        placeholder="Search a location"
                                        onChange={this.handleInputChange.bind(this)}
                                    />
                                    <input type="submit" value="Find Blood Banks" className="btn btn-primary" />
                                </form>
                            </ReactGooglePlacesSuggest>
                        </div>
                    )
                }
            />
        )
    }
}

GoogleSuggest.propTypes = {
    googleMaps: PropTypes.object,
}

export default GoogleSuggest;
