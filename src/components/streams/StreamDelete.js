import React, { useEffect } from 'react';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const StreamDelete = ({ match, stream, fetchStream, deleteStream }) => {
  useEffect(() => {
    fetchStream(match.params.id);
  }, []);

  const renderActions = () => {
    return (
      <React.Fragment>
        <button
          onClick={() => {
            deleteStream(match.params.id);
          }}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  };

  const renderContent = () => {
    if (!stream) {
      return 'Are you sure you want to delete this stream?';
    }

    return `Are you sure want to delete the stream with title: ${stream.title}?`;
  };

  return (
    <Modal
      title="Delete Stream"
      content={renderContent()}
      actions={renderActions()}
      onDismiss={() => history.push('/')}
    />
  );
};

const mapStateToProps = (state, { match }) => {
  return { stream: state.streams[match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
