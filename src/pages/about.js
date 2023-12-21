import React from "react"
import { Link } from "gatsby"

const about = () => {
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
                <Link to="/">Home</Link>
            </div>
            <div className="body">
                <div style={{ textAlign: 'center' }}>
                  <h1> About Page</h1> 
                </div>
            </div>
            <div className="footer">
                <Link to="https://www.google.com">Google</Link>
            </div>
        </div>
    )
}
export default about
