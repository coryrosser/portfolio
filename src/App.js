import React from 'react';
import './App.css';
import CRAnimate from './components/CRAnimate'
import {GoArrowRight} from 'react-icons/go'
import ContentContainer from './components/ContentContainer'
import {Row, Col, ListGroup} from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
  background: url(https://bit.ly/2W3mkgd);
  height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'Raleway', sans-serif;
  .container-row {
    width: 100vw;
    min-height: 100vh;
    margin-left: 0;
    background: rgb(42, 157, 143, 0.8);
  }
  .name-row{
    width: 100%;
    height: 100%;
    margin-left: 0;
    border-bottom: white solid 1px;
  }
  .title-col {
    min-height: 100vh;
  }
  .content-col{
    overflow-y: scroll;
    width: 100%;
    height: 100vh;
    margin-left: 0;
    border-bottom: white solid 1px;
  }
  .title {
    color: #f7f7f7;
    font-size: 2.5rem;
    margin-top: 15vh;
    text-align: center;
    span {
      font-size: 3.5rem;
      color: #e76f51;
      font-weight: 800;
    }
  }
  .nav-list {
    margin-top: 2rem;
    text-align: right;
    font-size: 2rem;
    color: #f7f7f7;
  }
  .nav-list .list-item {
    background: rgb(0,0,0,0);
    border: none;
    border-bottom: rgb(255,255,255,0.5) solid 1px;
    cursor: pointer;
    &:hover {
      color: #e76f51;
      transition: 0.4s;
    }
  }
  .active {
    color: #e76f51;
  }

`

class App extends React.Component {
  state ={
    show: 2,
    formShow: false,
  }
  render() {
    return (
        <Styles>
          <Row className='container-row'>
            <Row className='name-row'>
              <Col className='title-col' xs={12} md={6} lg={4}>
                <CRAnimate />
                <ListGroup flush 
                className='nav-list'>
                  <ListGroup.Item
                    onClick={() => this.setState({show: 0})} 
                    className={this.state.show === 0 ? 'list-item active' : 'list-item'}>
                    Projects <GoArrowRight />
                  </ListGroup.Item>
                    <ListGroup.Item 
                    onClick={() => this.setState({show: 2})}
                    className={this.state.show === 2 ? 'list-item active' : 'list-item'}>
                      Blogs <GoArrowRight />
                    </ListGroup.Item>
                    <ListGroup.Item 
                    onClick={() => this.setState({show: 1})}
                    className={this.state.show === 1 ? 'list-item active' : 'list-item'}>
                      Contact <GoArrowRight />
                    </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col className='content-col' xs={12} md={6} lg={8}>
                <ContentContainer
                show={this.state.show}/>
              </Col>
            </Row>
          </Row>
        </Styles>
    )
  }
}

export default App;
