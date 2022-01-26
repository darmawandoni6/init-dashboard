import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

const errAlert = (touched, error, warning) => {
  if (touched) {
    if (error) {
      return <span>{error}</span>;
    } else if (warning) {
      return <span>{warning}</span>;
    }
    return null;
  }

  return null;
};

export const inputTextField = ({
  input,
  name,
  label,
  requiredStar,
  placeholder,
  disabled,
  maxLength,
  readOnly,
  meta: { touched, error, warning }
}) => {
  return (
    <Form.Group className="form-group mb-2">
      {label && (
        <Form.Label>
          {label}
          {requiredStar && <span className="form-error"> *</span>}
        </Form.Label>
      )}
      <Form.Control
        {...input}
        id={name}
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        maxLength={maxLength}
        className={touched && error && 'form-error'}
      />

      {errAlert(touched, error, warning)}
    </Form.Group>
  );
};

export const inputPasswordField = ({
  input,
  name,
  label,
  requiredStar,
  placeholder,
  disabled,
  maxLength,
  readOnly,
  meta: { touched, error, warning }
}) => {
  return (
    <Form.Group className="form-group mb-2">
      {label && (
        <Form.Label>
          {label}
          {requiredStar && <span className="form-error"> *</span>}
        </Form.Label>
      )}
      <InputGroup className={touched && error && 'form-error'}>
        <Form.Control
          {...input}
          id={name}
          type="password"
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          maxLength={maxLength}
        />
        <div className="input-group-div">
          <i className="fas fa-eye"></i>
        </div>
      </InputGroup>
      {errAlert(touched, error, warning)}
    </Form.Group>
  );
};
