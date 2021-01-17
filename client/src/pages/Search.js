import React from 'react';
import '../styles/Search.css';
import icon from '../assets/logo192.png'

const Search = (props) => {
    const { search, results } = props;
    return (
        <div className="search-flexbox-wrapper container">
            <h4 className="search-title font-weight-bold">Search results for <span className="search-span">{search}</span></h4>
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


Search.defaultProps = {
    search: "Canada",
    results: [{
        "_id": {
            "$oid": "6003c86c89ab5eeab1e11875"
        },
        "name": "Canadian Blood Services, Victoria",
        "helplineNumber": "18882366283",
        "phoneNumber": "919899233217",
        "address": {
            "address": "1925 Bowen Rd, Nanaimo, BC V9S 1H1, Canada",
            "lat": 52.76507692511867, "long": -123.9135876389031
        }, "stock": {
            "plasma": {
                "A": 1,
                "B": 2,
                "AB": 4,
                "O": 5
            },
            "blood": {
                "A+": 1,
                "B+": 2,
                "AB+": 4,
                "O+": 0,
                "A-": 1,
                "B-": 2,
                "AB-": 4,
                "O-": 1
            }
        }
    }, {
        "_id": {
            "$oid": "6003cd87a8e298fd1c4042a7"
        },
        "name": "Canadian Blood Services",
        "helplineNumber": "16042215515",
        "address": {
            "address": "2150 Western Pkwy #207, Vancouver, BC V6T 1V6, Canada",
            "lat": 51.988202174018284, "long": -124.12864958615283
        }, "stock": {
            "plasma": {
                "A": 5,
                "B": 1,
                "AB": 2,
                "O": 0
            },
            "blood": {
                "A+": 1,
                "B+": 2,
                "AB+": 1,
                "O+": 5,
                "A-": 1,
                "B-": 2,
                "AB-": 0,
                "O-": 1
            }
        },
        "phoneNumber": "16042215515"
    }, {
        "_id": {
            "$oid": "6003ce91a8e298fd1c4042a8"
        },
        "name": "Canadian Blood Services, Oak St.",
        "helplineNumber": "16042215515",
        "phoneNumber": "16042215515",
        "address": {
            "address": "3735 Mayor Magrath Dr S unit 10, Lethbridge, AB T1K 8A8, Canada",
            "lat": 51.988202174018284, "long": -123.42552456438398
        }, "stock": {
            "plasma": {
                "A": 0,
                "B": 1,
                "AB": 2,
                "O": 1
            },
            "blood": {
                "A+": 1,
                "B+": 4,
                "AB+": 5,
                "O+": 0,
                "A-": 1,
                "B-": 2,
                "AB-": 3,
                "O-": 1
            }
        }
    }, {
        "_id": {
            "$oid": "6003d256a8e298fd1c4042a9"
        },
        "name": "Canadian Blood Services, Dunsmuir St.",
        "helplineNumber": "18882366283",
        "phoneNumber": "18882366283",
        "address": {
            "address": "888 Dunsmuir St 2nd Floor, Vancouver, BC V6C 3K4, Canada",
            "lat": 52.63300284917866, "long": -123.07396205349954
        }, "stock": {
            "plasma": {
                "A": 1,
                "B": 0,
                "AB": 0,
                "O": 1
            },
            "blood": {
                "A+": 5,
                "B+": 0,
                "AB+": 1,
                "O+": 4,
                "A-": 2,
                "B-": 2,
                "AB-": 0,
                "O-": 1
            }
        }
    }, {
        "_id": {
            "$oid": "6003d36ca8e298fd1c4042aa"
        },
        "name": "Canadian Blood Services, Edmonton",
        "helplineNumber": "18882366283",
        "phoneNumber": "18882366283",
        "address": {
            "address": "8249 114 St NW, Edmonton, AB T6G 2R8, Canada",
            "lat": 54.746165116737785, "long": -114.56648467398952
        }, "stock": {
            "plasma": {
                "A": 4,
                "B": 1,
                "AB": 2,
                "O": 1
            },
            "blood": {
                "A+": 1,
                "B+": 2,
                "AB+": 1,
                "O+": 4,
                "A-": 5,
                "B-": 1,
                "AB-": 0,
                "O-": 1
            }
        }
    }, {
        "_id": {
            "$oid": "6003d67ba8e298fd1c4042ab"
        },
        "name": "Canadian Blood Services, Mississauga",
        "helplineNumber": "18882366283",
        "phoneNumber": "18882366283",
        "address": {
            "address": "765 Britannia Rd W #2, Mississauga, ON L5V 2Y1, Canada",
            "lat": 44.8667451284659, "long": -79.05867107466239
        }, "stock": {
            "plasma": {
                "A": 1,
                "B": 5,
                "AB": 1,
                "O": 4
            },
            "blood": {
                "A+": 1,
                "B+": 1,
                "AB+": 0,
                "O+": 0,
                "A-": 1,
                "B-": 2,
                "AB-": 0,
                "O-": 1
            }
        }
    }, {
        "_id": {
            "$oid": "6003d6dca8e298fd1c4042ac"
        },
        "name": "Canadian Blood Services",
        "helplineNumber": "18882366283",
        "phoneNumber": "18882366283",
        "address": {
            "address": "1800 Alta Vista Dr, Ottawa, ON K1G 4J5, Canada",
            "lat": 45.977089035554684, "long": -75.36726471037589
        }, "stock": {
            "plasma": {
                "A": 5,
                "B": 5,
                "AB": 1,
                "O": 4
            },
            "blood": {
                "A+": 5,
                "B+": 1,
                "AB+": 5,
                "O+": 0,
                "A-": 1,
                "B-": 2,
                "AB-": 5,
                "O-": 1
            }
        }
    }, {
        "_id": {
            "$oid": "6003d772a8e298fd1c4042ad"
        },
        "name": "Canadian Blood Services, KW",
        "helplineNumber": "16137392300",
        "phoneNumber": "16137392300",
        "address": {
            "address": "94 Bridgeport Rd E, Waterloo, ON N2J 2J9, Canada",
            "lat": 44.8667451284659, "long": -80.20124923503676
        }, "stock": {
            "plasma": {
                "A": 1,
                "B": 0,
                "AB": 1,
                "O": 4
            },
            "blood": {
                "A+": 0,
                "B+": 1,
                "AB+": 5,
                "O+": 0,
                "A-": 1,
                "B-": 0,
                "AB-": 5,
                "O-": 1
            }
        }
    }, {
        "_id": {
            "$oid": "6003d801a8e298fd1c4042ae"
        },
        "name": "Canadian Blood Services - Plasma Donor Centre, Sudbury",
        "helplineNumber": "18882366283",
        "phoneNumber": "18882366283",
        "address": {
            "address": "900 Lasalle Blvd, Sudbury, ON P3A 5W8, Canada",
            "lat": 47.838208663477616, "long": -81.6074992785745
        }, "stock": {
            "plasma": {
                "A": 5,
                "B": 1,
                "AB": 4,
                "O": 4
            },
            "blood": {
                "A+": 2,
                "B+": 1,
                "AB+": 2,
                "O+": 0,
                "A-": 1,
                "B-": 2,
                "AB-": 1,
                "O-": 1
            }
        }
    }, {
        "_id": {
            "$oid": "6003d884a8e298fd1c4042af"
        },
        "name": "Canadian Blood Services",
        "helplineNumber": "",
        "phoneNumber": "18882366283",
        "address": {
            "address": "WR4Q+9V Winnipeg, Manitoba, Canada",
            "lat": 51.09246000375874, "long": -98.04304666242146
        }, "stock": {
            "plasma": {
                "A": 5,
                "B": 1,
                "AB": 4,
                "O": 4
            },
            "blood": {
                "A+": 2,
                "B+": 1,
                "AB+": 2,
                "O+": 0,
                "A-": 1,
                "B-": 2,
                "AB-": 1,
                "O-": 1
            }
        }
    }, {
        "_id": {
            "$oid": "6003d953a8e298fd1c4042b0"
        },
        "name": "Canadian Blood Services, Guelph",
        "helplineNumber": "18882366283",
        "phoneNumber": "18882366283",
        "address": {
            "address": "130 Silvercreek Pkwy N, Guelph, ON N1H 7Y5, Canada",
            "lat": 44.929003850606094, "long": -79.58601484098901
        }, "stock": {
            "plasma": {
                "A": 1,
                "B": 5,
                "AB": 1,
                "O": 4
            },
            "blood": {
                "A+": 1,
                "B+": 1,
                "AB+": 0,
                "O+": 0,
                "A-": 1,
                "B-": 2,
                "AB-": 0,
                "O-": 1
            }
        }
    }, {
        "_id": {
            "$oid": "6003d9e9a8e298fd1c4042b1"
        },
        "name": "Canadian Blood Services",
        "helplineNumber": "18882366283",
        "phoneNumber": "18882366283",
        "address": {
            "address": "2965 S Main St, Penticton, BC V2A 5J7, Canada",
            "lat": 50.815630453869296, "long": -119.57625045409259
        }, "stock": {
            "plasma": {
                "A": 5,
                "B": 1,
                "AB": 1,
                "O": 2
            },
            "blood": {
                "A+": 2,
                "B+": 2,
                "AB+": 1,
                "O+": 1,
                "A-": 2,
                "B-": 1,
                "AB-": 0,
                "O-": 5
            }
        }
    }, {
        "_id": {
            "$oid": "6003da86a8e298fd1c4042b2"
        },
        "name": "Canadian Blood Services, Red Deer",
        "helplineNumber": "18882366283",
        "phoneNumber": "18882366283",
        "address": {
            "address": "5020 68 St #5, Red Deer, AB T4N 7B4, Canada",
            "lat": 52.6639096896562, "long": -114.35653995727829
        }, "stock": {
            "plasma": {
                "A": 5,
                "B": 1,
                "AB": 1,
                "O": 2
            },
            "blood": {
                "A+": 2,
                "B+": 2,
                "AB+": 1,
                "O+": 1,
                "A-": 2,
                "B-": 1,
                "AB-": 0,
                "O-": 5
            }
        }
    }, {
        "_id": {
            "$oid": "6003db27a8e298fd1c4042b3"
        },
        "name": "Canadian Blood Services - Plasma Donor Centre, Lethbridge",
        "helplineNumber": "18882366283",
        "phoneNumber": "18882366283",
        "address": {
            "address": "3735 Mayor Magrath Dr S unit 10, Lethbridge, AB T1K 8A8, Canada",
            "lat": 50.14260626040912, "long": -113.2139617969039
        }, "stock": {
            "plasma": {
                "A": 2,
                "B": 2,
                "AB": 1,
                "O": 1
            },
            "blood": {
                "A+": 4,
                "B+": 2,
                "AB+": 2,
                "O+": 1,
                "A-": 2,
                "B-": 0,
                "AB-": 0,
                "O-": 1
            }
        }
    }, {
        "_id": {
            "$oid": "6003dc5546dfa33ad7bd572a"
        },
        "name": "Canadian Blood Services National Contact Centre ",
        "helplineNumber": "16137392300",
        "phoneNumber": "16137392300",
        "address": {
            "address": "300 Elm St, Sudbury, ON P3C 1V4, Canada",
            "lat": 48.30605523910196, "long": -80.6065389123733
        }, "stock": {
            "plasma": {
                "A": 5,
                "B": 5,
                "AB": 1,
                "O": 1
            },
            "blood": {
                "A+": 4,
                "B+": 2,
                "AB+": 2,
                "O+": 5,
                "A-": 2,
                "B-": 5,
                "AB-": 0,
                "O-": 1
            }
        }
    }, {
        "_id": {
            "$oid": "6003de01a8e298fd1c4042b4"
        },
        "name": "Canadian Blood Services, London",
        "helplineNumber": "18882366283 ",
        "phoneNumber": "18882366283  ",
        "address": {
            "address": "820 Wharncliffe Rd S, London, ON N6J 2N4, Canada",
            "lat": 43.67102393994514, "long": -80.7285930013634
        }, "stock": {
            "plasma": {
                "A": 5,
                "B": 5,
                "AB": 1,
                "O": 1
            },
            "blood": {
                "A+": 4,
                "B+": 2,
                "AB+": 2,
                "O+": 5,
                "A-": 2,
                "B-": 5,
                "AB-": 0,
                "O-": 1
            }
        }
    }, {
        "_id": {
            "$oid": "6003de6aa8e298fd1c4042b5"
        },
        "name": "Canadian Blood Services",
        "helplineNumber": "",
        "phoneNumber": "18882366283 ",
        "address": {
            "address": "Winnipeg, MB R3E 3R4, Canada",
            "lat": 50.64874061481214, "long": -96.90046850204706
        }, "stock": {
            "plasma": {
                "A": 2,
                "B": 1,
                "AB": 1,
                "O": 2
            },
            "blood": {
                "A+": 0,
                "B+": 0,
                "AB+": 2,
                "O+": 0,
                "A-": 0,
                "B-": 1,
                "AB-": 0,
                "O-": 1
            }
        }
    }, {
        "_id": {
            "$oid": "6003e02ba8e298fd1c4042b6"
        },
        "name": "Canadian Blood Services, Peterborough",
        "helplineNumber": "18882366283",
        "phoneNumber": "18882366283",
        "address": {
            "address": "55 George St N, Peterborough, ON K9J 3G2, Canada",
            "lat": 44.8667451284659, "long": -77.65242103112467
        }, "stock": {
            "plasma": {
                "A": 5,
                "B": 1,
                "AB": 2,
                "O": 2
            },
            "blood": {
                "A+": 2,
                "B+": 0,
                "AB+": 5,
                "O+": 0,
                "A-": 1,
                "B-": 5,
                "AB-": 0,
                "O-": 1
            }
        }
    }, {
        "_id": {
            "$oid": "6003e1e6a8e298fd1c4042b7"
        },
        "name": "Canadian Blood Services Production Site",
        "helplineNumber": "18882366283",
        "phoneNumber": "18882366283",
        "address": {
            "address": "100 Parkshore Dr, Brampton, ON L6T 5M1, Canada",
            "lat": 44.99119516171736, "long": -79.67390546871012
        }, "stock": {
            "plasma": {
                "A": 10,
                "B": 15,
                "AB": 21,
                "O": 11
            },
            "blood": {
                "A+": 25,
                "B+": 20,
                "AB+": 15,
                "O+": 20,
                "A-": 18,
                "B-": 17,
                "AB-": 22,
                "O-": 19
            }
        }
    }, {
        "_id": {
            "$oid": "6003e2c9a8e298fd1c4042b8"
        },
        "name": "Canadian Blood Services, Moncton",
        "helplineNumber": "18882366283",
        "phoneNumber": "18882366283",
        "address": {
            "address": "500 Mapleton Rd, Moncton, NB E1G 0N3, Canada",
            "lat": 47.66092321367422, "long": -65.52351440561193
        }, "stock": {
            "plasma": {
                "A": 1,
                "B": 5,
                "AB": 1,
                "O": 2
            },
            "blood": {
                "A+": 5,
                "B+": 0,
                "AB+": 1,
                "O+": 2,
                "A-": 1,
                "B-": 7,
                "AB-": 2,
                "O-": 9
            }
        }
    }, {
        "_id": {
            "$oid": "6003e3a1a8e298fd1c4042b9"
        },
        "name": "Canadian Blood Services, Saint John",
        "helplineNumber": "18882366283",
        "phoneNumber": "18882366283",
        "address": {
            "address": "405 University Ave, Saint John, NB E2K 0H6, Canada",
            "lat": 46.76542828104447, "long": -65.78718628877527
        }, "stock": {
            "plasma": {
                "A": 1,
                "B": 5,
                "AB": 1,
                "O": 4
            },
            "blood": {
                "A+": 1,
                "B+": 0,
                "AB+": 1,
                "O+": 4,
                "A-": 5,
                "B-": 1,
                "AB-": 0,
                "O-": 1
            }
        }
    }, {
        "_id": {
            "$oid": "6003e413a8e298fd1c4042ba"
        },
        "name": "Canadian Blood Services",
        "helplineNumber": "18882366283",
        "phoneNumber": "18882366283",
        "address": {
            "address": "270 John Savage Ave, Dartmouth, NS B3B 0H7, Canada",
            "lat": 46.28164316202299, "long": -62.974686201699825
        }, "stock": {
            "plasma": {
                "A": 1,
                "B": 0,
                "AB": 0,
                "O": 1
            },
            "blood": {
                "A+": 5,
                "B+": 0,
                "AB+": 1,
                "O+": 4,
                "A-": 2,
                "B-": 2,
                "AB-": 0,
                "O-": 1
            }
        }
    }]
}

export default Search;