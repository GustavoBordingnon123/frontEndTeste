import React from "react";
import { BsFillTrashFill } from 'react-icons/bs';
import { TiEdit } from 'react-icons/ti';

export default function VendaCard(props) {
    const { ID_VENDA, ID_CLIENTE, ID_PRODUTO, QTD_VENDA, VLR_UNITARIO_VENDA, DTH_VENDA, VLR_TOTAL_VENDA } = props.data;

    const styles = {
        container: {
            height: 'auto',
            width: '250px',
            marginTop: '10px',
            marginLeft: '10px',
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '1px solid gray',
            borderRadius: '10px',
            boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.24)',
            textAlign:'center',
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
            <p style={styles.text}>ID Venda: {ID_VENDA}</p>
            <p style={styles.text}>ID Cliente: {ID_CLIENTE}</p>
            <p style={styles.text}>ID Produto: {ID_PRODUTO}</p>
            <p style={styles.text}>Quantidade: {QTD_VENDA}</p>
            <p style={styles.text}>Valor Unitário: {VLR_UNITARIO_VENDA}</p>
            <p style={styles.text}>Data da Venda: {DTH_VENDA}</p>
            <p style={styles.text}>Valor Total: {VLR_TOTAL_VENDA}</p>

            <div style={styles.iconContainer}>
                <TiEdit size={32} fill="yellow"/>
                <BsFillTrashFill size={32} fill="red" />
            </div>
        </div>
    );
}
