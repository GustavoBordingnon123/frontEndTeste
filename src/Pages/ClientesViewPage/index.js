import React, { useEffect, useState } from 'react';
import Card from "../../components/cards/ClientesProdutos";
import Button from "../../components/Button";

export default function ClientesViewPage() {

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
            id: 1,
            name: "Gustavo",
            city: "Curitiba"
        },
        {
            id: 2,
            name: "Maria",
            city: "São Paulo"
        },
        {
            id: 3,
            name: "Pedro",
            city: "Rio de Janeiro"
        },
        {
            id: 4,
            name: "Ana",
            city: "Salvador"
        },
        {
            id: 5,
            name: "Luiz",
            city: "Porto Alegre"
        },
        {
            id: 6,
            name: "Mariana",
            city: "Belo Horizonte"
        },
        {
            id: 7,
            name: "Rafael",
            city: "Recife"
        },
        {
            id: 8,
            name: "Carla",
            city: "Fortaleza"
        }
    ];

    const styles = {

        main:{
            padding: "2% 5%"
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
                    <Card key={item.id} data={item} style={{ margin:"0 10px" }} />
                ))}
            </div>

            <Button text="Adicionar novo cliente" link={"/newCliente"}/>
        </main>
        
    );
}
