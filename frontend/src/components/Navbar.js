import React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <a className="navbar-brand" href="/">RETAIL THERAPY</a>
            </div>
        </nav>
    );
}


const styles = `
    .navbar {
        background-color: black; 
        padding: 10px 20px; 
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .navbar .container {
        display: flex;
        justify-content: center;
        width: 100%;
    }
    
    .navbar-brand {
        font-family: 'Playfair Display', serif;
        font-size: 32px;
        color: #ffffff; 
        text-decoration: none; 
    }
    
    .navbar-brand:hover {
        color: #f8f9fa; 
    }
`;

// Inject styles into the head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
