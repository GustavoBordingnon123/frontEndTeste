import Input from "../../components/Input";
import Button from "../../components/Button"

export default function NewData({ inputData, textosPrincipais }) {

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '5%'
        },
        buttonContainer: {
            marginTop:'20px',
            marginBottom:'20px'
        },
        title: {
            fontSize: '32px',
            fontWeight: '500',
            marginBottom: '50px',
        }
    }

    return (
        <div style={styles.container}>
            <p style={styles.title}> {textosPrincipais} </p>

            {Object.keys(inputData).map((key) => (
                <Input
                    key={key}
                    label={inputData[key].label}
                    placeholder={inputData[key].placeholder}
                />
            ))}
            
            <div style={styles.buttonContainer}>
                <Button text='enviar'/>
            </div>

        </div>
    )
}
