import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

const StreamShow = ({ fetchStream, match, stream }) => {
  useEffect(() => {
    fetchStream(match.params.id);
  }, []);

  if (!stream) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </div>
  );
};

const mapStateToProps = (state, { match }) => {
  return {
    stream: state.streams[match.params.id]
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
