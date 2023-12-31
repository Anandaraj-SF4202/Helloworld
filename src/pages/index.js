import React from "react"
import icon from "../images/icon.png"
import { Link } from "gatsby"

const home = () => {
    return (
        <div>
            <style>
                {`
          .header {
            background-color: yellow;
            padding: 10px;
            text-align: center;
            top:0;
            position:fixed;
            width:100%;
          }

          .footer {
            background-color:yellow;
            padding: 10px;
            text-align: center;
            bottom:0;
            position:fixed;
            width:100%;
          }

          .body {
            padding: 20px;
          }
        `}
            </style>
            <div className="header">
                <Link to="/">Home</Link>/
                <Link to="/about">About</Link>
            </div>
            <div className="body">
                <div style={{ textAlign: 'center' }}>
                <h1>Home Page</h1>
                <p>Welcome hello world</p>
                <img src={icon} alt="Icon" style={{height:'100px',width:'100px'}} />
                </div>
            </div>
            <div className="footer">
                <Link to="https://www.google.com">Google</Link>
            </div>
        </div>
    )
}
export default home
