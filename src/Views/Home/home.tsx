import React, { Component } from 'react';
import { Card, Button, Carousel, Row, Col, CardDeck } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Imge from '../../Assets/profile.jpg';
import { isNotEmptyArray } from '../../Helpers/helpers';
import { loadArticle } from './homeActions';

class Home extends Component {
  componentDidMount() {
    const { loadArticle } = this.props;
    loadArticle();
  }
  render() {
    console.log('props', this.props);
    const { article } = this.props;
    const { articles } = article;
    return (
      <div className='animated fadeIn'>
        <h1 style={{ textAlign: 'center' }}>Where Next?</h1>
        <Carousel>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={Imge}
              alt='First slide'
              height='250px'
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={Imge}
              alt='Third slide'
              height='250px'
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={Imge}
              alt='Third slide'
              height='250px'
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Row style={{ marginTop: '1.5rem' }}>
          {isNotEmptyArray(articles) &&
            articles.map((article: Array<any>, i: number) => {
              return (
                <Col sm='3' key={i}>
                  <Card>
                    <Card.Img variant='top' src={article.img} />
                    <Card.Body>
                      <Card.Title>{article.title}</Card.Title>
                      <Card.Text
                        style={{
                          textOverflow: 'ellipsis',
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {article.text}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <div
                        style={{
                          justifyContent: 'space-between',
                          display: 'flex',
                        }}
                      >
                        <Link className='text-muted' to={`/article/${article.id}`}>Read More</Link>
                        <small className='text-muted'>{article.time}</small>
                      </div>
                    </Card.Footer>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ article }) => {
  return {
    article: { ...article },
  };
};

export default connect(mapStateToProps, { loadArticle })(Home);
