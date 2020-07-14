import React from 'react' 
import {Row, Col, Card} from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
    .form-container {
        height: 85vh;
        margin-top: 18vh;
        text-align: center;
    }
    
`

const About = (props) => {

    return(
        <Styles>
        <div className='form-container'>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScjKqLmffua07FVvw6oJ2wT4F9U94yghbeuryMzVkPgNvZVxg/viewform?embedded=true" 
            className='g-form'
            width="640" 
            height="709" 
            frameborder="0" 
            marginheight="0" 
            marginwidth="0">Loading…</iframe>
        </div>
        </Styles>
    )
    
}

export default About