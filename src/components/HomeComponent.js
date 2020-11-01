import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCard({ item }) {

    return (
        <div className="container">
            <div className="row justify-content-center">
                <Card>
                    <CardImg src={item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        </div>
    );

}

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <RenderCard item={props.project} />
            </div>
        </div>

    );
}

export default Home; 