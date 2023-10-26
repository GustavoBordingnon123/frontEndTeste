import React, { useEffect, useState } from 'react';
import Card from "../../components/cards/ClientesProdutos";
import Button from "../../components/Button";

export default function ProdutosViewPage() {

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
            desc: "Produto 1",
            vlrUnitario: 10.99
        },
        {
            id: 2,
            desc: "Produto 2",
            vlrUnitario: 15.49
        },
        {
            id: 3,
            desc: "Produto 3",
            vlrUnitario: 25.99
        },
        {
            id: 4,
            desc: "Produto 4",
            vlrUnitario: 8.99
        },
        {
            id: 5,
            desc: "Produto 5",
            vlrUnitario: 12.99
        },
    ];

    const styles = {
        main: {
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

    const mobileMediaQuery = `@media (max-width: 768px) {
        .container {
            justify-content: center !Important;
        }
    }`;


    return (
        <main style={styles.main}>
            <div style={styles.container}>
                {data.map((item) => (
                    <Card key={item.id} data={item} style={{ margin: "0 10px" }} />
                ))}
            </div>

            <Button text="Adicionar novo produto" link={"/newProduto"} />
        </main>
    );
}
