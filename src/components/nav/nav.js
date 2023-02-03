import React from 'react'; 

function nav() { 
    return ( 
        <nav> 
            <div style="display: flex; justify-content: space-between;">
                <div style="display: flex;">
                    <img src="logo.png" style="width: 60px; height: 60px;"></img> 
                    <h3 style="margin: 19px; color: #D7B36C;"> Pet-Location </h3>
                </div>
                <div> 
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Portfolio</a>
                        <ul>
                            <li><a href="#">Graphic</a></li>
                            <li><a href="#">Web</a></li>
                        </ul>
                        </li>
                        <li><a href="#">Contact</a>
                        <ul>
                            <li><a href="#">Map</a></li>
                            <li><a href="#">Form</a></li>
                        </ul>
                        </li>
                    </ul>
                </div> 
            </div>
        </nav>        
    );
}

export default nav; 

