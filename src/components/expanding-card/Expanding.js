import React from 'react'
import "./expanding.css";

const Expanding = () => {
    return (
        <div className='main-expandingcontainer'>
            <div className="expaniding_container">

                {/* <!-- Div with section and active --> */}
                <div className="container_section one active"></div>

                {/* <!-- All another div with section --> */}
                <div className="container_section two"></div>
                <div className="container_section three"></div>
                <div className="container_section four"></div>
            </div>
        </div>
    )
}

export default Expanding;