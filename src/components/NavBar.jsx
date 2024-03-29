import { NavLink } from "react-router-dom";

export const NavBar=()=>{
    const getStyle=({isActive})=>({
        color:isActive?"red":"",
        fontWeight:isActive?"500":""
    })
    return (
        <>
        <div>
            <div>
                <NavLink to="/">Inventory Management</NavLink>
            </div>
            <nav>
                <NavLink to="/" style={getStyle}>Reports</NavLink>||
                <NavLink to="/items" style={getStyle}>Item</NavLink>||
                <NavLink to="/sales" style={getStyle}>Sale</NavLink>||
                <NavLink to="https://github.com/bijaylaxmibehera/inventory-management" target="_blank">Git repo</NavLink>||
                <NavLink to="https://replit.com/@Bijaylaxmi2117/inventory-management?v=1" target="_blank">API</NavLink>
            </nav>
        </div>
        </>
    )
}