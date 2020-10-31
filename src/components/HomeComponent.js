import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, } from 'reactstrap';

function RenderCard({ item }) {

    return (
        <div className="col-12 col-sm-6 col-md-6 m-1 d-flex">
            <Card>
                <CardImg src={item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );

}

function Home(props) {
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.project}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home; 