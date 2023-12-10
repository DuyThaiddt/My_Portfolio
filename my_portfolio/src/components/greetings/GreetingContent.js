import React, { useState, useEffect } from "react";
import "./Greeting.css"; // Import your CSS file for custom styles

export default function Greeting() {
    return (
        <div className="container d-flex">
            <div className="greeting-text">
                <h1>Hi, my name is Đào Duy Thái</h1>
                <h1>i <span className="fst-italic">design</span> and develop <span className="">websites</span></h1>
            </div>
        </div>
    );

}