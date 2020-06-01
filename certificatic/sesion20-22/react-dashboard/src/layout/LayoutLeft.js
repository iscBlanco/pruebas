import React from 'react'
import {Link} from 'react-router-dom'

function LayoutLeft(){
    return(
        <>
            <aside className="menu">
                <p className="menu-label">MENU</p>
                <ul className="menu-list">
                    <li><a><i class="fas fa-tachometer-alt"></i> Dashboard</a></li>
                    <li><a><i class="fas fa-book"></i> Books</a></li>
                    <li><a><i class="far fa-list-alt"></i> Customers</a></li>
                    <li><a><i class="fas fa-sticky-note"></i> Orders</a></li>
                </ul>
            </aside>
        </>
    )
}

export default LayoutLeft