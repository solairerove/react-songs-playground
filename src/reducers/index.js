import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'So far away', duration: '4:04' },
        { title: 'Outside', duration: '4:53' },
        { title: 'Насекомые', duration: '5:56' },
        { title: 'Винтовка', duration: '2:22' },
        { title: 'Mudshovel', duration: '4:42' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
