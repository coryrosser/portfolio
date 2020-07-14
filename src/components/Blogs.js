import React from 'react' 
import {Row, Col, Card, Image, Button} from 'react-bootstrap'
import {FaReact, } from 'react-icons/fa'
import {DiJavascript1, DiPostgresql, DiRuby } from 'react-icons/di'
import styled from 'styled-components'

const Styles = styled.div`
    .blog-row {
        margin-left: auto;
        margin-right: auto;
        justify-content: center;
        background: rgb(255,255,255,0.5);
        margin-top: 5vh;
        width: 60%;
        padding: 1rem;
        border-radius: 10px;
    }
    .blog-title {
        margin-top: 8vh;
        text-align: center;
    }
    .blog-title div {
        font-size: 2rem;
        color: #f7f7f7;
        margin-left: auto;
        margin-right: auto;
    }
`

class Blogs extends React.Component {

    componentDidMount() {
    }
    render() {
        
        return (
            <Styles>
                <Row className='blog-title'><div>Medium Articles</div></Row>
            <div className='blog-row'> 
            <blockquote class="embedly-card"><h4><a href="https://medium.com/@coryrosser/becoming-a-problem-solver-73ac10425764">Becoming a Problem Solver</a></h4><p>If you've ever been plugging away on a project and hit "Run" on your infallible block of code only to see the console have a melt-down; just know, everyone has.</p></blockquote>
            </div>
            <div className='blog-row'>
            <blockquote class="embedly-card"><h4><a href="https://medium.com/@coryrosser/local-storage-what-when-and-how-fb73c746391">Local Storage: What, When, and How?</a></h4><p>localStorage is a part of the HTML5 Web Storage API. It allows you, the developer, the ability to store information within the browser and gives you a way to easily retrieve and use the stored data...</p></blockquote>
            </div>
            <div className='blog-row'>
            <blockquote class="embedly-card"><h4><a href="https://medium.com/@coryrosser/a-programmers-silent-assistant-85144c759b67">A Programmers Silent Assistant</a></h4><p>Rails supports six types of associations: In my example above we used a has_many association and belongs_to which, thus far, are more commonly used by me along with has_many :though . I won't get into all of the associations in this post but I will try to explain in a little more detail the two we've already used and how they help us.</p></blockquote>
            </div>
            <div className='blog-row'>
            <blockquote class="embedly-card"><h4><a href="https://medium.com/@coryrosser/oop-in-ruby-74f32d0f01de">OOP in Ruby</a></h4><p>As a developer, you'll often be tasked to model your code after real-world objects, events, and scenarios. Think of a house for example. Every house that's built must have a blueprint to tell the constructors how to build the house. In development, that's where our Class comes in.</p></blockquote>
            </div>
            </Styles>
        );
    }
    
}

export default Blogs