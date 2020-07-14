import React from 'react' 
import {Row, Col} from 'react-bootstrap'
import styled from 'styled-components'
import IconList from './IconList'

const Styles = styled.div`
margin-left: auto;
margin-right: auto;

    .icon-row {
        margin-left: 0;
    }
    .title-text {
        color: #f7f7f7;
        text-align: center;
        font-size: 3.5vh;
        margin-bottom: 5vh;
    }
    
    .title {
    color: #f7f7f7;
    font-size: 4.25vh;
    margin-top: 15vh;
    text-align: center;
    span {
        font-size: 6vh;
        color: #e76f51;
        font-weight: 800;
    }
    }


    @keyframes fade {
        0% {
            color: rgb(6, 214, 160, 0);
            filter: blur(8px);
        }
        50% {
            color: rgb(6, 214, 160, 0.5);
            filter: blur(4px);
        }
        100% {
            color: rgb(6, 214, 160, 1);
        }
    }
`

const CRAnimate = () => {
    return (
    <Styles>
        <Col>
            <div className='title'>Hi, I'm <span>Cortlyn Rosser</span></div>
            <div className='title-text'>Full Stack Software Developer
            in Atlanta, Georgia</div>
            <IconList />
        </Col>
    </Styles>
    )
}

export default CRAnimate