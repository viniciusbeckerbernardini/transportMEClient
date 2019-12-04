import React,{useState} from 'react';
import {Link} from "react-router-dom";

const AdminMenu = ({username}) => {
    return (
        <ul className="navbar-nav">
            <li className="nav-item nav-icon">
                <i className="fa fa-user fa-1x"></i> Olá { username}
            </li>
            <li className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menu</Link>
                <div className="dropdown-menu">
                    <div className="px-32 py-3">
                        <Link className="form-group" to={'/dashboard'} >Painel de controle</Link>
                        <br/>
                        <Link className="form-group" to="#">Sair</Link>
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default AdminMenu;
