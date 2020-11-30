import React from 'react';
import { Media, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

function RenderProjectItem({ project, deleteFavorite }) {
    return (
        <Media tag="li">
            <Media left middle>
                <Media object src={project.image} alt={project.name} />
            </Media>
            <Media body className="ml-5">
                <Media heading>{project.name}</Media>
                <p>{project.description}</p>
                <Button outline color="danger" onClick={() => deleteFavorite(project.id)}>
                    <span className="fa fa-times"></span>
                </Button>
            </Media>
        </Media>
    );
}

const Favorites = (props) => {
    if (props.favorites.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.favorites.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.favorites.errMess}</h4>
                </div>
            </div>
        )
    }
    else if (props.favorites.favorites) {
        const favorites = props.favorites.favorites.projects.map((projectId) => {
            let project = props.propjects.projects.filter((project) => project._id === projectId)[0];

            return (
                <div key={project.id} className="col-12 mt-5">
                    <RenderProjectItem project={project} deleteFavorite={props.deleteFavorite} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>My Favorites</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>My Favorites</h3>
                    </div>
                    <div className="row">
                        <Media list>
                            {favorites}
                        </Media>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="container">
                <div className="row">
                    <h4>You have no favorites</h4>
                </div>
            </div>
        )
    }
}

export default Favorites; 