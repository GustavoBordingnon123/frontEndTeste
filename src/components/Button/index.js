import React from "react";
import { NavLink } from 'react-router-dom';

export default function Button({text, link}){

    const styles = {
        navLink:{
            textDecoration: 'none',
        },
        container: {
            backgroundColor: '#42FF00',
            padding:'1% 2%',
            borderRadius:'5px',
            color:'white',
            cursor:'pointer',
            padding: '10px 20px',
        },
    };

    return(
        <NavLink
            to={`${link}`}
            style={styles.navLink}
        >
            <a style={styles.container}>
                {text}
            </a>
        </NavLink>
    )
}