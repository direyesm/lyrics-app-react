import React, { Fragment, useContext } from "react";
import { SongsContext } from "./../../contexts/SongContext";
import SearchTracks from "./searchTracks";
import Tracks from "./Tracks";
import ProgressBar from "./../Common/ProgressBar";
import Message from "./../Common/Message";

const Songs = () => {
  const { validateQTrack, doneFetch, tracks, text } = useContext(SongsContext);
  return (
    <Fragment>
      <SearchTracks validateQTrack={validateQTrack} />
      {doneFetch ? (
        tracks.length ? (
          <Tracks text={text} tracks={tracks} />
        ) : (
          <Message text={text} />
        )
      ) : (
        <ProgressBar />
      )}
    </Fragment>
  );
};

export default Songs;
