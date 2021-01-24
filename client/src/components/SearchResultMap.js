import React, { Component } from "react"
import { compose } from "recompose"
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps"

const MapWithAMarker = compose(withScriptjs, withGoogleMap)(props => {

    return (
        <GoogleMap defaultZoom={3} defaultCenter={{ lat: props.markers.props[0].address.lat, lng: props.markers.props[0].address.long }}>
            {props.markers.props.map(marker => {
                return (
                    <Marker
                        key={marker.id}
                        position={{ lat: marker.address.lat, lng: marker.address.long }}
                    >
                    </Marker>
                )
            })}
        </GoogleMap>
    )
})

export default class SearchResultMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shelters: [],
            selectedMarker: false
        }
    }
    componentDidMount() {
        fetch("https://api.harveyneeds.org/api/v1/shelters?limit=20")
            .then(r => r.json())
            .then(data => {
                this.setState({
                    shelters: data.shelters
                })
            })
    }
    handleClick = (marker, event) => {
        // console.log({ marker })
        this.setState({ selectedMarker: marker })
    }
    render() {
        return (
            <MapWithAMarker
                selectedMarker={this.state.selectedMarker}
                markers={this.props}
                onClick={this.handleClick}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        )
    }
}
