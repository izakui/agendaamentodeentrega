import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar em casa! */}
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i> Usuários
            </Link>
            <Link to="/user">
                <i className="fa fa-id-card-o"></i> cadastro
                
            </Link>
            <Link to="/popup">
                <i className="fa fa-id-card-o"></i> Popup
                
            </Link>
        </nav>
    </aside>