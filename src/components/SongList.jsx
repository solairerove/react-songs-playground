import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectSong from '../actions';

class SongList extends Component {
  renderList() {
    const { songs, clickSong } = this.props;
    return songs.map(song => (
      <div className="item" key={song.title}>
        <div className="right floated content">
          <button type="button" className="ui button primary" onClick={() => clickSong(song)}>
            Select
          </button>
        </div>

        <div className="content">{song.title}</div>
      </div>
    ));
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

SongList.propTypes = {
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      duration: PropTypes.string,
    }),
  ).isRequired,
  clickSong: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  songs: state.songs,
});

export default connect(
  mapStateToProps,
  {
    clickSong: selectSong,
  },
)(SongList);
