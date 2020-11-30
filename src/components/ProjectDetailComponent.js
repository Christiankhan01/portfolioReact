import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { FadeTransform } from 'react-animation-components';

    function RenderProject({project, favorite, postFavorite}) {
            return(
                <div className="col-12 col-md-5 m-1">
                    <FadeTransform in 
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                        <Card>
                            <CardImg top src={project.image} alt={project.name} />
                            <CardImgOverlay>
                                <Button outline color="primary" onClick={() => favorite ? console.log('Already favorite') : postFavorite(project._id)}>
                                    {favorite ?
                                        <span className="fa fa-heart"></span>
                                        : 
                                        <span className="fa fa-heart-o"></span>
                                    }
                                </Button>
                            </CardImgOverlay>
                            <CardBody>
                                <CardTitle>{project.name}</CardTitle>
                                <CardText>{project.description}</CardText>
                            </CardBody>
                        </Card>
                    </FadeTransform>
                </div>
            );

    }
const ProjectDetail = (props) => {
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.project != null)        
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.project.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.project.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderProject project={props.project} favorite={props.favorite} postFavorite={props.postFavorite} />
                </div>
            </div>
        );
    else
        return(
            <div></div>
        );
}

export default ProjectDetail;