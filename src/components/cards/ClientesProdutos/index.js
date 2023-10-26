import React from "react";
import { BsFillTrashFill } from 'react-icons/bs';
import { TiEdit } from 'react-icons/ti';

export default function Card(props) {
    const { id, name, city, desc, vlrUnitario } = props.data;

    const styles = {
        container: {
            height: 'auto',
            width: '200px',
            marginTop: '10px',
            marginLeft: '10px',
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '1px solid gray',
            borderRadius: '10px',
            boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.24)',
        },
        text: {
            marginTop: '20px',
        },
        iconContainer: {
            position: 'relative',
            bottom: 0,
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 2.5%',
            marginTop: '20px',
            marginBottom: '10px',
        },
    };

    return (
        <div style={styles.container}>
            <p style={styles.text}>Id: {id}</p>
            {name && <p style={styles.text}>Name: {name}</p>}
            {city && <p style={styles.text}>City: {city}</p>}
            {desc && <p style={styles.text}>Description: {desc}</p>}
            {vlrUnitario && <p style={styles.text}>Unit Price: {vlrUnitario}</p>}

            <div style={styles.iconContainer}>
                <TiEdit size={32} fill="yellow"/>
                <BsFillTrashFill size={32} fill="red" />
            </div>
        </div>
    );
}
