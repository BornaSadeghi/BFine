import React from 'react';
import '../styles/Search.css';
import icon from '../assets/logo192.png'
import SearchResultMap from "../components/SearchResultMap"

const Search = (props) => {
    const { search, results } = props;
    return (
        <div className="search-flexbox-wrapper container">
            <h4 className="search-title font-weight-bold">Search results for <span className="search-span">{search}</span></h4>
            <SearchResultMap props={results}/>
            {
                results.map((item, index) => {
                    return (
                        <div key={index} className="search-box">
                            <div className="row">
                            <div className="col-9">
                                <h4>{item.name}</h4>
                                    <p><i class="fas fa-map-marker-alt"></i> {item.address.address}</p>
                            </div>
                            <div className="col-3">
                                <a className="map-link" href={`https://www.google.com/maps/search/?api=1&query=${encodeURI(item.name)}, ${encodeURI(item.address.address)}`} target="new"> 
                                    Get Directions
                                </a>
                            </div>
                            </div>
                            <h6 className="font-weight-bold mt-2"> <img src = {icon} alt="" height="20px"/> Plasma Available:</h6>
                            <div className="row ml-5">      
                            <div className="col-3">
                                A: {item.stock.plasma.A} units
                            </div>
                            <div className="col-3">
                                B: {item.stock.plasma.B} units
                            </div>
                            <div className="col-3">
                                AB: {item.stock.plasma.AB} units
                            </div>
                            <div className="col-3">
                                O: {item.stock.plasma.O} units
                            </div>
                            </div>
                            <h6 className="font-weight-bold mt-4"> <img src = {icon} alt="" height="20px"/> Blood Available:</h6>
                            <div className="row ml-5">      
                            <div className="col-3">
                                A+: {item.stock.blood['A+']} units
                            </div>
                            <div className="col-3">
                                B+: {item.stock.blood['B+']} units
                            </div>
                            <div className="col-3">
                                AB+: {item.stock.blood['AB+']} units
                            </div>
                            <div className="col-3">
                                O+: {item.stock.blood["O+"]} units
                            </div>
                            <div className="col-3">
                                A-: {item.stock.blood['A-']} units
                            </div>
                            <div className="col-3">
                                B-: {item.stock.blood['B-']} units
                            </div>
                            <div className="col-3">
                                AB-: {item.stock.blood['AB-']} units
                            </div>
                            <div className="col-3">
                                O-: {item.stock.blood["O-"]} units
                            </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}





export default Search;
