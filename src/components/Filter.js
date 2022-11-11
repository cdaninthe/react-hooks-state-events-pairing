import React from "react";

function Filter({onSearchChange, search, onFilterChange}){

    return(
        <div>
            <input
                type="text" name="search" placeholder="Search by username..." 
                onChange={onSearchChange} value={search}
            />
            {/* <select name="filter" onChange={onFilterChange}>
                <option value="All">Filter comments by...</option>
                <option value="Username">username</option>
                <option value="Date">date posted</option>
            </select> */}
        </div>
    )
}

export default Filter;