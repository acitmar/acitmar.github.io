import Card from 'react-bootstrap/Card';
import Acitmar  from '../../img/Acitmar.png';
import Alaced from '../../img/Alaced.png';
import Cifp from '../../img/Cifp.png';
import Iacass from '../../img/Iacass.png';
import JeanPiaget from '../../img/JeanPiaget.png'
import salud from '../../img/salud.jpg'
import disciplina from '../../img/disciplina.jpg'
import personal from '../../img/desarrollopersonal.jpg'
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupCards() {
    return (
        <CardGroup>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={salud} />
                <Card.Body>
                <Card.Title>ÁREA DE LA SALUD</Card.Title>
                <Card.Text>
                    • Formación de Brigadas.<br/>
                    • Seguridad, Higiene y Ambiente.<br/>
                    • Salud Ocupacional.<br/>
                    • Formación de Técnicos en Rescate y Emergencias Pre-hospitalaria T.R.E.P.H (Paramédicos).<br/>
                </Card.Text>
                </Card.Body>
            </Card>  
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={disciplina} />
                <Card.Body>
                <Card.Title>DISCIPLINA: SEGURIDAD, HIGIENE, AMBIENTE Y SALUD</Card.Title>
                <Card.Text>
                    • Análisis de Riesgo.<br/>
                    • Seguridad, Higiene y Ambiente.<br/>
                    • Prevención y Control de Incendios (Teórico- Práctico).<br/>
                    • Equipos de Protección Personal.<br/>
                </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={personal} />
                <Card.Body>
                <Card.Title>Diplomados Desarrollo Personal</Card.Title>
                <Card.Text>
                    • Programación Neurolingüística.<br/>
                    • Constelación Familiar.<br/>
                    • Coaching Ontológico.<br/>
                    • Coaching Profesional.<br/>
                    • Coaching Organizacional con PNL.<br/>
                </Card.Text>
                </Card.Body>
            </Card>    
        </CardGroup>
    )
}

export default GroupCards;