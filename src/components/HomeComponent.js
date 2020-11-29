import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Jumbotron } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';
import Typing from 'react-typing-animation';




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
            <FadeTransform in
                transformProps={{ exitTransform: 'scale(0.5) translateY(-50%)' }}>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-5">
                            <Card>
                                <CardBody >
                                    <div className="text-center" >
                                        <CardImg className="img-fluid" src={baseUrl + item.image} alt="" />
                                        <CardTitle className="bg-primary text-white">{item.name}</CardTitle>
                                        <img src={baseUrl + item.image2} alt="" />
                                        <img src={baseUrl + item.image3} alt="" />
                                        <CardText>{item.shortDescription}</CardText>
                                        <a href={item.link}>{item.word}</a>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </FadeTransform>
        );
}

function Home(props) {
    return (
        <div className="container-fluid">
            <Jumbotron>
                <div className="row">
                    <div className="col-md-4 offset-2 alcenter">
                        <Typing speed ={200}>
                            <div>
                                <Typing.Delay ms={1000} />
                                <Typing.Speed ms ={100} />
                                <h1>FullStack Web Developer</h1>
                            </div>
                        </Typing>
                        <hr />
                        <p className="font-s">Welcome to my portfolio web application demonstrating my skills in <font color="#25d79b">Computer Programming</font> & <font color="#007bff">Fullstack Web Development</font> using the MERN (Mongodb, ExpressJS, ReactJS and NodeJS) stack. Thank You and Happy Browsing!</p>
                    </div>
                    <div className=" col-12 col-sm-6 col-md-4 offset-1">
                        <img className="img-fluid" src={baseUrl + ("assets/logos/devLogo.png")} alt="" />
                    </div>
                </div>
            </Jumbotron>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <h2 className="text-center text-color">My Skills</h2>
                </div>
                <div className="row-content">
                    <div className="row">
                        <div className="col-12 col-md-4 ">
                            <h4 className="text-center hcolor text-nowrap"> FullStack Web Development</h4>

                            <ul className=" no-bullets text-color">
                                <li>
                                    <img src={baseUrl + ("./assets/logos/javascriptLogo.png")} alt="JavascriptLogo" />
                                    <span>Javascript ES6</span>
                                </li>
                                <li>
                                    <img src={baseUrl + ("./assets/logos/html5Logo.png")} alt="html5Logo" />
                                    <span>HTML5</span>
                                </li>
                                <li>
                                    <img src={baseUrl + ("./assets/logos/cssLogo.png")} alt="cssLogo" />
                                    <span>CSS </span>
                                </li>
                                <li>
                                    <img src={baseUrl + ("./assets/logos/bootstrapLogo.png")} alt="bootstrapLogo" />
                                    <span> Bootstrap</span>
                                </li>
                                <li>
                                    <img src={baseUrl + ("./assets/logos/reactLogo.png")} alt="React " />
                                    <span> React</span>
                                </li>
                                <li>
                                    <img src={baseUrl + ("./assets/logos/nodeLogo.png")} alt="React " />
                                    <span> NodeJS</span>
                                </li>
                                <li>
                                    <img src={baseUrl + ("./assets/logos/expressLogo.png ")} alt="expressLogo" />
                                    <span>Express</span>
                                </li>
                                <li>
                                    <img src={baseUrl + ("./assets/logos/mongoLogo.png")} alt="NoSql MongoDB Logo" />
                                    <span>NoSql MongoDB</span>
                                </li>
                            </ul>

                        </div>
                        <div className="col-12 col-md-4 ">
                            <h4 className="text-center hcolor"> Database Administration </h4>

                            <ul className="no-bullets text-color">
                                <li>
                                    <img src={baseUrl + ("./assets/logos/javaLogo.png")} alt="JDBC Logo" />
                                    <span>JDBC</span>
                                </li>
                                <li>
                                    <img src={baseUrl + ("./assets/logos/SQLLogo.png")} alt="SQL Logo" />
                                    <span>SQL</span>
                                </li>
                                <li>
                                    <img src={baseUrl + ("./assets/logos/mySqlLogo.png")} alt="mySql Logo" />
                                    <span>mySql</span>
                                </li>
                                <li>
                                    <img src={baseUrl + ("./assets/logos/apacheLogo.png")} alt="Apache Logo" />
                                    <span>Apache</span>
                                </li>
                                <li>
                                    <img src={baseUrl + ("./assets/logos/mongooseLogo.png")} alt="Mongoose Logo" />
                                    <span>Mongoose</span>
                                </li>
                                <li>
                                    <img src={baseUrl + ("./assets/logos/MongoLogo.png")} alt="NoSql MongoDB Logo" />
                                    <span>NoSql MongoDB</span>
                                </li>
                            </ul>

                        </div>
                        <div className="col-12 col-md-4">
                            <h4 className="text-center hcolor"> Application Development </h4>

                            <ul className="no-bullets text-color justify-content-center">
                                <li>
                                    <img src={baseUrl + ("./assets/logos/reactLogo.png")} alt="React Logo" />
                                    <span>React Native</span>
                                </li>
                                <li>
                                    <img src={baseUrl + ("./assets/logos/swiftLogo.png ")} alt="Swift Logo" />
                                    <span>Swift</span>
                                </li>
                                <li>
                                    <img src={baseUrl + ("./assets/logos/javaLogo.png ")} alt="Java " />
                                    <span>Java</span>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>


            <h2 className="text-center text-color">Some Featured Works</h2>
            <div className="row">
                <div className="col-12 col-sm-6 col-md-6">
                    <RenderCard item={props.project}
                        isLoading={props.projectsLoading}
                        errMess={props.projectsErrMess}
                    />
                </div>
                <div className="col-12 col-sm-6 col-md-6">
                    <RenderCard item={props.project1}
                        isLoading={props.projectsLoading}
                        errMess={props.projectsErrMess}
                    />
                </div>
            </div>

        </div >
    );
}


export default Home; 