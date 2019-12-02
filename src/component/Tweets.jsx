import React, { Component } from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  CardBody,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading 
} from 'reactstrap';
import _ from 'lodash';

class Tweets extends Component {
  componentDidMount(){
    this.reloadTweetComponent();
  }

  reloadTweetComponent(){
    const { actions } = this.props;
    setTimeout(() => {
      actions.fetchTweet();
      window.location = "/"
    }, 5000);
  }
  render(){
    const { tweets } = this.props
    return(
       <div className='section section-static-pages'>
         <Container>
           <Row>
             <Col md="12">
              <Card>
                <CardBody >
                  <div className='section section-tweets'>
                    <h4 className='label-title p-3 mb-4'>Tweets</h4>
                    <ListGroup className='p-3 mb-4'>
                      {tweets ? (
                        _.map(tweets, (item, index) => {
                          return(
                            <ListGroupItem key={item.id} style={{listStyle: 'none'}}>                            
                              <ListGroupItemHeading style={{textAlign: 'justify'}}>
                                <p>{index+1} - {item.tweet}</p>
                              </ListGroupItemHeading>
                            </ListGroupItem>
                          );
                        })
                      ): null}
                    </ListGroup>
                  </div>
                 </CardBody>
               </Card>
             </Col>
           </Row>
         </Container>
       </div>
    );
  }
}

export default Tweets;