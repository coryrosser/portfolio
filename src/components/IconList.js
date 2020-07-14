import React from 'react' 
import {Row, Col} from 'react-bootstrap'
import styled from 'styled-components'
import {FaGithubSquare, FaTwitterSquare, FaLinkedin, FaEnvelopeSquare, FaFileAlt } from 'react-icons/fa'

const Styles = styled.div`
    .contact{
        text-align: center;
        width: 100%;
    }
    .contact .item {
        font-size: 3.5vh;
        color: #f7f7f7;
        margin-left: auto;
        margin-right: auto;
        cursor: pointer;
        &:hover {
            color: #e76f51;
            transition: 0.4s;
        }
    }
`

const CRAnimate = () => {
    return (
        <Styles>
            <Row className='contact'>
                <Col><a target="_blank" 
                rel="noopener noreferrer"
                href='https://github.com/coryrosser'><FaGithubSquare className='item'/></a></Col>
                <Col><a target="_blank" 
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/cortlyn-rosser/"><FaLinkedin className='item'/></a> </Col>
                <Col><a target="_blank" 
                rel="noopener noreferrer"
                href='https://twitter.com/CortlynRosser'><FaTwitterSquare className='item'/></a> </Col>
                <Col><a target="_blank" rel="noopener noreferrer"><FaFileAlt className='item'/></a></Col>
            </Row>
        </Styles>
    )
}
    
export default CRAnimate