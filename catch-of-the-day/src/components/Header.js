import React, {Fragment} from "react";

class Header extends React.Component{
    render() {
        return(
            <header className="top">
                <h1>Bread 
                    <span className="ofThe">
                        <span className="of">OF</span> 
                        <span className="the">THE</span>
                    </span>
                    Gods
                </h1>
                <h3 className="tagline">
                    <span>Fresh Daily</span>
                </h3>
            </header>
        )
    }

}


export default Header;