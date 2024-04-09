import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import blog from './Blog'

import './Blog.css';

const position = blog.length - 1;

function BlogAcitmar() {
  return (
    <Container>
        
        <h1 style={{ fontFamily: 'Comic Sans MS' }}>Lee nuestro Blog!!</h1><br></br><br></br>
        <CardGroup>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ blog[position].Image } />
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title style={{ fontFamily: 'Comic Sans MS' }}>{ blog[position].Title }</Card.Title>
                    <br></br>
                    <Card.Text style={{ fontFamily: 'Comic Sans MS' }} class="new-line">
                        { blog[position].Text }
                    </Card.Text>
                    <Button href='acitmar.com' variant="dark" type="button" style={{ fontFamily: 'Comic Sans MS' }}>Ver más.</Button>
                </Card.Body>
            </Card>
        </CardGroup>
    </Container>

  );
}

export default BlogAcitmar;