import _ from 'lodash';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

const StreamEdit = ({ match, fetchStream, stream, editStream }) => {
  useEffect(() => {
    fetchStream(match.params.id);
  }, []);

  const onSubmit = (formValues) => {
    console.log(
      '🚀 ~ file: StreamEdit.js ~ line 13 ~ onSubmit ~ formValues',
      formValues
    );
    editStream(match.params.id, formValues);
  };

  return (
    <div>
      <h3>Edit a Stream</h3>
      <StreamForm
        onSubmit={onSubmit}
        initialValues={_.pick(stream, 'title', 'description')}
      />
    </div>
  );
};

const mapStateToProps = (state, { match }) => {
  return {
    stream: state.streams[match.params.id]
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
