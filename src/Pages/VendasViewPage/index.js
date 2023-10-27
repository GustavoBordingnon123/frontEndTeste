import React, { useEffect, useState } from 'react';
import Card from "../../components/cards/venda";
import Button from "../../components/Button";

export default function VendasViewPage() {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);


    const data = [
        {
            ID_VENDA: 1,
            ID_CLIENTE: 2,
            ID_PRODUTO: 1,
            QTD_VENDA: 3,
            VLR_UNITARIO_VENDA: 10.99,
            DTH_VENDA: "2023-10-26 14:30:00",
            VLR_TOTAL_VENDA: 32.97
        },
        {
            ID_VENDA: 2,
            ID_CLIENTE: 4,
            ID_PRODUTO: 3,
            QTD_VENDA: 5,
            VLR_UNITARIO_VENDA: 15.49,
            DTH_VENDA: "2023-10-27 09:15:00",
            VLR_TOTAL_VENDA: 77.45
        },
        {
            ID_VENDA: 3,
            ID_CLIENTE: 1,
            ID_PRODUTO: 2,
            QTD_VENDA: 2,
            VLR_UNITARIO_VENDA: 25.99,
            DTH_VENDA: "2023-10-28 16:45:00",
            VLR_TOTAL_VENDA: 51.98
        },
        {
            ID_VENDA: 4,
            ID_CLIENTE: 3,
            ID_PRODUTO: 5,
            QTD_VENDA: 4,
            VLR_UNITARIO_VENDA: 8.99,
            DTH_VENDA: "2023-10-29 11:30:00",
            VLR_TOTAL_VENDA: 35.96
        },
        {
            ID_VENDA: 5,
            ID_CLIENTE: 5,
            ID_PRODUTO: 4,
            QTD_VENDA: 1,
            VLR_UNITARIO_VENDA: 12.99,
            DTH_VENDA: "2023-10-30 14:00:00",
            VLR_TOTAL_VENDA: 12.99
        },
    ];
    
    const styles = {
        main: {
            padding: "2% 5%"
        },
        buttonContainer: {
            position: isMobile ? 'relative' : '',
            left: isMobile ? '25%' : '',
            marginBottom: isMobile ? '50px' : '10px',
        },
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: isMobile ? 'center' : 'left',
            alignItems: 'center',
            marginBottom: '50px',
        },
    };

    return (
        <main style={styles.main}>
            <div style={styles.container}>
                {data.map((item) => (
                    <Card key={item.ID_VENDA} data={item} style={{ margin: "0 10px" }} />
                ))}
            </div>
            
            <div style={styles.buttonContainer}>
                <Button text="Adicionar nova venda" link={"/newVenda"}/>
            </div>

        </main>
    );
}
