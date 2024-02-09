import React from "react";



function Foodorder(){
    return(
        <div class="sidebar">
        {/* <!--logo--> */}
        <h1 class="logo">Admin</h1>
    
        {/* <!--List of menus--> */}
        <div class="sidebar-menus">
            <a href="1"><i class="fa-solid fa-house"></i>Home</a>
            <a href="2"> <i class="fa-solid fa-money-bill"></i>Bills</a>
            <a href="3"> <i class="fa-solid fa-wallet"></i>wallet</a>
            <a href="4"> <i class="fa-solid fa-bell"></i>Notification</a>
            <a href="5"> <i class="fa-solid fa-address-book"></i>Contact Us</a>
            <a href="6"><i class="fa-solid fa-gear"></i>setting</a>
        </div>
    
        {/* <!--Logout--> */}
        <div class="sidebar-logout">
            <a href="7"> <i class="fa-solid fa-right-from-bracket"></i>Log Out</a>
        </div>
    </div>
    )
}
export default Foodorder