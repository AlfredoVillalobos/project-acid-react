import React, { Component } from "react";
import {
  Button,
  Row,
  Col,
  Container,
  Label
} from "reactstrap";
import { Field, reduxForm } from "redux-form";

class Create extends Component {
  constructor(props){
    super(props);
    this.state = {
      tweet: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  onSubmit(values) {
    const { actions } = this.props;
    let data = { content:  (values["tweet"] || {}).content}
    actions.createTweet(data)
  }
  
  handleChange(event){
    this.setState({tweet: event.target.value })
  }

  renderInputForm(){
    return(
      <Row>
        <Col md="6">
          <Label>Tweet: </Label>
          <Field
            name="tweet[content]"
            component="input"
            type="text"
            placeholder="Escribe un tweet"
          />
        </Col>
      </Row>
    );
  }

  render(){
    const { handleSubmit } = this.props
    return (
      <Container>
        <div className="section section-offers">
          <h3 className="p-2 mb-2 bg-primary text-white h5">
            <strong>New Tweet</strong>
          </h3>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            {this.renderInputForm()}
            <Row>
              <Col md="3">
                <Button type="submit" color="primary">
                  Enviar
                </Button>
              </Col>
            </Row>
          </form>
        </div>
      </Container>
    );
  }
};

Create = reduxForm({
  enableReinitialize: true,
  form: "Create"
})(Create);

export default Create;
