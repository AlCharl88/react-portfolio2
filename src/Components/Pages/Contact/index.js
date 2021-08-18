import React from "react";
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Row, Col, NavLink
} from 'reactstrap';
import emailIcon from "../../Pictures/email.jpg";
import githubIcon from "../../Pictures/github.png";
import linkedInIcon from "../../Pictures/linkedin.png";
import headshot from "../../Pictures/alain.jpg";
import resume from "../../Pictures/ResumeTagne.pdf"
import "./style.css";
import MediaQuery, { useMediaQuery } from 'react-responsive';

const Contact = (props) => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1024px)'
    });

    const isTabletOrPhone = useMediaQuery({
        query: '(max-device-width: 1023px)'
    });

    return (
        <div>    
            {isDesktopOrLaptop && <>
                <h3 className="m-5 text-center">Contact Information</h3>
                <hr className="my-4" />
                <Row className="d-flex justify-content-center">
                    <Card className="w-50 mt-3">
                        <CardHeader tag="h3" >
                            <Row>
                                <Col className="ml-4">
                                    Alain C. Tagne Kuate
                                </Col>
                                <Button color="secondary" className="mr-5" href={resume} target="_blank">Resume</Button>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col xs="5"><img className="headshot shadow bg-white rounded mt-3" src={headshot} alt="Headshot"/></Col>
                                <Col className="text-Left m-3">
                                    <CardTitle className="lead text-center font-weight-bold">Senior Research Scientist</CardTitle>
                                    <hr className="m-3" />
                                    <NavLink href="mailto:alctagne@gmail.com"><img className="logo" src={emailIcon} alt="Logo"/> : Alain C. Tagne Kuate</NavLink>
                                    <NavLink href="https://www.linkedin.com/in/alain-charly-tagne-kuate-phd-88799a18/"><img className="logo" src={linkedInIcon} alt="Logo"/> : Alain C. Tagne kuate</NavLink>
                                    <NavLink href="https://github.com/AlCharl88"><img className="logo" src={githubIcon} alt="Logo"/> : AlCharl88</NavLink>                
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Row>
            </>}
            {isTabletOrPhone && <>
                <h3 className="m-3 text-center">Contact Information</h3>
                <hr className="my-4" />
                <Row className="d-flex justify-content-center">
                    <Card className="m-3">
                        <CardHeader tag="h3" >
                            <Row className="justify-content-center">
                                Alain C. Tagne Kuate
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <Row className="justify-content-center"><img className="headshot shadow bg-white rounded mt-3" src={headshot} alt="Headshot"/></Row>
                            <Row className="justify-content-center mt-3">
                                <CardTitle className="lead font-weight-bold">Senior Research Scientist</CardTitle>
                            </Row>
                            <hr/>
                            <Row>
                                <Col className="text-center">
                                    <Button color="secondary" className="mb-3" href={resume} target="_blank">Resume</Button>
                                    <NavLink href="mailto:alctagne@gmail.com"><img className="logo" src={emailIcon} alt="Logo"/> : Alain C. Tagne Kuate</NavLink>
                                    <NavLink href="https://www.linkedin.com/in/alain-charly-tagne-kuate-phd-88799a18/"><img className="logo" src={linkedInIcon} alt="Logo"/> : Alain C. Tagne Kuate</NavLink>
                                    <NavLink href="https://github.com/AlCharl88"><img className="logo" src={githubIcon} alt="Logo"/> : AlCharl88</NavLink>
                                </Col>                
                            </Row>
                        </CardBody>
                    </Card>
                </Row>
            </>}
        </div>
    );
}

export default Contact;