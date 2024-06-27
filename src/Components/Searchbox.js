import React from "react";



const SearchBox = ({searchChange}) => {
    return (
        <div className="pa2">
            <input  className="tc mar2 pa3 bg-light-blue b--light-blue  " type="search" placeholder="Search Robo Name" onChange={searchChange}/>
        </div>
    );
}

export default SearchBox;