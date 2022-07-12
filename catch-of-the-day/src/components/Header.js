import React, {Fragment} from "react";


const Header = props => (
    <header className="top">
        <h1>Bread
            <span className="ofThe">
                <span className="of">OF</span>
                <span className="the">THE</span>
        </span>
            Gods
        </h1>
        <h3 className="tagline">
            <span>{props.tagline}</span>
        </h3>
    </header>
)


export default Header;