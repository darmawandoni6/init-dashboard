import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { inputPasswordField, inputTextField } from 'src/components/fields/Fields';
import formName from 'src/constants/formName';
import { emailValid, required } from 'src/helpers/reduxForm/validate';
import { Form, InputGroup } from 'react-bootstrap';

const { formLogin } = formName;

const Login = ({ handleSubmit }) => {
  const onSubmit = (val) => {
    console.log(val);
  };
  return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="6">
            <Card>
              <Card.Body>
                <h1>Login</h1>
                <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                  <Field
                    name="login"
                    label="Email"
                    component={inputTextField}
                    placeholder="Input Email"
                    validate={[required, emailValid]}
                  />
                  <Field
                    name="password"
                    label="Password"
                    component={inputPasswordField}
                    placeholder="Input Password"
                    validate={[required]}
                  />
                  <button className="btn btn-primary">Login</button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default reduxForm({ form: formLogin })(Login);
