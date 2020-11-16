import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';



function RenderCard({ item, isLoading, errMess }) {
    if (isLoading) {
        return (
            <Loading />
        );
    }
    else if (errMess) {
        return (
            <h4>{errMess}</h4>
        )
    }
    else
        return (
            <div className="container">
                <FadeTransform in
                    transformProps={{
                        exitTransform: 'scale(0.5) translateY(-50%)'
                    }}>
                    <div className="row justify-content-center">
                        <Card>
                            <CardImg src={baseUrl + item.image} alt={item.name} />
                            <CardBody>
                                <CardTitle>{item.name}</CardTitle>
                                <CardText>{item.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                </FadeTransform>
            </div >

        );

}

function Home(props) {
    return (

        <div className="container">
            <div className="row">
                <RenderCard item={props.project}
                    isLoading={props.projectsLoading}
                    errMess={props.projectsErrMess} />
            </div>
        </div>

    );
}


export default Home; 