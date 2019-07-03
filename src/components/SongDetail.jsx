import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <div />;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title:
        {' '}
        {song.title}
        <br />
        Duration:
        {' '}
        {song.duration}
      </p>
    </div>
  );
};

SongDetail.propTypes = {
  song: PropTypes.shape({
    title: PropTypes.string,
    duration: PropTypes.string,
  }),
};

SongDetail.defaultProps = {
  song: null,
};

const mapStateToProps = state => ({
  song: state.selectedSong,
});

export default connect(mapStateToProps)(SongDetail);
