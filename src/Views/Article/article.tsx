import React, { Component } from 'react';
import { Col, ListGroup, Row, Form, Button } from 'react-bootstrap';
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
import Imge from '../../Assets/profile.jpg';

class Article extends Component {
  render() {
    console.log('props', this.props);
    return (
      <div className='animated fadeIn'>
        <Row>
          <Col sm='8'>
            <h1>Mysore</h1>
            <img
              src={Imge}
              alt='Mysore'
              className='d-block w-100'
              height='350px'
            />
            <div
              style={{
                justifyContent: 'space-between',
                display: 'flex',
              }}
            >
              <small className='text-muted'>Photo By: &copy; Deekshith</small>
              <small className='text-muted'>Posted on 22-09-2020</small>
            </div>
            <p style={{ marginTop: '25px', fontSize: '18px' }}>
              &emsp;&emsp;&emsp;Famously known as The City of Palaces, it
              wouldn’t be wrong to say that Mysore, currently Mysuru, is one of
              the most important places in the country regarding ancient reigns.
              It is replete with the history of its dazzling royal heritage,
              intricate architecture, its famed silk sarees, yoga, and
              sandalwood, to name just a few. Located in the foothills of the
              Chamundi Hills, Mysore is the third most populated city in
              Karnataka, and its rich heritage draws millions of tourists all
              year round. The highlight is the majestic Mysore Palace, a UNESCO
              World Heritage Site, which is a must-visit. Mysore was one of the
              three largest Princely States in the erstwhile British Empire of
              India. To this day, the Mysore Palace stands tall as one of the
              most spectacular palaces in India. A very famous tourist spot that
              sees thousands of visitors milling in and around it every day, the
              Mysore Palace is a mesmerizing example of Indo-Saracenic
              architecture, every inch of the palace drips with opulence and
              intricate details, and every room that you visit stands out in
              terms of its elaborate architecture, beautiful paintings, rich
              colours and stained-glass windows. On every Sunday, and during the
              Dussehra celebrations, the palace is spectacularly lit up once
              dusk falls. Another popular element in Mysore is the Ashtanga
              School of Yoga. This draws visitors and practitioners from around
              the world to participate in this style of yoga that originated in
              Mysore.
            </p>
            <div style={{ background: 'white', padding: '1rem' }}>
              About the author
              <p>Some sentance about the author who writes here</p>
            </div>
            <div
              style={{
                marginTop: '1rem',
                background: 'white',
                padding: '1rem',
              }}
            >
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId='formGridName'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter name'
                      style={{ background: '#e4e5e6' }}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId='formGridEmail'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type='email'
                      placeholder='EnterEmail'
                      style={{ background: '#e4e5e6' }}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId='formGridComment'>
                  <Form.Label>Comment</Form.Label>
                  <Form.Control
                    as='textarea'
                    placeholder='Leave a Comment'
                    style={{ background: '#e4e5e6' }}
                  />
                </Form.Group>
                <div style={{textAlign: 'center'}}>
                  <Button variant='primary' type='submit' style={{width: '40%'}}>
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
          <Col sm='4'>
            <h1>Suggested Article</h1>
            <ListGroup variant='flush'>
              <ListGroup.Item>16 Place to Visit in Mysore</ListGroup.Item>
              <ListGroup.Item>HotSpot of Mysore</ListGroup.Item>
              <ListGroup.Item>Street Foods in Mysore</ListGroup.Item>
              <ListGroup.Item>Stay at Mysore</ListGroup.Item>
            </ListGroup>
            <div
              style={{
                display: 'flex',
                marginTop: '5px',
              }}
            >
              <FacebookShareButton
                url={`website.com/${this.props.location.pathname}`}
              >
                <FacebookIcon size={35} round />
              </FacebookShareButton>
              <WhatsappShareButton
                url={`website.com/${this.props.location.pathname}`}
              >
                <WhatsappIcon size={35} round />
              </WhatsappShareButton>
              <TwitterShareButton
                url={`website.com/${this.props.location.pathname}`}
              >
                <TwitterIcon size={35} round />
              </TwitterShareButton>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Article;
