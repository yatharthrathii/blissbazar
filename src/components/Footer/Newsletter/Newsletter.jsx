import React from "react";
import "./Newsletter.css";
import { Link } from "react-router-dom";

import { FaMapMarkerAlt, FaMobileAlt, FaEnvelope } from 'react-icons/fa';

const Newsletter = () => {
    return (
        <div className="f-t">
            <div className="f-t-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">Discover BlissBazar, your go-to hub for cutting-edge electronics. Elevate your lifestyle with our curated selection of top-notch gadgets and appliances. Shop now for convenience and innovation!</div>
                </div>

                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaMapMarkerAlt className="i" />
                        <div className="text">Shanti Nagar, Dhamohnaka, Jabalpur, Madhya Pradesh<br />Pin-code:482002</div>
                    </div>

                    <div className="c-item">
                        <FaMobileAlt className="i" />
                        <div className="text">7440574533</div>
                    </div>

                    <div className="c-item item1">
                        <FaEnvelope className="i" />
                        <Link className="th" to="mailto:yatharthmaheshwari01@gmail.com?subject=Subject%20Here&body=Body%20Text%20Here" target="_blank" rel="noopener noreferrer">
                            <div className="text texte">yatharthmaheshwari01@gmail.com</div>
                        </Link>
                    </div>
                </div>

                <div className="col">
                    <div className="title">Catagories</div>
                    <span className="text texte">Headphone</span>
                    <span className="text texte">Smart Watch</span>
                    <span className="text texte">Bluetooth Speaker</span>
                    <span className="text texte">Wireless Earbuds</span>
                    <span className="text texte">Home Theater</span>
                </div>

                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text texte">Home</span>
                    <span className="text texte">About</span>
                    <span className="text texte">Privacy policy</span>
                    <span className="text texte">Returns</span>
                    <span className="text texte">Terms & Conditions</span>
                </div>
            </div>
        </div>
    )
};

export default Newsletter;
