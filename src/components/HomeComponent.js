import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Jumbotron } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { FadeTransform, Fade } from 'react-animation-components';
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
                                        <CardImg className="img-fluid" src={item.image} alt="" />
                                        <CardTitle className="bg-primary text-white">{item.name}</CardTitle>
                                        <img src={item.image2} alt="" />
                                        <img src={item.image3} alt="" />
                                        <CardText>{item.shortDescription}</CardText>
                                        <CardText>{item.label}</CardText>
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
                        <img className="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/portfolioserver-93c29.appspot.com/o/logos%2FdevLogo.png?alt=media&token=72d367b4-78bb-40f2-9fd0-45537fce41a0" alt="Developer" />
                    </div>
                </div>
            </Jumbotron>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <h2 className="text-center text-color">My Skills</h2>
                </div>
                <div className="row-content">
                    <div className="row">
                        <div className=" col-12 col-md-4">
                            <h5 className="text-center hcolor text-nowrap"> FullStack Web Development</h5>
                            <Fade in>
                                <ul className="no-bullets text-color">
                                    <li>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolioserver-93c29.appspot.com/o/logos%2FjavascriptLogo.png?alt=media&token=9c20b2ad-583d-4fd2-99ba-b2c3722ba93d" alt="JavascriptLogo.png" />
                                        <span>Javascript ES6</span>
                                    </li>
                                    <li>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolioserver-93c29.appspot.com/o/logos%2Fhtml5Logo.png?alt=media&token=d8364bd9-ab2c-498e-b9ad-033ec77cb7f0" alt="html5Logo" />
                                        <span>HTML5</span>
                                    </li>
                                    <li>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolioserver-93c29.appspot.com/o/logos%2FcssLogo.png?alt=media&token=fa342391-2649-435e-afb5-d6f8924bd480" alt="cssLogo" />
                                        <span>CSS </span>
                                    </li>
                                    <li>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolioserver-93c29.appspot.com/o/logos%2FbootstrapLogo.png?alt=media&token=84f5f331-5c51-40b2-9b8f-2e3b5de86128" alt="bootstrapLogo" />
                                        <span> Bootstrap</span>
                                    </li>
                                    <li>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolioserver-93c29.appspot.com/o/logos%2FreactLogo.png?alt=media&token=3208ded9-304e-45f9-b0db-46b78e57a6ae" alt="React " />
                                        <span> React</span>
                                    </li>
                                    <li>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolioserver-93c29.appspot.com/o/logos%2FnodeLogo.png?alt=media&token=4d2bad1b-9d3b-4b56-86b5-f0f9fcddae95" alt="React " />
                                        <span> NodeJS</span>
                                    </li>
                                    <li>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolioserver-93c29.appspot.com/o/logos%2FexpressLogo.png?alt=media&token=5edd80b5-337a-4b19-a0a7-eabb3d2a382a" alt="expressLogo" />
                                        <span>Express</span>
                                    </li>
                                    <li>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolioserver-93c29.appspot.com/o/logos%2FMongoLogo.png?alt=media&token=0f151ac3-0504-47c9-9432-2e7291341e6c" alt="NoSql MongoDB Logo" />
                                        <span>NoSql MongoDB</span>
                                    </li>
                                </ul>
                            </Fade>
                        </div>
                        <div className="col-12 col-md-4">
                            <h5 className="text-center hcolor text-color"> Database Administration </h5>
                            <Fade in>
                                <ul className="no-bullets text-color">
                                    <li>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolioserver-93c29.appspot.com/o/logos%2FjavaLogo.png?alt=media&token=a3822a54-d128-440f-8e9a-df2dacfb6713" alt="JDBC Logo" />
                                        <span>JDBC</span>
                                    </li>
                                    <li>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolioserver-93c29.appspot.com/o/logos%2FSQLLogo.png?alt=media&token=c3921847-3880-4a10-bf2d-960c8b0525ce" alt="SQL Logo" />
                                        <span>SQL</span>
                                    </li>
                                    <li>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolioserver-93c29.appspot.com/o/logos%2FmySqlLogo.png?alt=media&token=b77395c7-426a-439a-b87b-72cb99d25316" alt="mySql Logo" />
                                        <span>mySql</span>
                                    </li>
                                    <li>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolioserver-93c29.appspot.com/o/logos%2FapacheLogo.png?alt=media&token=205e2ae7-d1b2-4b61-ac71-74d490beccb1" alt="Apache Logo" />
                                        <span>Apache</span>
                                    </li>
                                    <li>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolioserver-93c29.appspot.com/o/logos%2FmongooseLogo.png?alt=media&token=ecb19d07-2408-4c82-b5af-bb4484908ee9" alt="Mongoose Logo" />
                                        <span>Mongoose</span>
                                    </li>
                                    <li>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolioserver-93c29.appspot.com/o/logos%2FMongoLogo.png?alt=media&token=0f151ac3-0504-47c9-9432-2e7291341e6c" alt="NoSql MongoDB Logo" />
                                        <span>NoSql MongoDB</span>
                                    </li>
                                </ul>
                            </Fade>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4">
                            <h5 className="text-center hcolor text-color"> Application Development </h5>
                            <Fade in>
                                <ul className="no-bullets text-color">
                                    <li>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolioserver-93c29.appspot.com/o/logos%2FreactLogo.png?alt=media&token=3208ded9-304e-45f9-b0db-46b78e57a6ae" alt="React Logo" />
                                        <span>React Native</span>
                                    </li>
                                    <li>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolioserver-93c29.appspot.com/o/logos%2FswiftLogo.png?alt=media&token=945639f0-f0df-46ee-abea-a3f110f98628" alt="Swift Logo" />
                                        <span>Swift</span>
                                    </li>
                                    <li>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolioserver-93c29.appspot.com/o/logos%2FjavaLogo.png?alt=media&token=a3822a54-d128-440f-8e9a-df2dacfb6713" alt="Java " />
                                        <span>Java</span>
                                    </li>
                                </ul>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="text-center text-color">Some Featured Works</h2>
            <div className="row">
                <div className="col-12 col-sm col-md-6">
                    <RenderCard item={props.project}
                        isLoading={props.projectsLoading}
                        errMess={props.projectsErrMess} />
                </div>
                <div className="col-12 col-sm col-md-6">
                    <RenderCard item={props.project1}
                        isLoading={props.projectsLoading}
                        errMess={props.projectsErrMess} />
                </div>
            </div>
        </div>
    );
}


export default Home; 