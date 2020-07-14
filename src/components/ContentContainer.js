import React from 'react' 
import Projects from './Projects'
import About from './About'
import Blogs from './Blogs'
import styled from 'styled-components'

const Styles = styled.div`

`

const ContentContainer = (props) => {
    return props.show === 0 ?
        <Projects />        :
        props.show === 1    ?
        <About />           :
        <Blogs />
    
}

export default ContentContainer