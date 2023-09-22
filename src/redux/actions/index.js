export const getAlbumAction = (albumId) => {
  return async (dispatch) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId);

      if (response.ok) {
        let album = await response.json();
        dispatch({
          type: "GET_ALBUM",
          payload: album,
        });
        dispatch({
          type: "GET_ALBUM_TRACKS",
          payload: album.tracks.data,
        });
      }
    } catch (exception) {
      console.log(exception);
    }
  };
};
