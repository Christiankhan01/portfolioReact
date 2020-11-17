import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade } from 'react-animation-components';
import Image from 'react-bootstrap/Image';



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

        <div className="container ">
            <header className="jumbotron ">
                <div className="row row-header ">
                    <div className="col-12 col-sm-6 col-md-6 ">
                        <h1>FullStack Web Developer</h1>
                        <h5>Welcome to my portfolio web application. This portoflio will demonstrate my skills in <font color="#007bff">Fullstack Web Development</font> using the MERN (Mongodb, ExpressJS, ReactJS and NodeJS) stack. Plese feel free to leave any feedback for me which can be found the in Contacts section of this application. Thank You and Happy Browsing!</h5>
                    </div>
                    <div className="align-self-center col-12 col-sm-6 col-md-6">
                        <Image src={baseUrl + ("assets/logos/devLogo.png")} fluid alt="Developer Image" />
                    </div>
                </div>
            </header>
            <div className="container">
                <h2 className="text-center text-color">My Skills</h2>
                <div className="row  ">
                    <div className=" row-content col-12 col-md-4">
                        <h5 className="text-center text-color"> FullStack Web Development</h5>
                        <Fade in>
                            <ul className="no-bullets text-color">
                                <li>
                                    <img src={baseUrl + ("./assets/logos/javascriptLogo.png")} alt="JavascriptLogo.png" />
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
                                    <img src={baseUrl + ("./assets/logos/expressLogo.png ")} alt="expressLogo" />
                                    <span>Express</span>
                                </li>
                                <li>
                                    <img src={baseUrl + ("./assets/logos/mongoLogo.png")} alt="NoSql MongoDB Logo" />
                                    <span>NoSql MongoDB</span>
                                </li>
                            </ul>
                        </Fade>
                    </div>


                    <div class="row-content col-12 col-md-4">
                        <h5 class="text-center text-color"> Database Administration </h5>
                        <Fade in>
                            <ul class="no-bullets text-color">
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
                        </Fade>
                    </div>
                    <div class="row-content col-12 col-md-4 ">
                        <h5 class="text-center text-color"> Application Development </h5>
                        <Fade in enterOpacity={0.95}>
                            <ul class="no-bullets text-color">
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
                        </Fade>
                    </div>
                </div>
            </div>

            <RenderCard item={props.project}
                isLoading={props.projectsLoading}
                errMess={props.projectsErrMess}
            />


        </div>

    );
}


export default Home; 