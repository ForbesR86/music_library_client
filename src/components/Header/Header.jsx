import React from 'react';
import './Header.css';

function TitleBar(props) {
    return(
        <div className="row row-space">
            <div className="col-md-12" style={{ padding:0}}>
                <div className="Header">
                <h1>Randy Forbes Music Library</h1>
                </div>
            </div>
        </div>
            )
}

export default TitleBar;