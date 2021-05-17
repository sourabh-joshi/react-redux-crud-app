import React from 'react';
import { Field, reduxForm } from 'redux-form';

const StreamForm = ({ handleSubmit, onSubmit }) => {
  const onFormSubmit = (values) => {
    onSubmit(values);
  };

  return (
    <form className="ui form error" onSubmit={handleSubmit(onFormSubmit)}>
      <Field name="title" component={renderInput} label="Enter Title" />
      <Field
        name="description"
        component={renderInput}
        label="Enter Description"
      />
      <button className="ui button primary">Submit</button>
    </form>
  );
};

const renderError = ({ error, touched }) => {
  if (touched && error) {
    return (
      <div className="ui error message">
        <div className="header">{error}</div>
      </div>
    );
  }
};

const renderInput = ({ input, label, meta }) => {
  const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
  return (
    <div className={className}>
      <label>{label}</label>
      <input {...input} autoComplete="off" type="text" />
      {renderError(meta)}
    </div>
  );
};

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'Title cannot be empty';
  }

  if (!formValues.description) {
    errors.description = 'Description cannot be empty';
  }

  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm);
