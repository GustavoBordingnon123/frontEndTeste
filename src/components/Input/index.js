import React from "react";

export default function Input({ label, placeholder }) {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            marginTop:'15px',
            marginBottom:'15px',
        },
        input: {
            width: '200px',
            height: '30px',
            paddingLeft:'5px',
            border: '1px solid gray',
            borderRadius: '5px',
            marginTop: '10px',
            boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.24)',
        },
    };

    return (
        <div style={styles.container}>
            <label>{label}</label>
            <input
                placeholder={`${placeholder}`}
                title={`${placeholder}`}
                style={styles.input}
            />
        </div>
    );
}
