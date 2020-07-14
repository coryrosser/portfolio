import React from 'react' 
import {Row, Col, Card, Image, Button} from 'react-bootstrap'
import {FaReact, } from 'react-icons/fa'
import {DiJavascript1, DiPostgresql, DiRuby } from 'react-icons/di'
import styled from 'styled-components'

const Styles = styled.div`
    .project-title-row{
        height: 5vh;
        width: 100%;
        margin-left: 0;
    }
    .project-title-row div {
        color: #f7f7f7;
        font-size: 2rem;
        margin-left: auto;
        margin-right: auto;
    }
    .card-row{ 
        margin-top: 8vh;
        justify-content: center;
    }
    .project-card{
        margin-left: auto;
        margin-right: auto;
        margin-top: 10vh;
        background: rgb(255,255,255, 0.7);
        box-shadow: 0 8px 6px -6px black;
    }
    .card-image {
        max-height: 300px;
        box-shadow: 0 8px 6px -6px black;
    }
    .project-card-row {
        margin-top: 2.5vh;
    }
    .project-title {
        font-size: 2rem;
        text-align:center;
        width: 100%;
    }
    .project-stack-row {
        font-size: 2rem;
    }
    .project-links {
        align-items: center;
        justify-content: center;
        width: 100%;

    }
    .link-btn {
        width: 6.5vw;
        background: rgb(42, 157, 143, 0.8);
        border: rgb(0,0,0,0.3) solid 1px;
        cursor: pointer;
        &:hover {
            background: rgb(42, 157, 143, 1);
        }
    }
`

const Projects = (props) => {

    return(
        <Styles>
            <Row className='card-row'>
                <Col xs={12}>
                    <Card className='project-card'>
                        <Card.Body>
                            <Row>
                            <Col xs={12} lg={7} xl={7}>
                                <Image 
                                className='card-image'
                                src=' https://i.imgur.com/HK5cBhm.png' />
                            </Col>
                            <Col xs={12}  lg={7} xl={5}>
                                <Row className='project-card-row'>
                                    <div 
                                    className='project-title'>
                                        VisTrack
                                    </div>
                                </Row>
                                <Row className='project-stack-row'>
                                        <Col><FaReact/></Col>
                                        <Col><DiJavascript1/></Col>
                                        <Col><DiPostgresql/></Col>
                                        <Col><DiRuby/></Col>
                                </Row>
                                <Row className='project-card-row'>
                                    <div 
                                    className='project-description'>
                                        VisTrack is a Data Visualization app makes
                                        Data Entry Simple and Engaging. VisTrack creates 
                                        beautiful Charts from your data via manual entry or
                                        by uploading any CSV/ Excel file
                                    </div>
                                </Row>
                                <Row className='project-card-row'>
                                    <Row 
                                    className='project-links'>
                                        <Col />
                                        <Col xs={12} md={5} lg={3}>
                                        <Button className='link-btn'>
                                            Live Demo
                                        </Button>
                                        </Col>
                                        <Col xs={12} md={5} lg={3}>
                                        <Button className='link-btn'>
                                            Github
                                        </Button>
                                        </Col>
                                        <Col />
                                    </Row>
                                </Row>
                            </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card className='project-card'>
                        <Card.Body>
                            <Row>
                            <Col xs={7}>
                                <Image 
                                className='card-image'
                                src=' https://i.imgur.com/HK5cBhm.png' />
                            </Col>
                            <Col xs={5}>
                                <Row className='project-card-row'>
                                    <div 
                                    className='project-title'>
                                        VisTrack
                                    </div>
                                </Row>
                                <Row className='project-stack-row'>
                                        <Col><FaReact/></Col>
                                        <Col><DiJavascript1/></Col>
                                        <Col><DiPostgresql/></Col>
                                        <Col><DiRuby/></Col>
                                </Row>
                                <Row className='project-card-row'>
                                    <div 
                                    className='project-description'>
                                        VisTrack is a Data Visualization app makes
                                        Data Entry Simple and Engaging. VisTrack creates 
                                        beautiful Charts from your data via manual entry or
                                        by uploading any CSV/ Excel file
                                    </div>
                                </Row>
                                <Row className='project-card-row'>
                                    <Row 
                                    className='project-links'>
                                        <Col />
                                        <Col>
                                        <Button className='link-btn'>
                                            Live Demo
                                        </Button>
                                        </Col>
                                        <Col >
                                        <Button className='link-btn'>
                                            Github
                                        </Button>
                                        </Col>
                                        <Col />
                                    </Row>
                                </Row>
                            </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card className='project-card'>
                        <Card.Body>
                            <Row>
                            <Col xs={7}>
                                <Image 
                                className='card-image'
                                src=' https://i.imgur.com/HK5cBhm.png' />
                            </Col>
                            <Col xs={5}>
                                <Row className='project-card-row'>
                                    <div 
                                    className='project-title'>
                                        VisTrack
                                    </div>
                                </Row>
                                <Row className='project-stack-row'>
                                        <Col><FaReact/></Col>
                                        <Col><DiJavascript1/></Col>
                                        <Col><DiPostgresql/></Col>
                                        <Col><DiRuby/></Col>
                                </Row>
                                <Row className='project-card-row'>
                                    <div 
                                    className='project-description'>
                                        VisTrack is a Data Visualization app makes
                                        Data Entry Simple and Engaging. VisTrack creates 
                                        beautiful Charts from your data via manual entry or
                                        by uploading any CSV/ Excel file
                                    </div>
                                </Row>
                                <Row className='project-card-row'>
                                    <Row 
                                    className='project-links'>
                                        <Col />
                                        <Col>
                                        <Button className='link-btn'>
                                            Live Demo
                                        </Button>
                                        </Col>
                                        <Col >
                                        <Button className='link-btn'>
                                            Github
                                        </Button>
                                        </Col>
                                        <Col />
                                    </Row>
                                </Row>
                            </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Styles>
    )
    
}

export default Projects