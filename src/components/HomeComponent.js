import React from 'react';
import { CardColumns, Row, Card, CardImg, CardText, CardBody, CardTitle, CardGroup, } from 'reactstrap';

function RenderCard({ item }) {

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm col-md-4 m-1 d-flex ">

                    <Card>
                        <CardImg src={item.image} alt={item.name} />
                        <CardBody>
                            <CardTitle>{item.name}</CardTitle>
                            <CardText>{item.description}</CardText>
                        </CardBody>
                    </Card>

                </div>
            </div>
        </div>
    );
}

function Home(props) {
    return (
        <div className="container">
            <div className="row  justify-content-center">
                <div className="col-12 col-sm col-md-4 ">

                    <RenderCard item={props.project} />

                </div>
            </div>
        </div>

    );
}

export default Home; 