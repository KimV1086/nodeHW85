import axios from "../../axios-api";

export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';

export const FETCH_ALBUMS_FAILURE = "FETCH_ALBUMS_FAILURE";

export const FETCH_ALBUM_ID_SUCCESS = "FETCH_ALBUM_ID_SUCCESS";

const fetchAlbumsSuccess = data => ({type: FETCH_ALBUMS_SUCCESS, data});

const fetchAlbumsFailure = error => ({type: FETCH_ALBUMS_FAILURE, error});

const fetchAlbumsIdSuccess = data => ({type: FETCH_ALBUM_ID_SUCCESS, data});

export const fetchAlbumsArtist = (id) => {
    return dispatch => {
        return axios.get('/albums/?artist=' + id).then(
            response => dispatch(fetchAlbumsSuccess(response.data)),
            error => dispatch(fetchAlbumsFailure(error))
        );
    };
};

export const fetchAlbumsId = (id) => {
    return dispatch => {
        return axios.get('/albums/' + id).then(
            response => dispatch(fetchAlbumsIdSuccess(response.data)),
            error => dispatch(fetchAlbumsFailure(error))
        );
    };
};

