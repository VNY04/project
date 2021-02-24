import React from 'react'
import { Jumbotron, Container } from 'reactstrap';
import {Button} from 'reactstrap'

const HomePage = () => {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-12">For Students</h1>
                    <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, nesciunt provident. Odio, earum ut alias perspiciatis in, vel doloribus perferendis nobis quod dolore, nemo aliquam aperiam necessitatibus similique delectus voluptatum.</p>
                    <Button color="primary">Take Loans</Button>
                </Container>
            </Jumbotron>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-12">For Lenders</h1>
                    <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, nesciunt provident. Odio, earum ut alias perspiciatis in, vel doloribus perferendis nobis quod dolore, nemo aliquam aperiam necessitatibus similique delectus voluptatum.</p>
                    <Button outline color="primary">Grant Loans</Button>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default HomePage
